import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ClubDetailPage.css'; // Ensure your CSS file is updated as well

const ClubDetailPage = () => {
    const { slug } = useParams();
    const [club, setClub] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Set your API base URL if different from the current domain, e.g., 'http://localhost:5000'
    const API_BASE_URL = '';

    useEffect(() => {
        const fetchClubData = async () => {
            if (!slug) {
                setError("Club identifier not found in the URL.");
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                // Include credentials to allow the backend to check the user's role (if any)
                const response = await fetch(`${API_BASE_URL}/api/content/clubs/slug/${slug}`, { credentials: 'include' });
                if (response.ok) {
                    const data = await response.json();
                    setClub(data);
                } else if (response.status === 404) {
                    setError('Club not found. Please check the URL.');
                } else {
                    // Catch other HTTP errors
                    const errorData = await response.json();
                    setError(errorData.message || 'Failed to fetch club details.');
                }
            } catch (err) {
                console.error("Error fetching club data:", err);
                setError('An error occurred while fetching club data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchClubData();
    }, [slug, API_BASE_URL]);

    if (loading) return <div className="loading-container">Loading Club Details...</div>;
    if (error) return <div className="error-container">{error}</div>;
    // If no club data after loading and no error, this means the club wasn't found.
    if (!club) return <div className="error-container">No club data available.</div>;

    // Helper to render social links if they exist
    const renderSocialLink = (url, iconClass, label) => {
        if (!url) return null;
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className={iconClass}></i> {label}
            </a>
        );
    };

    return (
        <div className="club-detail-container">
            <header className="club-header">
                <div className="club-header-content">
                    {club.logoUrl && (
                        <img src={club.logoUrl} alt={`${club.name} Logo`} className="club-logo" />
                    )}
                    <h1>{club.name}</h1>
                    {club.shortDescription && <p className="club-short-description">{club.shortDescription}</p>}
                    {club.category && <p className="club-category">Category: {club.category}</p>}
                    {club.department && <p className="club-department">Department: {club.department}</p>}
                    <Link to="/roadmap" className="back-link">← Back to All Clubs</Link> {/* Assumes /clubs is your clubs listing page */}
                </div>
            </header>

            <main className="club-main-content">
                <div className="content-grid">
                    <section className="club-section about-section">
                        <h2>About Us</h2>
                        <p>{club.description}</p>
                    </section>

                    {club.mission && (
                        <section className="club-section">
                            <h2>Our Mission</h2>
                            <p>{club.mission}</p>
                        </section>
                    )}

                    {(club.benefits && club.benefits.length > 0) && (
                        <section className="club-section">
                            <h2>Membership Benefits</h2>
                            <ul className="styled-list">
                                {club.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Hierarchy is now a string from the admin editor */}
                    {(club.hierarchy && club.hierarchy.length > 0) && (
                        <section className="club-section">
                            <h2>Our Hierarchy</h2>
                            <div className="hierarchy-grid">
                                {club.hierarchy.map((member, index) => (
                                    <div key={index} className="hierarchy-member">
                                        <p className="role">{member.role}</p>
                                        <p className="name">{member.name}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {(club.achievements && club.achievements.length > 0) && (
                        <section className="club-section">
                            <h2>Key Achievements</h2>
                            <ul className="styled-list">
                                {club.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {(club.upcomingEvents && club.upcomingEvents.length > 0) && (
                        <section className="club-section">
                            <h2>Upcoming Events</h2>
                            <div className="events-list">
                                {club.upcomingEvents.map((event, index) => (
                                    <div key={index} className="event-card">
                                        <h3>{event.name}</h3>
                                        <p className="event-date">Date: {event.date || 'TBD'}</p>
                                        <p>{event.reason || event.description}</p> {/* Use 'reason' if from edit form, fallback to 'description' */}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {(club.pastEvents && club.pastEvents.length > 0) && (
                        <section className="club-section">
                            <h2>Past Events</h2>
                            <div className="events-list">
                                {club.pastEvents.map((event, index) => (
                                    <div key={index} className="event-card past-event">
                                        <h3>{event.name}</h3>
                                        <p className="event-date">Date: {event.date || 'TBD'}</p>
                                        <p>{event.reason || event.description}</p> {/* Use 'reason' if from edit form, fallback to 'description' */}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Assuming 'howToJoin' will be added to the Club model and Admin panel if needed */}
                    {club.howToJoin && (
                        <section className="club-section how-to-join">
                            <h2>How to Join</h2>
                            <p>{club.howToJoin}</p>
                        </section>
                    )}

                    {/* Contact & Social Links */}
                    {(club.website || club.instagram || club.linkedin || club.otherLink || club.contactEmail) && (
                        <section className="club-section contact-info">
                            <h2>Connect With Us</h2>
                            <div className="contact-links">
                                {renderSocialLink(club.website, 'fas fa-globe', 'Website')}
                                {renderSocialLink(club.instagram, 'fab fa-instagram', 'Instagram')}
                                {renderSocialLink(club.linkedin, 'fab fa-linkedin', 'LinkedIn')}
                                {renderSocialLink(club.otherLink, 'fas fa-link', 'Other Link')}
                                {club.contactEmail && (
                                    <a href={`mailto:${club.contactEmail}`} className="social-link">
                                        <i className="fas fa-envelope"></i> {club.contactEmail}
                                    </a>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ClubDetailPage;