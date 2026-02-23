import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate visibility
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate progress
      if (docHeight > 0) {
          const scrollPercent = (scrollTop / docHeight) * 100;
          setScrollProgress(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
        className="scroll-to-top-container"
        onClick={scrollToTop}
        style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            cursor: 'pointer',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            background: `linear-gradient(to top, var(--primary-color) ${scrollProgress}%, transparent ${scrollProgress}%)`,
            border: '2px solid var(--primary-color)',
            transition: 'all 0.3s ease',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
        title="Volver arriba"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ 
            color: scrollProgress > 50 ? '#fff' : 'var(--primary-color)',
            transition: 'color 0.2s ease'
        }}
      >
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  );
};

export default ScrollToTop;
