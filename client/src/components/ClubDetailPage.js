import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ClubDetailPage.css';

const ClubDetailPage = () => {
    const { slug } = useParams();
    const [club, setClub] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchClubData = async () => {
            if (!slug) {
                setError("Club identifier not found in the URL.");
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                // Include credentials to allow the backend to check the user's role
                const response = await fetch(`/api/content/clubs/slug/${slug}`, { credentials: 'include' });
                if (response.ok) {
                    const data = await response.json();
                    setClub(data);
                } else {
                    setError('Club not found.');
                }
            } catch (err) {
                setError('An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        };

        fetchClubData();
    }, [slug]);

    if (loading) return <div className="loading-container">Loading Club Details...</div>;
    if (error) return <div className="error-container">{error}</div>;
    if (!club) return null;

    return (
        <div className="club-detail-container">
            <header className="club-header">
                <div className="club-header-content">
                    <h1>{club.name}</h1>
                    <p className="tagline">{club.tagline}</p>
                    <Link to="/roadmap" className="back-to-dashboard">← Back to Dashboard</Link>
                </div>
            </header>

            <main className="club-main-content">
                <div className="content-grid">
                    <section className="club-section about-section">
                        <h2>About {club.name}</h2>
                        <p>{club.description}</p>
                    </section>

                    <section className="club-section">
                        <h2>Our Mission</h2>
                        <p>{club.mission}</p>
                    </section>

                    <section className="club-section">
                        <h2>Membership Benefits</h2>
                        <ul>
                            {(club.benefits || []).map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="club-section">
                        <h2>Hierarchy</h2>
                        <div className="hierarchy-grid">
                            {(club.hierarchy || []).map((member, index) => (
                                <div key={index} className="hierarchy-member">
                                    <p className="role">{member.role}</p>
                                    <p className="name">{member.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                     <section className="club-section">
                        <h2>Achievements</h2>
                        <ul>
                            {(club.achievements || []).map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="club-section">
                        <h2>Upcoming Events</h2>
                        {(club.upcomingEvents || []).length > 0 ? (
                            (club.upcomingEvents).map((event, index) => (
                                <div key={index} className="event-card">
                                    <h3>{event.name}</h3>
                                    <p className="event-date">{event.date}</p>
                                    <p>{event.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>No upcoming events scheduled.</p>
                        )}
                    </section>

                    <section className="club-section how-to-join">
                        <h2>How to Join</h2>
                        <p>{club.howToJoin}</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ClubDetailPage;

