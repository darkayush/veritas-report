import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if it's not the home page
    if (pathname !== '/') {
      // Small delay to ensure the route change is complete
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop; 