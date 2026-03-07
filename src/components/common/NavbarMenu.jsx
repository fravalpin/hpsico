import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../../assets/images/logo.png'

const NavbarMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expanded={expanded} 
      expand="lg" 
      fixed="top" 
      className={`navbar-custom ${(scrolled || expanded) ? 'scrolled bg-white shadow-sm' : 'bg-transparent'}`}
    >
      <Container>
        <Navbar.Brand 
          href="#inicio" 
          onClick={() => setExpanded(false)} 
          className="d-flex align-items-center"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ height: '40px', overflow: 'hidden', display: 'flex', alignItems: 'center' }} 
            className="me-2"
          >
            <img
              src={logoImg}
              style={{ height: '100%', objectFit: 'contain' }}
              alt="Logo Ana Herrera"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ana Herrera
          </motion.span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")} 
          className="border-0"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {['Inicio', 'Sobre mí', 'Servicios', 'FAQ', 'Contacto'].map((item, index) => (
              <Nav.Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-').replace('í', 'i')}`} 
                onClick={() => setExpanded(false)}
                as={motion.a}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                {item}
              </Nav.Link>
            ))}
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
               className="ms-lg-3 mt-3 mt-lg-0"
            >
              <a 
                href="https://wa.me/34623755502" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm rounded-pill px-4"
              >
                Pedir Cita
              </a>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu
