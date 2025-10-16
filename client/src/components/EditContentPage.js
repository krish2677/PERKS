import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import './EditContentPage.css'; // Assuming you have corresponding CSS

const EditContentPage = () => {
    const { type, id } = useParams();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [activeTab, setActiveTab] = useState('basic');
    const [clubLogoFile, setClubLogoFile] = useState(null); // State for the selected logo file

    const API_BASE_URL = ''; // Adjust if your API is on a different domain/port, otherwise leave empty for relative path

    // Function to deep clone and update nested state
    const handleNestedChange = useCallback((path, value) => {
        setContent(prevContent => {
            if (!prevContent) return prevContent; // Defensive check
            const newContent = JSON.parse(JSON.stringify(prevContent));
            let current = newContent;
            for (let i = 0; i < path.length - 1; i++) {
                if (current[path[i]] === undefined || current[path[i]] === null) {
                    current[path[i]] = Array.isArray(path[i+1]) ? [] : {}; // Initialize as array or object
                }
                current = current[path[i]];
            }
            current[path[path.length - 1]] = value;
            return newContent;
        });
    }, []);

    const addNestedItem = useCallback((path, newItem) => {
        setContent(prevContent => {
            if (!prevContent) return prevContent;
            const newContent = JSON.parse(JSON.stringify(prevContent));
            let current = newContent;
            let finalKey = path[path.length - 1];
            for (let i = 0; i < path.length - 1; i++) {
                if (current[path[i]] === undefined || current[path[i]] === null) current[path[i]] = {};
                current = current[path[i]];
            }
            if (!Array.isArray(current[finalKey])) current[finalKey] = [];
            current[finalKey].push(newItem);
            return newContent;
        });
    }, []);

    const removeNestedItem = useCallback((path) => {
        setContent(prevContent => {
            if (!prevContent) return prevContent;
            const newContent = JSON.parse(JSON.stringify(prevContent));
            let parent = newContent;
            for (let i = 0; i < path.length - 1; i++) {
                parent = parent[path[i]];
                if (!parent) return prevContent; // Path not found
            }
            const indexToRemove = path[path.length - 1];
            if (Array.isArray(parent)) {
                parent.splice(indexToRemove, 1);
            } else if (typeof parent === 'object' && parent !== null) {
                // Handle removal of object properties, though current structure seems to use array indices
                delete parent[indexToRemove];
            }
            return newContent;
        });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}/api/content/${type}/${id}`, { credentials: 'include' });
                if (response.ok) {
                    const data = await response.json();
                    setContent(data);
                } else {
                    setError('Failed to fetch content for editing.');
                }
            } catch (err) {
                setError('An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [type, id, API_BASE_URL]);

    // Handler for logo file selection
    const handleLogoFileChange = (e) => {
        setClubLogoFile(e.target.files[0]);
    };

    const uploadImage = async () => {
        if (!clubLogoFile) return null; // No file selected

        const formData = new FormData();
        formData.append('image', clubLogoFile); // 'image' should match the name expected by multer on backend

        try {
            // Make sure your backend has a route like POST /api/upload-image
            const response = await fetch(`${API_BASE_URL}/api/upload-image`, {
                method: 'POST',
                body: formData, // No 'Content-Type' header needed for FormData
                credentials: 'include',
            });

            if (response.ok) {
                const result = await response.json();
                return result.imageUrl; // Assuming backend returns { imageUrl: '...' }
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to upload image.');
                return null;
            }
        } catch (err) {
            setError('An error occurred during image upload.');
            return null;
        }
    };


    const handleSave = async () => {
        setMessage('Saving...');
        setError('');
        try {
            let finalContent = { ...content }; // Start with current content

            // 1. Upload image if a new one is selected
            if (clubLogoFile) {
                const imageUrl = await uploadImage();
                if (imageUrl) {
                    // Update content with new image URL
                    if (type === 'clubs') {
                        finalContent = { ...finalContent, logoUrl: imageUrl };
                    }
                    // Handle other content types if they also get image uploads
                } else {
                    setMessage(''); // Clear saving message as upload failed
                    return; // Stop if image upload failed
                }
            }

            // 2. Save the rest of the content data
            const response = await fetch(`${API_BASE_URL}/api/content/${type}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(finalContent), // Send the potentially updated content
            });

            if (response.ok) {
                const updatedData = await response.json();
                setContent(updatedData); // Update state with the server's response
                setClubLogoFile(null); // Clear selected file after successful upload/save
                setMessage('Content updated successfully!');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to save changes.');
            }
        } catch (err) {
            setError('An error occurred during the save operation.');
        }
    };

    if (loading) return <div className="loading-container">Loading Editor...</div>;
    if (error) return <p className="error-message">{error}</p>;
    if (!content) return <div>No content to edit.</div>;

    const getTabs = () => {
        if (type === 'roadmaps') {
            const yearTabs = (content.roadmap || []).map((year, index) => ({ id: `year-${index}`, label: year.year || `Year ${index + 1}` }));
            return [{ id: 'basic', label: 'Basic Info' }, ...yearTabs, { id: 'internship', label: 'Internship' }];
        }
        if (type === 'clubs') {
            return [{ id: 'basic', label: 'Basic Info' }, { id: 'details', label: 'Club Details' }, { id: 'events', label: 'Events' }, { id: 'links', label: 'Social Links' }];
        }
        return [];
    };
    const tabs = getTabs();

    // Helper to render an array of string inputs
    const renderStringArrayInputs = (label, path, placeholder = '', currentArray = []) => (
        <div className="form-group dynamic-list">
            <label>{label}</label>
            {(currentArray || []).map((item, index) => (
                <div key={index} className="list-item">
                    <input
                        type="text"
                        value={item}
                        placeholder={placeholder}
                        onChange={e => {
                            const newArr = [...currentArray];
                            newArr[index] = e.target.value;
                            handleNestedChange([...path, index], newArr[index]);
                        }}
                    />
                    <button type="button" className="remove-btn" onClick={() => removeNestedItem([...path, index])}>Remove</button>
                </div>
            ))}
            <button type="button" className="add-item-btn" onClick={() => addNestedItem(path, '')}>+ Add {label.replace(' List', '').split(' ')[0]}</button>
        </div>
    );

    // Helper to render an array of objects (e.g., name/description, or role/name)
    const renderObjectArrayInputs = (label, path, currentArray = [], key1 = 'name', key2 = 'description', key1Placeholder = 'Name', key2Placeholder = 'Description') => (
        <div className="form-group dynamic-list">
            <label>{label}</label>
            {(currentArray || []).map((item, index) => (
                <div key={index} className="list-item object-item">
                    <input
                        type="text"
                        placeholder={key1Placeholder}
                        value={item[key1] || ''} // Dynamically access item[key1]
                        onChange={e => handleNestedChange([...path, index, key1], e.target.value)} // Dynamically set key1
                    />
                    <textarea
                        placeholder={key2Placeholder}
                        value={item[key2] || ''} // Dynamically access item[key2]
                        onChange={e => handleNestedChange([...path, index, key2], e.target.value)} // Dynamically set key2
                    />
                    <button type="button" className="remove-btn" onClick={() => removeNestedItem([...path, index])}>Remove</button>
                </div>
            ))}
            <button type="button" className="add-item-btn" onClick={() => addNestedItem(path, { [key1]: '', [key2]: '' })}>+ Add {label.replace(' List', '')}</button>
        </div>
    );


    return (
        <div className="edit-content-container">
            <div className="edit-content-wrapper">
                <Link to="/admin/content" className="back-link">← Back to Content Management</Link>
                <h2>Editing: {content.name}</h2>
                {message && <p className="status-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}

                <div className="edit-tabs">
                    {tabs.map(tab => (
                        <button key={tab.id} className={`edit-tab ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {activeTab === 'basic' && (
                    <div className="form-section">
                        <h3>Basic Information</h3>
                        <label>Name</label>
                        <input type="text" value={content.name || ''} onChange={e => handleNestedChange(['name'], e.target.value)} />
                        <label>Slug (URL identifier)</label>
                        <input type="text" value={content.slug || ''} onChange={e => handleNestedChange(['slug'], e.target.value)} />
                        <label>Description</label>
                        <textarea value={content.description || ''} onChange={e => handleNestedChange(['description'], e.target.value)} rows="4" />

                        {type === 'clubs' && (
                            <>
                                {/* Club Logo Upload */}
                                <div className="form-group file-upload-section">
                                    <label>Club Logo</label>
                                    {content.logoUrl && (
                                        <div className="current-logo-preview">
                                            <p>Current Logo:</p>
                                            <img src={content.logoUrl} alt="Club Logo" style={{ maxWidth: '150px', maxHeight: '150px', border: '1px solid #ddd', padding: '5px' }} />
                                        </div>
                                    )}
                                    <input type="file" accept="image/*" onChange={handleLogoFileChange} />
                                    {clubLogoFile && <p>Selected: {clubLogoFile.name}</p>}
                                    <p className="note">Upload a new image to replace the current logo.</p>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* ROADMAP SPECIFIC TABS */}
                {type === 'roadmaps' && (content.roadmap || []).map((year, yearIndex) => (
                    activeTab === `year-${yearIndex}` && (
                        <div key={yearIndex}>
                            <div className="form-section">
                                <h3>Academic Details for {year.year || `Year ${yearIndex + 1}`}</h3>
                                <label>Year Title</label>
                                <input type="text" value={year.year} placeholder="Year Name" onChange={e => handleNestedChange(['roadmap', yearIndex, 'year'], e.target.value)} />
                                <label>Skill Guidance</label>
                                <textarea value={year.skillGuidance || ''} onChange={e => handleNestedChange(['roadmap', yearIndex, 'skillGuidance'], e.target.value)} rows="3" placeholder="Add skill guidance..." />

                                {(year.semesters || []).map((semester, semIndex) => (
                                    <div key={semIndex} className="nested-section nested-item">
                                        <div className="list-item-header">
                                            <input type="text" value={semester.semester} placeholder="Semester Name" onChange={e => handleNestedChange(['roadmap', yearIndex, 'semesters', semIndex, 'semester'], e.target.value)} />
                                            <button type="button" className="remove-btn" onClick={() => removeNestedItem(['roadmap', yearIndex, 'semesters', semIndex])}>Remove Sem</button>
                                        </div>
                                        {(semester.subjects || []).map((subject, subIndex) => (
                                            <div key={subIndex} className="subject-form object-item">
                                                <input type="text" placeholder="Subject Name" value={subject.name || ''} onChange={e => handleNestedChange(['roadmap', yearIndex, 'semesters', semIndex, 'subjects', subIndex, 'name'], e.target.value)} />
                                                <input type="text" placeholder="Key Concepts (comma-separated)" value={(subject.keyConcepts || []).join(', ')} onChange={e => handleNestedChange(['roadmap', yearIndex, 'semesters', semIndex, 'subjects', subIndex, 'keyConcepts'], e.target.value.split(',').map(s => s.trim()))} />
                                                <textarea placeholder="Notes" value={subject.notes || ''} onChange={e => handleNestedChange(['roadmap', yearIndex, 'semesters', semIndex, 'subjects', subIndex, 'notes'], e.target.value)} />
                                                <button type="button" className="remove-btn" onClick={() => removeNestedItem(['roadmap', yearIndex, 'semesters', semIndex, 'subjects', subIndex])}>Remove Subject</button>
                                            </div>
                                        ))}
                                        <button type="button" className="add-item-btn" onClick={() => addNestedItem(['roadmap', yearIndex, 'semesters', semIndex, 'subjects'], { name: '', keyConcepts: [], notes: '' })}>+ Add Subject</button>
                                    </div>
                                ))}
                                <button type="button" className="add-item-btn" onClick={() => addNestedItem(['roadmap', yearIndex, 'semesters'], { semester: '', subjects: [] })}>+ Add Semester</button>
                            </div>

                            {/* Electives Guidance Section */}
                            {year.electivesGuidance && (
                                <div className="form-section dynamic-list">
                                    <h3>Electives Guidance for {year.year}</h3>
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        value={year.electivesGuidance.title || ''}
                                        onChange={e => handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'title'], e.target.value)}
                                    />
                                    <label>Description</label>
                                    <textarea
                                        value={year.electivesGuidance.description || ''}
                                        onChange={e => handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'description'], e.target.value)}
                                    />

                                    {/* Minors (Second Year) */}
                                    {year.year?.toLowerCase().includes('second') && (
                                        <>
                                            {renderObjectArrayInputs('Minor Options', ['roadmap', yearIndex, 'electivesGuidance', 'options'], year.electivesGuidance.options, 'name', 'reason')}
                                        </>
                                    )}

                                    {/* DLOC + Honours (Third Year) */}
                                    {year.year?.toLowerCase().includes('third') && (
                                        <>
                                            {renderObjectArrayInputs('DLOC Options', ['roadmap', yearIndex, 'electivesGuidance', 'dlocOptions'], year.electivesGuidance.dlocOptions, 'name', 'reason')}
                                            {renderObjectArrayInputs('Honours Options', ['roadmap', yearIndex, 'electivesGuidance', 'honoursOptions'], year.electivesGuidance.honoursOptions, 'name', 'reason')}
                                        </>
                                    )}

                                    {/* Fourth Year - No electives message */}
                                    {year.year?.toLowerCase().includes('fourth') && (
                                        <p className="note">No elective options available for Fourth Year.</p>
                                    )}
                                </div>
                            )}
                            {!year.electivesGuidance && (
                                <button type="button" className="add-item-btn" onClick={() => handleNestedChange(['roadmap', yearIndex, 'electivesGuidance'], { title: '', description: '', options: [], dlocOptions: [], honoursOptions: [] })}>+ Add Electives Guidance</button>
                            )}

                        </div>
                    )
                ))}

                {type === 'roadmaps' && activeTab === 'internship' && (
                    <div className="form-section dynamic-list">
                        <h3>Internship Guidance</h3>
                        <label>Title</label>
                        <input
                            type="text"
                            value={content.internshipGuidance?.title || ''}
                            onChange={e => handleNestedChange(['internshipGuidance', 'title'], e.target.value)}
                        />
                        <label>Description</label>
                        <textarea
                            value={content.internshipGuidance?.description || ''}
                            onChange={e => handleNestedChange(['internshipGuidance', 'description'], e.target.value)}
                        />
                        {renderObjectArrayInputs('Years', ['internshipGuidance', 'years'], content.internshipGuidance?.years || [], 'name', 'reason', 'Year Name (e.g., First Year)', 'Guidance')}
                    </div>
                )}

                {/* CLUB SPECIFIC TABS */}
                {type === 'clubs' && activeTab === 'details' && (
                    <div className="form-section">
                        <h3>Club Details</h3>
                        <label>Mission/Vision</label>
                        <textarea value={content.mission || ''} onChange={e => handleNestedChange(['mission'], e.target.value)} rows="4" />

                        {/* Hierarchy as Array of Objects (Role, Name) */}
                        {renderObjectArrayInputs('Club Hierarchy', ['hierarchy'], content.hierarchy || [], 'role', 'name', 'Role (e.g., President)', 'Member Name')}

                        <label>Benefits of Joining</label>
                        {renderStringArrayInputs('Benefits List', ['benefits'], 'Benefit description', content.benefits)}

                        <label>Key Achievements</label>
                        {renderStringArrayInputs('Achievements List', ['achievements'], 'Achievement description', content.achievements)}

                        <label>Contact Email</label>
                        <input type="email" value={content.contactEmail || ''} onChange={e => handleNestedChange(['contactEmail'], e.target.value)} />
                    </div>
                )}

                {type === 'clubs' && activeTab === 'events' && (
                    <div className="form-section">
                        <h3>Club Events</h3>
                        {renderObjectArrayInputs('Upcoming Events', ['upcomingEvents'], content.upcomingEvents || [], 'name', 'description', 'Event Name', 'Date/Description')}
                        {renderObjectArrayInputs('Past Events', ['pastEvents'], content.pastEvents || [], 'name', 'description', 'Event Name', 'Date/Description')}
                    </div>
                )}

                {type === 'clubs' && activeTab === 'links' && (
                    <div className="form-section">
                        <h3>Social Media & External Links</h3>
                        <label>Website URL</label>
                        <input type="url" value={content.website || ''} onChange={e => handleNestedChange(['website'], e.target.value)} />

                        <label>Instagram URL</label>
                        <input type="url" value={content.instagram || ''} onChange={e => handleNestedChange(['instagram'], e.target.value)} />

                        <label>LinkedIn URL</label>
                        <input type="url" value={content.linkedin || ''} onChange={e => handleNestedChange(['linkedin'], e.target.value)} />

                        <label>Other Link (e.g., Discord, Facebook)</label>
                        <input type="url" value={content.otherLink || ''} onChange={e => handleNestedChange(['otherLink'], e.target.value)} />
                    </div>
                )}

                <button onClick={handleSave} className="save-btn">
                    Save All Changes
                </button>
            </div>
        </div>
    );
};

export default EditContentPage;