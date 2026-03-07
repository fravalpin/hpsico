import React from 'react'
import { Row, Col, Button, Container, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import heroImg from '../../assets/images/ana_psicologa.jpg'
import { FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="d-flex align-items-center position-relative" 
      style={{ minHeight: '90vh', background: 'linear-gradient(135deg, var(--bg-color) 0%, var(--bg-alt) 100%)' }}
    >
      <Container>
        <Row className="align-items-center flex-md-row-reverse">
          <Col md={6} className="text-center mb-5 mb-md-0 position-relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="position-relative d-inline-block">
                <div 
                  className="position-absolute w-100 h-100 rounded-circle bg-accent-light" 
                  style={{ top: '20px', left: '-20px', zIndex: 0 }}
                ></div>
                <Image 
                  src={heroImg}
                  alt="Ana Herrera psicóloga" 
                  fluid 
                  roundedCircle
                  className="shadow-lg position-relative"
                  style={{ zIndex: 1, border: '5px solid white', maxWidth: '350px' }}
                />
              </div>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="display-4 fw-bold mb-3">
                Tu espacio de <span style={{ color: 'var(--primary-color)' }}>calma</span> y <span style={{ color: 'var(--accent-color)' }}>crecimiento</span>
              </h1>
              
              <p className="lead mb-4 text-muted">
                Soy Ana, psicóloga sanitaria. Te acompaño a reencontrar el equilibrio y gestionar tus emociones en un entorno seguro y sin juicios.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="primary" 
                    href="#contacto" 
                    size="lg" 
                    className="rounded-pill px-4 shadow-sm"
                  >
                    Reserva tu cita
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline-primary" 
                    href="https://wa.me/34623755502" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    size="lg" 
                    className="rounded-pill px-4 d-flex align-items-center gap-2"
                  >
                    <FaWhatsapp />
                    Escríbeme
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
