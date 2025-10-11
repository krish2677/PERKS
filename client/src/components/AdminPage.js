import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/admin/users', { credentials: 'include' });
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                } else if (response.status === 403) {
                    navigate('/roadmap');
                } else {
                    setError('Failed to fetch users.');
                }
            } catch (err) {
                setError('An error occurred.');
            }
        };
        fetchUsers();
    }, [navigate]);

    const handleDelete = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            try {
                const response = await fetch(`/api/admin/users/${userId}`, {
                    method: 'DELETE',
                    credentials: 'include',
                });
                if (response.ok) {
                    setUsers(users.filter(user => user._id !== userId));
                    setMessage('User deleted successfully.');
                } else {
                    setError('Failed to delete user.');
                }
            } catch (err) {
                setError('An error occurred during deletion.');
            }
        }
    };

    return (
        <div className="admin-container">
            <div className="admin-wrapper">
                <Link to="/roadmap" className="back-link">← Back to Dashboard</Link>
                <h2>Admin Panel</h2>
                
                <div className="admin-navigation">
                    {/* --- NEW: Link to Analytics Page --- */}
                    <Link to="/admin/analytics" className="nav-button">View Analytics</Link>
                    <Link to="/admin/content" className="nav-button">Manage Website Content</Link>
                    <Link to="/admin/support" className="nav-button">Manage Support Chats</Link>
                </div>

                <h3>User Management</h3>
                <p>Total Users: {users.length}</p>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
                <div className="user-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(users || []).map(user => (
                                <tr key={user._id}>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className={`role-badge role-${user.role}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(user._id)} 
                                            className="delete-btn"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;