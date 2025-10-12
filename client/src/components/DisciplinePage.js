import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DisciplinePage.css';

const useScrollAnimation = (dependencies) => {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll(".scroll-animate");
        if (elementsToAnimate.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    } else {
                        entry.target.classList.remove("is-visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elementsToAnimate.forEach((el) => observer.observe(el));

        return () => elementsToAnimate.forEach((el) => observer.unobserve(el));
    }, [dependencies]); 
};


const DisciplinePage = () => {
    const { slug } = useParams();
    const [discipline, setDiscipline] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeYear, setActiveYear] = useState(null);
    
    // State for user profile and clubs
    const [user, setUser] = useState(null);
    const [clubs, setClubs] = useState([]);

    useScrollAnimation([activeYear, loading]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [roadmapRes, userRes, clubsRes] = await Promise.all([
                    fetch(`/api/content/roadmaps/slug/${slug}`, { credentials: 'include' }),
                    fetch('/api/auth/profile', { credentials: 'include' }),
                    fetch('/api/content/clubs')
                ]);

                if (roadmapRes.ok) {
                    const data = await roadmapRes.json();
                    setDiscipline(data);
                    if (data.roadmap && data.roadmap.length > 0) {
                        setActiveYear(data.roadmap[0].year);
                    }
                } else {
                    setError('Discipline not found.');
                }
                
                if (userRes.ok) setUser(await userRes.json());
                if (clubsRes.ok) setClubs(await clubsRes.json());

            } catch (err) {
                setError('An error occurred while fetching page data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) return <div className="loading-container">Loading Roadmap...</div>;
    if (error) return <div className="error-container">{error}</div>;
    if (!discipline) return null;

    const selectedYearData = discipline.roadmap.find(y => y.year === activeYear);

    // Helper function to check if an elective is recommended
    const isRecommended = (optionName) => {
        if (!user || !user.interests) return false;
        return user.interests.some(interest => 
            optionName.toLowerCase().includes(interest.toLowerCase().replace('/', ''))
        );
    };
    
    // Filter clubs based on user interests
    const recommendedClubs = clubs.filter(club => isRecommended(club.name));


    return (
        <div className="discipline-container">
            <header className="discipline-header">
                <Link to="/roadmap" className="back-to-roadmaps">← Back to All Roadmaps</Link>
                <h1>{discipline.name}</h1>
                <p>{discipline.description}</p>
            </header>

            <main className="discipline-main">
                <section className="roadmap-section">
                    <h2>Academic Roadmap</h2>
                    <div className="year-tabs">
                        {discipline.roadmap.map((yearData) => (
                            <button
                                key={yearData.year}
                                className={`year-tab ${activeYear === yearData.year ? 'active' : ''}`}
                                onClick={() => setActiveYear(yearData.year)}
                            >
                                {yearData.year}
                            </button>
                        ))}
                    </div>

                    {selectedYearData && (
                        <div className="year-details">
                            {selectedYearData.semesters?.map((semester, semIndex) => (
                                <div key={semIndex} className="semester-card scroll-animate">
                                    <h3>{semester.semester}</h3>
                                    <ul>
                                        {semester.subjects.map((subject, subIndex) => (
                                            <li key={subIndex}>
                                                <h4>{subject.name}</h4>
                                                <p><strong>Key Concepts:</strong> {subject.keyConcepts.join(', ')}</p>
                                                <p className="notes">{subject.notes}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div className="guidance-card skill-guidance scroll-animate">
                                <h3>Skill Guidance</h3>
                                <p>{selectedYearData.skillGuidance}</p>
                            </div>
                            
                            {selectedYearData.electivesGuidance && (
                                <div className="guidance-card electives-guidance scroll-animate">
                                    <h3>{selectedYearData.electivesGuidance.title}</h3>
                                    <p>{selectedYearData.electivesGuidance.description}</p>
                                    
                                    {['options', 'dlocOptions', 'honoursOptions'].map(optionType => (
                                        selectedYearData.electivesGuidance[optionType] && (
                                            <div key={optionType}>
                                                <h4>{optionType.replace('options', 'Minor').replace('dlocOptions', 'DLOC').replace('honoursOptions', 'Honours')} Options</h4>
                                                <ul>
                                                    {selectedYearData.electivesGuidance[optionType].map((opt, i) => (
                                                        <li key={i} className={isRecommended(opt.name) ? 'recommended-item' : ''}>
                                                            <strong>{opt.name}</strong>
                                                            {isRecommended(opt.name) && <span className="recommended-badge">★ Recommended</span>}
                                                            : {opt.reason}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}
                            
                            <div className="courses-section scroll-animate">
                                <h3>Recommended Courses for {selectedYearData.year}</h3>
                                <div className="courses-grid">
                                    {(selectedYearData.courses || []).map((course, index) => (
                                        <div key={index} className="course-card">
                                            <span className={`platform-badge ${course.platform?.toLowerCase()}`}>{course.platform}</span>
                                            <h4>{course.title}</h4>
                                            <p>{course.description}</p>
                                            <a href={course.link} target="_blank" rel="noopener noreferrer" className="view-course-link">
                                                View Course →
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {discipline.internshipGuidance && (
                     <section className="internship-section scroll-animate">
                        <h2>Internship Guidance</h2>
                        <div className="guidance-card internship-guidance">
                            <h4>When to Start</h4>
                            <p>{discipline.internshipGuidance.whenToStart}</p>
                            <h4>Types of Roles</h4>
                            <ul>
                                {(discipline.internshipGuidance.typesOfRoles || []).map((role, i) => (
                                    <li key={i}><strong>{role.name}:</strong> {role.description}</li>
                                ))}
                            </ul>
                            <h4>How to Apply</h4>
                            <p>{discipline.internshipGuidance.howToApply}</p>
                        </div>
                    </section>
                )}

                {recommendedClubs.length > 0 && (
                     <section className="recommended-clubs-section scroll-animate">
                        <h2>Recommended Clubs For You</h2>
                        <div className="clubs-grid">
                            {recommendedClubs.map(club => (
                                 <Link to={`/club/${club.slug}`} key={club._id} className="club-card-link">
                                    <div className="course-card">
                                        <h4>{club.name}</h4>
                                        <p>{club.description}</p>
                                        <span className="view-course-link">View Details →</span>
                                    </div>
                                 </Link>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default DisciplinePage;