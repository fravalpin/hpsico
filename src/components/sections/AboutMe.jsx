import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import aboutImg from '../../assets/images/ana_psicologa2.jpg'
import { FaUserCircle } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-5">
            <h6 className="text-accent text-uppercase fw-bold ls-2">Conóceme</h6>
            <h2 className="display-5 fw-bold text-primary">Sobre Mí</h2>
            <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)' }}></div>
          </div>

          <Row className="align-items-center flex-md-row">
            <Col md={6} className="mb-5 mb-md-0 position-relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: 'backOut' }}
                viewport={{ once: true }}
              >
                 <div className="position-relative">
                    <div className="position-absolute bg-accent w-100 h-100 rounded-3" style={{ top: '20px', left: '-20px', zIndex: 0, opacity: 0.2 }}></div>
                    <Image 
                      src={aboutImg} 
                      alt="Retrato de Ana Herrera" 
                      fluid 
                      rounded 
                      className="shadow-lg position-relative"
                      style={{ zIndex: 1, border: '5px solid white' }}
                    />
                 </div>
              </motion.div>
            </Col>
            
            <Col md={6} className="px-md-5">
              <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
              >
                <h3 className="h2 mb-4">Hola, soy Ana.</h3>
                
                <p className="lead text-muted mb-4">
                  Acompaño a personas que buscan reencontrar el equilibrio y gestionar sus emociones de forma saludable.
                </p>

                <div className="text-body-secondary mb-4">
                  <p>
                    Desde que empecé mi camino como psicóloga, he tenido claro que lo importante no es encajar a las personas en una etiqueta diagnóstica, sino escuchar y comprender su historia.
                  </p>
                  
                  <p>
                    Mi enfoque es <strong>integrador</strong>. Combino mi base cognitiva-conductual con formación en trauma, apego y terapias de tercera generación. Esto me permite adaptarme a tus necesidades, porque cada proceso es único.
                  </p>
                  
                  <p>
                    En mis sesiones encontrarás un espacio seguro, libre de juicios, donde podrás mostrarte vulnerable y sentirte sostenidx. Juntos miraremos lo que duele, pero también descubriremos tus recursos y tu capacidad de cambio.
                  </p>
                </div>

                <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-primary">
                  <p className="fst-italic mb-0 text-primary fw-medium">
                    “Todo cambio empieza por un pequeño paso. Estoy aquí para acompañarte en el tuyo.”
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default AboutMe
