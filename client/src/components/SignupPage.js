import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Using shared styles from LoginPage

const SignupPage = () => {
    // State for all form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    // State for handling errors
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setError(''); // Clear previous errors

        // Client-side validation
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            // Send all required data to the backend API
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    username, 
                    email, 
                    password, 
                    confirmPassword,
                    age,
                    gender,
                    phoneNumber
                }),
            });

            if (response.ok) {
                // On successful signup, redirect the user to the login page
                navigate('/login'); 
            } else {
                // If the server returns an error, display it
                const data = await response.json();
                setError(data.message || 'An error occurred during signup.');
            }
        } catch (err) {
            // Handle network or unexpected errors
            setError('An error occurred. Please try again later.');
            console.error('Signup error:', err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Create an Account</h2>
                <p>Join PERKS to start your engineering journey.</p>
                
                {/* Display error messages here */}
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSignup}>
                    {/* Username Input */}
                    <div className="form-group">
                        <input type="text" id="username" className="form-input" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder=" " />
                        <label htmlFor="username" className="form-label">Username</label>
                    </div>

                    {/* Email Input */}
                    <div className="form-group">
                        <input type="email" id="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder=" " />
                        <label htmlFor="email" className="form-label">Email</label>
                    </div>

                    {/* Password Input */}
                    <div className="form-group">
                        <input type="password" id="password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder=" " />
                        <label htmlFor="password" className="form-label">Password</label>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="form-group">
                        <input type="password" id="confirmPassword" className="form-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder=" " />
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    </div>

                    {/* Age Input */}
                    <div className="form-group">
                        <input type="number" id="age" className="form-input" value={age} onChange={(e) => setAge(e.target.value)} required placeholder=" " />
                        <label htmlFor="age" className="form-label">Age</label>
                    </div>

                    {/* Gender Selection */}
                    <div className="form-group">
                        <select id="gender" className="form-input" value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value="" disabled>Select Gender...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Non-binary">Non-binary</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                        {/* No floating label needed for select; the disabled option acts as a placeholder */}
                    </div>

                    {/* Phone Number Input */}
                    <div className="form-group">
                        <input type="tel" id="phoneNumber" className="form-input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required placeholder=" " />
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    </div>
                    
                    <button type="submit" className="login-button">
                        Sign Up
                    </button>
                </form>

                <div className="signup-link">
                    <p>
                        Already have an account? <Link to="/login">Log In</Link>
                    </p>
                    <p>
                        <Link to="/">Go Back to Home</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
