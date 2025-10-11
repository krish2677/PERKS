import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminContentPage.css';

const AdminContentPage = () => {
    const [roadmaps, setRoadmaps] = useState([]);
    const [clubs, setClubs] = useState([]);
    const [newRoadmapName, setNewRoadmapName] = useState('');
    const [newRoadmapSlug, setNewRoadmapSlug] = useState('');
    const [newClubName, setNewClubName] = useState('');
    const [newClubSlug, setNewClubSlug] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const roadmapsRes = await fetch('/api/content/roadmaps');
                if (roadmapsRes.ok) setRoadmaps(await roadmapsRes.json());

                const clubsRes = await fetch('/api/content/clubs');
                if (clubsRes.ok) setClubs(await clubsRes.json());
            } catch (error) {
                console.error("Failed to fetch content:", error);
            }
        };
        fetchData();
    }, []);

    const handleAdd = async (type) => {
        const name = type === 'roadmaps' ? newRoadmapName : newClubName;
        const slug = type === 'roadmaps' ? newRoadmapSlug : newClubSlug;

        if (!name || !slug) {
            alert('Please provide a name and a slug.');
            return;
        }

        const body = type === 'roadmaps'
            ? {
                name,
                slug,
                description: 'Add a description here.',
                roadmap: [
                    {
                        year: 'Year 1: Foundations',
                        semesters: [
                            {
                                semester: 'Semester 1',
                                subjects: [],
                            },
                        ],
                        skillGuidance: 'Add skill guidance for this year.',
                    },
                ],
                courses: [],
              }
            : { name, slug, description: '' };


        try {
            const response = await fetch(`/api/content/${type}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const newItem = await response.json();
                navigate(`/admin/edit/${type}/${newItem._id}`);
            } else {
                alert(`Failed to add new ${type === 'roadmaps' ? 'roadmap' : 'club'}.`);
            }
        } catch (error) {
            console.error('Failed to add content:', error);
        }
    };

    const handleDelete = async (type, id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await fetch(`/api/content/${type}/${id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                });
                if (type === 'roadmaps') {
                    setRoadmaps(roadmaps.filter(item => item._id !== id));
                } else {
                    setClubs(clubs.filter(item => item._id !== id));
                }
            } catch (error) {
                console.error('Failed to delete content:', error);
            }
        }
    };
    
    const handleEdit = (type, id) => {
        navigate(`/admin/edit/${type}/${id}`);
    };

    return (
        <div className="admin-content-container">
            <div className="admin-content-wrapper">
                {/* --- FIX: Back link restored --- */}
                <Link to="/admin" className="back-link">← Back to Admin Panel</Link>
                
                <h2>Manage Website Content</h2>

                {/* Roadmaps Section */}
                <div className="content-form-section">
                    <h3>Add New Roadmap</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleAdd('roadmaps'); }}>
                        <div className="form-row">
                            <input type="text" placeholder="Roadmap Name (e.g., Computer Science)" value={newRoadmapName} onChange={(e) => setNewRoadmapName(e.target.value)} />
                            <input type="text" placeholder="Slug (e.g., computer-science)" value={newRoadmapSlug} onChange={(e) => setNewRoadmapSlug(e.target.value)} />
                        </div>
                        <button type="submit" className="add-btn">Add Roadmap</button>
                    </form>
                </div>
                <div className="content-list-section">
                    <h3>Existing Roadmaps</h3>
                    <div className="content-list">
                        {(roadmaps || []).map(roadmap => (
                            <div key={roadmap._id} className="content-item">
                                <span>{roadmap.name}</span>
                                <div className="item-actions">
                                    <button onClick={() => handleEdit('roadmaps', roadmap._id)} className="edit-btn">Edit</button>
                                    <button onClick={() => handleDelete('roadmaps', roadmap._id)} className="delete-btn">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clubs Section */}
                <div className="content-form-section">
                    <h3>Add New Club</h3>
                    <form onSubmit={(e) => { e.preventDefault(); handleAdd('clubs'); }}>
                         <div className="form-row">
                            <input type="text" placeholder="Club Name (e.g., IEEE)" value={newClubName} onChange={(e) => setNewClubName(e.target.value)} />
                            <input type="text" placeholder="Slug (e.g., ieee)" value={newClubSlug} onChange={(e) => setNewClubSlug(e.target.value)} />
                        </div>
                        <button type="submit" className="add-btn">Add Club</button>
                    </form>
                </div>
                <div className="content-list-section">
                    <h3>Existing Clubs</h3>
                    <div className="content-list">
                        {(clubs || []).map(club => (
                            <div key={club._id} className="content-item">
                                <span>{club.name}</span>
                                <div className="item-actions">
                                    <button onClick={() => handleEdit('clubs', club._id)} className="edit-btn">Edit</button>
                                    <button onClick={() => handleDelete('clubs', club._id)} className="delete-btn">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminContentPage;

