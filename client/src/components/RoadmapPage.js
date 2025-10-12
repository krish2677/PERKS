import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RoadmapPage.css';
import Chatbox from './Chatbox'; // Import the Chatbox component

const RoadmapPage = () => {
    const [user, setUser] = useState(null);
    const [showLogout, setShowLogout] = useState(false);
    const [isProfileComplete, setIsProfileComplete] = useState(true);
    const navigate = useNavigate();
    const profileRef = useRef(null);

    // State for dynamic content from the database
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

    // --- NEW: Helper function to check if a club is recommended ---
    const isClubRecommended = (club) => {
        if (!user || !user.interests || user.interests.length === 0) return false;

        const clubNameLower = club.name.toLowerCase();
        const clubDescLower = club.description.toLowerCase();
        
        // Keywords associated with interests
        const interestKeywords = {
            'AI/ML': ['artificial intelligence', 'machine learning', 'ieee', 'csi'],
            'Data Science': ['data', 'computer society', 'csi'],
            'Web Development': ['computer society', 'csi', 'web'],
            'Cybersecurity': ['security', 'computer society', 'csi'],
            'Hardware/VLSI': ['electrical', 'electronics', 'ieee'],
            'Robotics': ['robotics', 'ieee', 'mechanical'],
            'Entrepreneurship': ['entrepreneurship', 'iste'],
            'Cloud Computing': ['computer society', 'csi', 'cloud'],
            'App Development': ['computer society', 'csi', 'app']
        };

        // Check if any of the user's interests match keywords in the club's name or description
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
                                    {/* --- NEW: Recommended Badge --- */}
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

