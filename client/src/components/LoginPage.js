import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthPreloader from './AuthPreloader'; // <-- 1. Import the preloader
import './LoginPage.css'; 

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false); // <-- 2. Add new loading state
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);

    try {
        // Create a minimum delay promise (e.g., 1.5 seconds)
        const minimumDelay = new Promise(resolve => setTimeout(resolve, 1500));

        // Create the login request promise
        const loginRequest = fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        // Wait for BOTH the delay and the login request to finish
        const [response] = await Promise.all([loginRequest, minimumDelay]);

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem('authToken', token);
            navigate('/roadmap');
        } else {
            const data = await response.json();
            setError(data.message || 'Failed to login. Please check your credentials.');
        }
    } catch (err) {
        setError('An error occurred. Please try again later.');
        console.error('Login error:', err);
    } finally {
        setIsLoggingIn(false);
    }
};

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {isLoggingIn && <AuthPreloader />} {/* <-- 5. Conditionally render the preloader */}
                
                <h2>Welcome Back</h2>
                <p>Please enter your details to log in.</p>
                
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleLogin}>
                    {/* --- UPDATED Email Field for Floating Label --- */}
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder=" "
                        />
                        <label htmlFor="email" className="form-label">Email</label>
                    </div>

                    {/* --- UPDATED Password Field for Floating Label --- */}
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder=" "
                        />
                        <label htmlFor="password" className="form-label">Password</label>
                    </div>

                    <button type="submit" className="login-button">
                        Log In
                    </button>
                </form>

                <div className="divider">OR</div>

                <button onClick={handleGoogleLogin} className="google-button">
                    <img src="https://www.google.com/favicon.ico" alt="Google icon" />
                    Continue with Google
                </button>

                <div className="signup-link">
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                    <p>
                        <Link to="/">Go Back to Home</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;