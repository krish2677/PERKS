import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component automatically scrolls the page to the top
 * whenever the user navigates to a new route.
 */
const ScrollToTop = () => {
    // Extracts the pathname from the current location.
    const { pathname } = useLocation();

    // The useEffect hook runs every time the pathname changes.
    useEffect(() => {
        // Scrolls the window to the top left corner.
        window.scrollTo(0, 0);
    }, [pathname]); // The effect depends on the pathname.

    // This component does not render any visible UI.
    return null;
};

export default ScrollToTop;
