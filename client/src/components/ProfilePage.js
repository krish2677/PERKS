import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ProfilePage.css'; // We will create this CSS file next

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        displayName: '',
        age: '',
        gender: '',
        phoneNumber: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Fetch user data on component mount
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/auth/profile', { credentials: 'include' });
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                    // Pre-fill form with existing data
                    setFormData({
                        displayName: userData.displayName || '',
                        age: userData.age || '',
                        gender: userData.gender || '',
                        phoneNumber: userData.phoneNumber || ''
                    });
                } else {
                    navigate('/login');
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
                navigate('/login');
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        try {
            const response = await fetch('/api/auth/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Profile updated successfully!');
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    if (!user) {
        return <div className="loading-container">Loading Profile...</div>;
    }

    return (
        <div className="profile-page-container">
            <div className="profile-form-wrapper">
                <Link to="/roadmap" className="back-link">← Back to Dashboard</Link>
                <h2>Edit Your Profile</h2>
                <p>Keep your personal information up to date.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="displayName">Display Name</label>
                        <input
                            type="text"
                            id="displayName"
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="update-btn">Save Changes</button>
                    {message && <p className="response-message">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;