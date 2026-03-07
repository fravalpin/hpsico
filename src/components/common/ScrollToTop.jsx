import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button - Always Visible */}
      <motion.a
        href="https://wa.me/34623755502"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed-button whatsapp-button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            background: '#25D366',
            color: '#fff',
            textDecoration: 'none',
        }}
        title="Contactar por WhatsApp"
      >
        <FaWhatsapp size={32} />
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '100px', // Above WhatsApp button
                right: '38px', // Aligned center with WhatsApp button
                zIndex: 999,
                cursor: 'pointer',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                background: 'var(--primary-color)',
                color: '#fff',
                border: 'none',
            }}
            title="Volver arriba"
          >
            <FaArrowUp size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
