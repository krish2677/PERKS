import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Component Imports
import Preloader from './components/preloader';
import AuthPreloader from './components/AuthPreloader'; 
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import RoadmapPage from './components/RoadmapPage';
import DisciplinePage from './components/DisciplinePage';
import ClubDetailPage from './components/ClubDetailPage';
import ProfilePage from './components/ProfilePage';
import AdminPage from './components/AdminPage';
import AdminContentPage from './components/AdminContentPage';
import EditContentPage from './components/EditContentPage';
import AdminSupportPage from './components/AdminSupportPage'; // <-- New import
import ScrollToTop from './components/ScrollToTop';
import AdminAnalyticsPage from './components/AdminAnalyticsPage';

// AuthSuccess component handles the redirect after Google login
function AuthSuccess() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            const params = new URLSearchParams(location.search);
            const token = params.get('token');

            if (token) {
                localStorage.setItem('authToken', token);
                navigate('/roadmap');
            } else {
                navigate('/login');
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigate, location]);

    return <AuthPreloader />;
}

function App() {
    // State to manage the initial preloader screen
    const [loading, setLoading] = useState(!sessionStorage.getItem('hasLoaded'));

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem('hasLoaded', 'true');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [loading]);

    if (loading) {
        return <Preloader />;
    }

    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/auth/success" element={<AuthSuccess />} />
                    
                    {/* Main App Routes */}
                    <Route path="/roadmap" element={<RoadmapPage />} />
                    <Route path="/roadmap/:slug" element={<DisciplinePage />} />
                    <Route path="/club/:slug" element={<ClubDetailPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    
                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/content" element={<AdminContentPage />} />
                    <Route path="/admin/edit/:type/:id" element={<EditContentPage />} />
                    <Route path="/admin/support" element={<AdminSupportPage />} /> {/* <-- New route */}
                    <Route path="/admin/analytics" element={<AdminAnalyticsPage />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;

