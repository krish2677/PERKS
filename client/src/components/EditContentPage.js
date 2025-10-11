import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './EditContentPage.css';

const EditContentPage = () => {
    const { type, id } = useParams();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const [activeTab, setActiveTab] = useState('basic');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/content/${type}/${id}`, { credentials: 'include' });
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
    }, [type, id]);

    // Handlers for state changes
    const handleNestedChange = (path, value) => {
        setContent(prevContent => {
            const newContent = JSON.parse(JSON.stringify(prevContent));
            let current = newContent;
            for (let i = 0; i < path.length - 1; i++) {
                if (current[path[i]] === undefined || current[path[i]] === null) current[path[i]] = {};
                current = current[path[i]];
            }
            current[path[path.length - 1]] = value;
            return newContent;
        });
    };

    const addNestedItem = (path, newItem) => {
        setContent(prevContent => {
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
    };

    const removeNestedItem = (path) => {
        setContent(prevContent => {
            const newContent = JSON.parse(JSON.stringify(prevContent));
            let parent = newContent;
            for (let i = 0; i < path.length - 1; i++) {
                parent = parent[path[i]];
            }
            const indexToRemove = path[path.length - 1];
            if (Array.isArray(parent)) {
                parent.splice(indexToRemove, 1);
            }
            return newContent;
        });
    };

    const handleSave = async () => {
        setMessage('Saving...');
        setError('');
        try {
            const response = await fetch(`/api/content/${type}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(content),
            });
            if (response.ok) {
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
    if (error) return <div className="error-message">{error}</div>;
    if (!content) return <div>No content to edit.</div>;

    const getTabs = () => {
        if (type === 'roadmaps') {
            const yearTabs = (content.roadmap || []).map((year, index) => ({ id: `year-${index}`, label: year.year || `Year ${index + 1}` }));
            return [{ id: 'basic', label: 'Basic Info' }, ...yearTabs, { id: 'internship', label: 'Internship' }];
        }
        if (type === 'clubs') {
            return [{ id: 'basic', label: 'Basic Info' }, { id: 'details', label: 'Club Details' }, { id: 'lists', label: 'Lists' }];
        }
        return [];
    };
    const tabs = getTabs();

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
                    </div>
                )}

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
                                                <input type="text" placeholder="Subject Name" value={subject.name} onChange={e => handleNestedChange(['roadmap', yearIndex, 'semesters', semIndex, 'subjects', subIndex, 'name'], e.target.value)} />
                                                <input type="text" placeholder="Key Concepts (comma-separated)" value={(subject.keyConcepts || []).join(', ')} onChange={e => handleNestedChange(['roadmap', yearIndex, 'semesters', semIndex, 'subjects', subIndex, 'keyConcepts'], e.target.value.split(',').map(s => s.trim()))} />
                                                <textarea placeholder="Notes" value={subject.notes} onChange={e => handleNestedChange(['roadmap', yearIndex, 'semesters', semIndex, 'subjects', subIndex, 'notes'], e.target.value)} />
                                                <button type="button" className="remove-btn" onClick={() => removeNestedItem(['roadmap', yearIndex, 'semesters', semIndex, 'subjects', subIndex])}>Remove Subject</button>
                                            </div>
                                        ))}
                                        <button type="button" className="add-item-btn" onClick={() => addNestedItem(['roadmap', yearIndex, 'semesters', semIndex, 'subjects'], { name: '', keyConcepts: [], notes: '' })}>+ Add Subject</button>
                                    </div>
                                ))}
                                <button type="button" className="add-item-btn" onClick={() => addNestedItem(['roadmap', yearIndex, 'semesters'], { semester: '', subjects: [] })}>+ Add Semester</button>
                            </div>

                            {/* --- THIS IS THE FIX --- */}
                            {/* Check for the existence of the electivesGuidance object before rendering */}
                            {year.electivesGuidance && (
                                <div className="form-section dynamic-list">
                                    <h3>Electives Guidance for {year.year}</h3>

                                    <label>Title</label>
                                    <input
                                        type="text"
                                        value={year.electivesGuidance.title || ''}
                                        onChange={e =>
                                            handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'title'], e.target.value)
                                        }
                                    />
                                    <label>Description</label>
                                    <textarea
                                        value={year.electivesGuidance.description || ''}
                                        onChange={e =>
                                            handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'description'], e.target.value)
                                        }
                                    />

                                    {/* ✅ SECOND YEAR → Minors only */}
                                    {year.year?.toLowerCase().includes('second') && (
                                        <>
                                            <div className="nested-item">
                                                <h4>Minor Options</h4>
                                                {(year.electivesGuidance.options || []).map((opt, index) => (
                                                    <div key={index} className="list-item object-item">
                                                        <input
                                                            type="text"
                                                            placeholder="Option Name"
                                                            value={opt.name}
                                                            onChange={e =>
                                                                handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'options', index, 'name'], e.target.value)
                                                            }
                                                        />
                                                        <textarea
                                                            placeholder="Reason/Description"
                                                            value={opt.reason}
                                                            onChange={e =>
                                                                handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'options', index, 'reason'], e.target.value)
                                                            }
                                                        />
                                                        <button
                                                            type="button"
                                                            className="remove-btn"
                                                            onClick={() =>
                                                                removeNestedItem(['roadmap', yearIndex, 'electivesGuidance', 'options', index])
                                                            }
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                ))}
                                                {/* ✅ Add button shown only for Second Year */}
                                                <button
                                                    type="button"
                                                    className="add-item-btn"
                                                    onClick={() =>
                                                        addNestedItem(['roadmap', yearIndex, 'electivesGuidance', 'options'], { name: '', reason: '' })
                                                    }
                                                >
                                                    + Add Minor Option
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    {/* ✅ THIRD YEAR → DLOC + Honours only */}
                                    {year.year?.toLowerCase().includes('third') && (
                                        <>
                                            <div className="nested-item">
                                                <h4>DLOC Options</h4>
                                                {(year.electivesGuidance.dlocOptions || []).map((opt, index) => (
                                                    <div key={index} className="list-item object-item">
                                                        <input
                                                            type="text"
                                                            placeholder="Option Name"
                                                            value={opt.name}
                                                            onChange={e =>
                                                                handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'dlocOptions', index, 'name'], e.target.value)
                                                            }
                                                        />
                                                        <textarea
                                                            placeholder="Reason/Description"
                                                            value={opt.reason}
                                                            onChange={e =>
                                                                handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'dlocOptions', index, 'reason'], e.target.value)
                                                            }
                                                        />
                                                        <button
                                                            type="button"
                                                            className="remove-btn"
                                                            onClick={() =>
                                                                removeNestedItem(['roadmap', yearIndex, 'electivesGuidance', 'dlocOptions', index])
                                                            }
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                ))}
                                                <button
                                                    type="button"
                                                    className="add-item-btn"
                                                    onClick={() =>
                                                        addNestedItem(['roadmap', yearIndex, 'electivesGuidance', 'dlocOptions'], { name: '', reason: '' })
                                                    }
                                                >
                                                    + Add DLOC Option
                                                </button>
                                            </div>

                                            <div className="nested-item">
                                                <h4>Honours Options</h4>
                                                {(year.electivesGuidance.honoursOptions || []).map((opt, index) => (
                                                    <div key={index} className="list-item object-item">
                                                        <input
                                                            type="text"
                                                            placeholder="Option Name"
                                                            value={opt.name}
                                                            onChange={e =>
                                                                handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'honoursOptions', index, 'name'], e.target.value)
                                                            }
                                                        />
                                                        <textarea
                                                            placeholder="Reason/Description"
                                                            value={opt.reason}
                                                            onChange={e =>
                                                                handleNestedChange(['roadmap', yearIndex, 'electivesGuidance', 'honoursOptions', index, 'reason'], e.target.value)
                                                            }
                                                        />
                                                        <button
                                                            type="button"
                                                            className="remove-btn"
                                                            onClick={() =>
                                                                removeNestedItem(['roadmap', yearIndex, 'electivesGuidance', 'honoursOptions', index])
                                                            }
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                ))}
                                                <button
                                                    type="button"
                                                    className="add-item-btn"
                                                    onClick={() =>
                                                        addNestedItem(['roadmap', yearIndex, 'electivesGuidance', 'honoursOptions'], { name: '', reason: '' })
                                                    }
                                                >
                                                    + Add Honours Option
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    {/* ✅ FOURTH YEAR → No electives */}
                                    {year.year?.toLowerCase().includes('fourth') && (
                                        <p className="note">No elective options available for Fourth Year.</p>
                                    )}
                                </div>
                            )}

                        </div>
                    )
                ))}

                {type === 'roadmaps' && activeTab === 'internship' && (
                    <div className="form-section dynamic-list">
                        <h3>Internship Guidance</h3>
                        {/* ... Internship Guidance form ... */}
                    </div>
                )}

                {/* ... Club-specific forms ... */}

                <button onClick={handleSave} className="save-btn">
                    Save All Changes
                </button>
            </div>
        </div>
    );
};

export default EditContentPage;

