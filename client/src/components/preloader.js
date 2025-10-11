import React from 'react';
import Lottie from 'lottie-react';
// Make sure animationData is correctly imported from your downloaded JSON file
import animationData from './animation.json';

const preloaderStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#0a0a0a', // --- FIX: Updated to match the new pure black theme ---
    zIndex: 9999,
    paddingTop: '15vh',
};

const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Preloader = () => {
  return (
    <div style={preloaderStyle}>
      <div style={{ width: 700, height: 700 }}> 
        <Lottie {...lottieOptions} />
      </div>
    </div>
  );
};

export default Preloader;

