import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Helper hook to inject CSS dynamically
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

// Hook for scroll-triggered animations
const useScrollAnimation = () => {
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
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
                threshold: 0.1,
            }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => {
            if (observer.current) {
                observer.current.observe(el);
            }
        });

        return () => {
            if (observer.current) {
                elements.forEach((el) => {
                    if (observer.current) {
                        observer.current.unobserve(el);
                    }
                });
            }
        };
    }, []);
};

const LandingPage = () => {
    useDynamicCss(landingPageCss);
    useScrollAnimation();

    return (
        <div className="landing-page">
            {/* Navigation Bar */}
            <nav className="nav">
                <div className="nav-brand">PERKS</div>
                <div className="nav-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#support" className="nav-link">Support</a>
                    <Link to="/login" className="nav-link login-button">Login</Link>
                </div>
            </nav>

            {/* Hero Section - Image on Right */}
            <header className="hero">
                <div className="hero-content">
                    <h1 className="title gradient-text">Navigate Your Engineering Future</h1>
                    <p className="subtitle">
                        Your intelligent guide to engineering roadmaps, knowledge, and success.
                    </p>
                    <p className="hero-text">
                        From choosing the right subjects to finding your career path, PERKS demystifies your engineering journey with clear, actionable guidance.
                    </p>
                    <Link to="/login" className="get-started-button">
                        Get Started
                    </Link>
                </div>
                <div className="hero-image page-image-container">
                    <img
                        src="../images/hero.png"
                        alt="A futuristic depiction of engineering students collaborating"
                    />
                </div>
            </header>

            {/* About Section - Image on Left */}
            <section id="about" className="section animate-on-scroll">
                <div className="about-content">
                    <div className="about-image page-image-container">
                        <img src="/images/about.png" alt="Engineering students collaborating" />
                    </div>
                    <div className="about-text">
                        <h2 className="section-title gradient-text">About PERKS</h2>
                        <p className="section-text">
                            Navigating the world of engineering can be confusing. With countless domains, minors, and electives, choosing the right path is a major challenge. PERKS is here to demystify this journey. We provide clear, concise roadmaps and expert guidance for every engineering discipline, helping you select the subjects that align with your career goals and unlock your full potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Support Section - Image on Right */}
            <section id="support" className="section animate-on-scroll">
                <div className="support-content">
                    <div className="support-text">
                        <h2 className="section-title gradient-text">We Support You</h2>
                        <p className="section-text">
                           Our commitment is to your success. PERKS offers a dedicated support system to answer your questions, provide mentorship opportunities, and connect you with a community of fellow engineering students. When you need advice, our platform and community are here for you.
                        </p>
                        <div className="contact-info">
                            <p><strong>Email:</strong> support@perks.com</p>
                            <p><strong>Phone:</strong> +91 98765 xxxxx</p>
                        </div>
                    </div>
                    <div className="support-image page-image-container">
                        <img src="/images/contact.png" alt="A student receiving support" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 PERKS. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

// --- CSS Styles ---
const landingPageCss = `
body {
    overflow-x: hidden;
    background-color: #0a0a0a;
}
.landing-page {
  font-family: 'Segoe UI', 'Roboto', sans-serif;
  color: #e0e0e0;
  line-height: 1.7;
  margin: 0;
  padding: 0;
  background-color: #0a0a0a;
}

.gradient-text {
    background: linear-gradient(90deg, #4f46e5, #d646e5, #ff7b7b);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
  background: rgba(10, 10, 10, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #fff;
}

.nav-link.login-button {
    padding: 0.5rem 1rem;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  /* --- FIX: Further reduced top padding --- */
  padding: 80px 4rem 60px;
  color: white;
  min-height: 90vh;
  background: transparent;
}

.hero-content {
    flex: 1;
    text-align: left;
}

.page-image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: float 6s ease-in-out infinite;
}

.page-image-container img {
    max-width: 650px;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
    transition: all 0.3s ease;
}

.page-image-container:hover img {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(130, 100, 224, 0.3);
}


@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  max-width: 550px;
  color: #a0a0a0;
}

.hero-text {
  max-width: 550px;
  margin: 0 0 2.5rem 0;
  color: #c0c0c0;
}

.get-started-button {
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fff;
  color: #0a0a0a;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
  display: inline-block;
  padding: 15px 35px;
  font-size: 1.1rem;
}

.get-started-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
}

.section {
  padding: 80px 4rem;
  margin: 40px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.section-text {
  max-width: 800px;
  font-size: 1.1rem;
  color: #c0c0c0;
}

.contact-info {
  margin-top: 2rem;
}
.contact-info p {
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: #fff;
}
.contact-info strong {
  color: #a0a0a0;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.about-content, .support-content {
    display: flex;
    align-items: center;
    gap: 3rem;
}

.about-text, .support-text { flex: 1; }

.footer {
  text-align: center;
  padding: 2rem;
  background-color: #000;
  color: #a0a0a0;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 900px) {
    .hero {
        flex-direction: column-reverse;
        text-align: center;
        padding: 120px 2rem 60px;
    }
    .hero-content, .about-text, .support-text {
        text-align: center;
    }
    .page-image-container {
        margin-bottom: 2rem;
        animation: none;
    }
    .title { font-size: 2.8rem; }
    .subtitle, .hero-text, .section-text {
        margin-left: auto;
        margin-right: auto;
    }
    .section {
        padding: 60px 2rem;
    }
    .about-content, .support-content {
        flex-direction: column;
    }
    .support-content { flex-direction: column-reverse; }
}
`;

export default LandingPage;