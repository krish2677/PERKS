import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ProfilePage.css';

// Data for the multi-select options
const interestsOptions = [
    // Core CS/IT
    'Algorithms & Data Structures', 'Mathematics', 'Competitive Programming',
    // Specializations
    'AI/ML', 'Data Science', 'Computer Vision',
    // Development
    'Web Development', 'App Development', 'Game Development', 'AR/VR',
    // Infrastructure
    'Cybersecurity', 'Cloud Computing', 'Networking', 'DevOps',
    // Hardware
    'Hardware/VLSI', 'IoT', 'Robotics', 'Embedded Systems',
    // Interdisciplinary
    'Biotechnology', 'GIS', 'FinTech', 'Entrepreneurship'
];
const languageOptions = ['Python', 'JavaScript', 'Java', 'C++', 'C', 'Go', 'Rust', 'Kotlin', 'Swift'];
// --- UPDATED: Expanded list of career goals ---
const careerGoalOptions = [
    'Software Engineer', 'Web Developer', 'Mobile App Developer', 
    'Data Scientist', 'AI/ML Engineer', 'Cybersecurity Analyst', 
    'Cloud Engineer', 'DevOps Engineer', 'Hardware Engineer', 
    'VLSI Engineer', 'Product Manager', 'Entrepreneur', 'Researcher'
];


// A reusable component for the multi-select UI
const MultiSelect = ({ options, selected, onSelect, title }) => {
    const toggleSelection = (option) => {
        if (selected.includes(option)) {
            onSelect(selected.filter(item => item !== option));
        } else {
            onSelect([...selected, option]);
        }
    };

    return (
        <div className="multi-select-container">
            <h4>{title}</h4>
            <div className="options-grid">
                {options.map(option => (
                    <button
                        key={option}
                        type="button"
                        className={`option-btn ${selected.includes(option) ? 'selected' : ''}`}
                        onClick={() => toggleSelection(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        displayName: '',
        age: '',
        gender: '',
        phoneNumber: '',
        interests: [],
        programmingLanguages: [],
        careerGoals: [],
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/auth/profile', { credentials: 'include' });
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                    setFormData({
                        displayName: userData.displayName || '',
                        age: userData.age || '',
                        gender: userData.gender || '',
                        phoneNumber: userData.phoneNumber || '',
                        interests: userData.interests || [],
                        programmingLanguages: userData.programmingLanguages || [],
                        careerGoals: userData.careerGoals || [],
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
        setMessage('');
        setError('');

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
                setError(errorData.message || 'Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            setError('An error occurred. Please try again.');
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
                <p>Keep your information up to date to get personalized recommendations.</p>
                
                {message && <p className="response-message success">{message}</p>}
                {error && <p className="response-message error">{error}</p>}
                
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h3>Basic Information</h3>
                        <div className="form-group">
                            <label htmlFor="displayName">Display Name</label>
                            <input type="text" id="displayName" name="displayName" value={formData.displayName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>Personalize Your Experience</h3>
                        <MultiSelect 
                            title="Your Interests"
                            options={interestsOptions}
                            selected={formData.interests}
                            onSelect={(selected) => setFormData({...formData, interests: selected})}
                        />
                        <MultiSelect 
                            title="Preferred Languages"
                            options={languageOptions}
                            selected={formData.programmingLanguages}
                            onSelect={(selected) => setFormData({...formData, programmingLanguages: selected})}
                        />
                        <MultiSelect 
                            title="Career Goals"
                            options={careerGoalOptions}
                            selected={formData.careerGoals}
                            onSelect={(selected) => setFormData({...formData, careerGoals: selected})}
                        />
                    </div>

                    <button type="submit" className="update-btn">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;

