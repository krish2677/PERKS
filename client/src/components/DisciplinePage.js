import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// --- Helper Hook to Inject CSS ---
const useDynamicCss = (css) => {
    useEffect(() => {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = css;
        document.head.appendChild(styleElement);
        return () => {
            document.head.removeChild(styleElement);
        };
    }, [css]);
};


// --- Scroll Animation Hook (Updated) ---
const useScrollAnimation = (dependencies) => {
    useEffect(() => {
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
            {
                threshold: 0.12, // Trigger when 12% of the element is visible
            }
        );

        const elements = document.querySelectorAll(".semester-card, .guidance-card, .courses-section, .internship-section");
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};


const DisciplinePage = () => {
    const { slug } = useParams();
    const [discipline, setDiscipline] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeYear, setActiveYear] = useState('');

    useDynamicCss(disciplinePageCss);
    useScrollAnimation([activeYear, loading]);

    useEffect(() => {
        const fetchDisciplineData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/content/roadmaps/slug/${slug}`, { credentials: 'include' });
                if (response.ok) {
                    const data = await response.json();
                    setDiscipline(data);
                    if (data.roadmap && data.roadmap.length > 0) {
                        setActiveYear(data.roadmap[0].year);
                    }
                } else {
                    setError('Discipline not found.');
                }
            } catch (err) {
                setError('An error occurred while fetching the roadmap.');
            } finally {
                setLoading(false);
            }
        };

        fetchDisciplineData();
    }, [slug]);

    if (loading) return <div className="loading-container">Loading Roadmap...</div>;
    if (error) return <div className="error-container">{error}</div>;
    if (!discipline) return null;

    const selectedYearData = discipline.roadmap.find(y => y.year === activeYear);

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
                                <div key={semIndex} className="semester-card">
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
                            <div className="guidance-card skill-guidance">
                                <h3>Skill Guidance</h3>
                                <p>{selectedYearData.skillGuidance}</p>
                            </div>

                            {/* --- NEW: Section to display electives guidance --- */}
                            {selectedYearData.electivesGuidance && (
                                <div className="guidance-card electives-guidance">
                                    <h3>{selectedYearData.electivesGuidance.title}</h3>
                                    <p>{selectedYearData.electivesGuidance.description}</p>

                                    {/* --- CONDITIONAL RENDERING BASED ON YEAR --- */}
                                    {activeYear === "Second Year" && selectedYearData.electivesGuidance.options && (
                                        <>
                                            <h4>Minor Options</h4>
                                            <ul>
                                                {selectedYearData.electivesGuidance.options.map((opt, i) => (
                                                    <li key={i}><strong>{opt.name}:</strong> {opt.reason}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {activeYear === "Third Year" && (
                                        <>
                                            {selectedYearData.electivesGuidance.dlocOptions && (
                                                <>
                                                    <h4>DLOC Options</h4>
                                                    <ul>
                                                        {selectedYearData.electivesGuidance.dlocOptions.map((opt, i) => (
                                                            <li key={i}><strong>{opt.name}:</strong> {opt.reason}</li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}
                                            {selectedYearData.electivesGuidance.honoursOptions && (
                                                <>
                                                    <h4>Honours Options</h4>
                                                    <ul>
                                                        {selectedYearData.electivesGuidance.honoursOptions.map((opt, i) => (
                                                            <li key={i}><strong>{opt.name}:</strong> {opt.reason}</li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}


                            <div className="courses-section">
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
                    <section className="internship-section">
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
            </main>
        </div>
    );
};

// --- CSS Styles ---
const disciplinePageCss = `
/* --- General Container & Background --- */
.discipline-container {
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    background-color: #0a0a0a;
    color: #e0e0e0;
    min-height: 100vh;
    overflow-x: hidden;
}

/* --- Impactful Header --- */
.discipline-header {
    text-align: center;
    padding: 5rem 2rem 3rem;
    background: rgba(10, 10, 10, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
}

.discipline-header h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #4f46e5, #d646e5, #ff7b7b);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.discipline-header p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 1rem;
    line-height: 1.7;
    color: #a0a0a0;
}

.back-to-roadmaps {
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: #c0c0c0;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.back-to-roadmaps:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}

/* --- Main Content Area --- */
.discipline-main {
    padding: 3rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.roadmap-section h2, .courses-section h2, .internship-section h2 {
    text-align: center;
    font-size: 2.8rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 3rem;
}

/* --- Interactive Year Tabs --- */
.year-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    position: sticky;
    top: 80px;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 50px;
    z-index: 900;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.year-tab {
    padding: 0.8rem 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
    color: #e0e0e0;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.year-tab:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

.year-tab.active {
    background: #fff;
    border-color: #fff;
    color: #0a0a0a;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
}

/* --- Scroll Animation & Card Styles --- */
.semester-card, .guidance-card {
    background: rgba(255, 255, 255, 0.03);
    padding: 2.5rem;
    border-radius: 20px;
    margin-bottom: 2.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: 0;
    transform: scale(0.95) translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.semester-card.is-visible, .guidance-card.is-visible {
    opacity: 1;
    transform: scale(1) translateY(0);
}

.semester-card h3 {
    font-size: 2rem;
    margin-top: 0;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    color: #fff;
}

.semester-card ul { list-style: none; padding: 0; }
.semester-card li {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1.5rem;
}
.semester-card h4 { font-size: 1.4rem; color: #fff; margin-bottom: 0.5rem; }
.semester-card p { margin: 0.5rem 0; line-height: 1.6; color: #a0a0a0; }
.semester-card .notes { font-style: italic; color: #888; font-size: 0.95rem; }

.guidance-card { border-left: 4px solid; }
.guidance-card h3, .guidance-card h4 { margin-top: 0; font-weight: 600; }

.skill-guidance { border-color: #2ecc71; }
.skill-guidance h3 { color: #2ecc71; }

.internship-guidance { border-color: #f39c12; }
.internship-guidance h4 { color: #f39c12; }
.internship-guidance ul { list-style-type: ' ➤ '; padding-left: 1.5rem; }

/* --- NEW: Styles for Electives Guidance Card --- */
.electives-guidance { border-color: #d646e5; }
.electives-guidance h3 { color: #d646e5; }
.electives-guidance h4 { color: #fff; margin-top: 1.5rem; }
.electives-guidance ul { list-style-type: ' ❖ '; padding-left: 1.5rem; }
.electives-guidance li { margin-bottom: 1rem; }


/* --- Engaging Course Cards --- */
.courses-section { margin-top: 4rem; }
.courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.course-card {
    background: rgba(255, 255, 255, 0.03);
    padding: 2rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.course-card h4 { margin-top: 1rem; font-size: 1.3rem; color: #fff; }
.course-card p { flex-grow: 1; font-size: 1rem; color: #a0a0a0; }

.platform-badge {
    padding: 0.4rem 0.9rem;
    border-radius: 50px;
    font-weight: 700;
    color: #fff;
    align-self: flex-start;
    font-size: 0.8rem;
    text-transform: uppercase;
}
.platform-badge.udemy { background-color: #a435f0; }
.platform-badge.coursera { background-color: #0056d2; }
.platform-badge.neetcode { background-color: #f39c12; }
.platform-badge.edx { background-color: #c92c3a; }

.view-course-link {
    color: #8b5cf6;
    text-decoration: none;
    font-weight: 700;
    margin-top: 1.5rem;
    transition: color 0.3s ease;
}
.view-course-link:hover { color: #fff; }

/* --- Loading & Error States --- */
.loading-container, .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 1.5rem;
    color: #fff;
    background: #0a0a0a;
}
`;

export default DisciplinePage;

