import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
    const observer = useRef(null);

    useEffect(() => {
        // Create an observer
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Find all elements to animate and start observing them
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.current.observe(el));

        // Cleanup function to stop observing when the component unmounts
        return () => {
            elements.forEach((el) => observer.current.unobserve(el));
        };
    }, []);
};

export default useScrollAnimation;