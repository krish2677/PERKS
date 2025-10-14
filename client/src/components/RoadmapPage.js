import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RoadmapPage.css';
import Chatbox from './Chatbox';

// --- NEW: Project Idea Generator Component ---
const ProjectIdeaGenerator = () => {
    // Expanded list of technology options
    const techOptions = [
        'React', 'Node.js', 'MongoDB', 'Python', 'Machine Learning', 
        'Databases', 'APIs', 'Cybersecurity', 'Cloud Computing', 
        'Java', 'Spring Boot', 'SQL', 'NoSQL', 'Frontend Development',
        'Backend Development', 'Fullstack Development', 'Mobile Development',
        'Android (Kotlin/Java)', 'iOS (Swift/Objective-C)', 'Flutter', 
        'React Native', 'Data Science', 'Big Data', 'AI/Deep Learning', 
        'Natural Language Processing (NLP)', 'Computer Vision', 'DevOps',
        'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud (GCP)',
        'Blockchain', 'Web3', 'Game Development', 'Unity', 'C++', 'C#',
        'Embedded Systems', 'IoT (Internet of Things)', 'UI/UX Design',
        'Vue.js', 'Angular', 'TypeScript', 'GraphQL', 'Microservices'
    ];
    
    const [selectedTech, setSelectedTech] = useState([]);
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const toggleTech = (tech) => {
        setSelectedTech(prev => 
            prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
        );
    };

    const handleGenerate = async () => {
        if (selectedTech.length === 0) {
            setError('Please select at least one technology.');
            return;
        }
        setError('');
        setLoading(true);
        setIdeas([]); // Clear previous ideas when generating new ones
        try {
            const response = await fetch('/api/ai/generate-ideas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ technologies: selectedTech })
            });

            if (response.ok) {
                const data = await response.json();
                // Ensure data is an array before setting
                if (Array.isArray(data)) {
                    setIdeas(data);
                } else {
                    console.error("API response was not an array:", data);
                    setError('Received invalid data format from AI. Please try again.');
                }
            } else {
                const errorData = await response.json(); // Attempt to read error message from backend
                setError(errorData.message || 'Could not generate ideas. Please try again.');
                console.error("Error from AI API:", errorData);
            }
        } catch (err) {
            console.error('Frontend fetch error:', err);
            setError('An error occurred. Please check your network connection and server status.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="project-generator-section">
            <h2>Project Idea Generator</h2>
            <p>Select technologies you've learned and get personalized project ideas to build your portfolio.</p>
            
            <div className="tech-selection-grid">
                {techOptions.map(tech => (
                    <button 
                        key={tech}
                        className={`tech-btn ${selectedTech.includes(tech) ? 'selected' : ''}`}
                        onClick={() => toggleTech(tech)}
                        disabled={loading} // Disable buttons while loading
                    >
                        {tech}
                    </button>
                ))}
            </div>
            
            <button className="generate-btn" onClick={handleGenerate} disabled={loading || selectedTech.length === 0}>
                {loading ? 'Generating...' : 'Generate Ideas'}
            </button>
            
            {error && <p className="generator-error">{error}</p>}

            {loading && <p className="loading-message">Fetching fresh ideas from the AI...</p>}

            {ideas && ideas.length > 0 && (
                <div className="ideas-grid">
                    {ideas.map((idea, index) => (
                        <div key={index} className="idea-card">
                            <h3>{idea.title}</h3>
                            <p>{idea.description}</p>
                            <h4>Key Features:</h4>
                            <ul>
                                {idea.features && idea.features.map((feature, i) => <li key={i}>{feature}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
            {!loading && ideas.length === 0 && !error && (
                <p>No project ideas generated yet. Select technologies and click "Generate Ideas"!</p>
            )}
        </section>
    );
};


const RoadmapPage = () => {
    const [user, setUser] = useState(null);
    const [showLogout, setShowLogout] = useState(false);
    const [isProfileComplete, setIsProfileComplete] = useState(true);
    const navigate = useNavigate();
    const profileRef = useRef(null);

    const [roadmaps, setRoadmaps] = useState([]);
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/auth/profile', { credentials: 'include' });
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                    if (!userData.age || !userData.gender || !userData.phoneNumber) {
                        setIsProfileComplete(false);
                    } else {
                        setIsProfileComplete(true);
                    }
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
    
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const roadmapsRes = await fetch('/api/content/roadmaps');
                if (roadmapsRes.ok) setRoadmaps(await roadmapsRes.json());
                
                const clubsRes = await fetch('/api/content/clubs');
                if (clubsRes.ok) setClubs(await clubsRes.json());
            } catch (error) {
                console.error("Failed to fetch page content:", error);
            }
        };
        fetchContent();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowLogout(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/auth/logout', { credentials: 'include' });
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleViewRoadmap = (slug) => {
        if (slug) navigate(`/roadmap/${slug}`);
    };

    const handleViewClub = (slug) => {
        if (slug) navigate(`/club/${slug}`);
    };

    const isClubRecommended = (club) => {
        if (!user || !user.interests || user.interests.length === 0) return false;
        const clubNameLower = club.name.toLowerCase();
        const clubDescLower = club.description.toLowerCase();
        const interestKeywords = { 'AI/ML': ['artificial intelligence', 'machine learning', 'ieee', 'csi'], 'Data Science': ['data', 'computer society', 'csi'], 'Web Development': ['computer society', 'csi', 'web'], 'Cybersecurity': ['security', 'computer society', 'csi'], 'Hardware/VLSI': ['electrical', 'electronics', 'ieee'], 'Robotics': ['robotics', 'ieee', 'mechanical'], 'Entrepreneurship': ['entrepreneurship', 'iste'], 'Cloud Computing': ['computer society', 'csi', 'cloud'], 'App Development': ['computer society', 'csi', 'app'] };
        return user.interests.some(interest => {
            const keywords = interestKeywords[interest] || [interest.toLowerCase()];
            return keywords.some(keyword => clubNameLower.includes(keyword) || clubDescLower.includes(keyword));
        });
    };


    if (!user) {
        return <div className="loading-container">Loading Your Dashboard...</div>;
    }

    let userInitial = 'U';
    if (user.displayName) {
        userInitial = user.displayName.charAt(0).toUpperCase();
    } else if (user.email) {
        userInitial = user.email.charAt(0).toUpperCase();
    }

    return (
        <div className="roadmap-container">
            <header className="roadmap-header">
                <div className="roadmap-brand">PERKS</div>
                <div className="profile-section" ref={profileRef} onClick={() => setShowLogout(!showLogout)}>
                    <img
                        src={user.photo || `https://placehold.co/40x40/007bff/FFFFFF?text=${userInitial}`}
                        alt="User Profile"
                        className="profile-pic"
                    />
                    {!isProfileComplete && <div className="notification-dot"></div>}

                    {showLogout && (
                        <div className="profile-dropdown">
                            {user && user.role === 'admin' && (
                                <Link to="/admin" className="dropdown-item">Admin Panel</Link>
                            )}
                            <Link to="/profile" className="dropdown-item">Profile</Link>
                            <a href="/logout" onClick={handleLogout} className="dropdown-item">Logout</a>
                        </div>
                    )}
                </div>
            </header>

            <div className="main-content-wrapper">
                {!isProfileComplete && (
                    <div className="profile-incomplete-overlay">
                        <div className="overlay-content">
                            <h2>Complete Your Profile</h2>
                            <p>Please update your profile to access all features.</p>
                            <Link to="/profile" className="complete-profile-btn">Go to Profile</Link>
                        </div>
                    </div>
                )}

                <main className="roadmaps-main">
                    <h1>Choose Your Engineering Path</h1>
                    <p>Select a discipline to see a detailed roadmap and subject guidance.</p>
                    <div className="roadmaps-grid">
                        {(roadmaps || []).map((roadmap) => (
                            <div key={roadmap._id} className="roadmap-card">
                                <h3>{roadmap.name}</h3>
                                <p>{roadmap.description}</p>
                                <button className="view-roadmap-btn" onClick={() => handleViewRoadmap(roadmap.slug)}>
                                    View Roadmap
                                </button>
                            </div>
                        ))}
                    </div>

                    <ProjectIdeaGenerator />

                    <section className="clubs-committees-section">
                        <h2>Explore Professional Bodies</h2>
                        <p>Enhance your college experience and build your network by joining a professional chapter.</p>
                        <div className="clubs-grid">
                            {(clubs || []).map((club) => (
                                <div
                                    key={club._id}
                                    className="club-card clickable"
                                    onClick={() => handleViewClub(club.slug)}
                                >
                                    {isClubRecommended(club) && (
                                        <div className="recommended-badge-container">
                                            <span className="recommended-badge">★ Recommended</span>
                                        </div>
                                    )}
                                    <h3>{club.name}</h3>
                                    <p>{club.description}</p>
                                    <span className="view-details-link">View Details →</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            
            {user && user.role === 'user' && <Chatbox user={user} />}
        </div>
    );
};

export default RoadmapPage;