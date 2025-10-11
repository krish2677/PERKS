import React from 'react';
import Lottie from 'lottie-react';
import animationData from './auth-animation.json'; // <-- Import your new Lottie JSON
import './AuthPreloader.css';

const AuthPreloader = () => {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="auth-preloader-overlay">
            {/* The Lottie animation replaces the old spinner div */}
            <div className="lottie-container">
                <Lottie {...lottieOptions} />
            </div>
            <p>Authenticating...</p>
        </div>
    );
};

export default AuthPreloader;