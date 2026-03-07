import React from 'react'
import { Row, Col, Form, Button, Image, Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLaptop, FaPaperPlane } from 'react-icons/fa'
import contactImg from '../../assets/images/contact.png'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Esta funcionalidad estaría conectada a un servicio de email.");
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h6 className="text-accent text-uppercase fw-bold ls-2">Hablemos</h6>
          <h2 className="display-5 fw-bold text-primary mb-3">Contacto</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Si sientes que es momento de empezar tu proceso, estoy aquí para escucharte.
          </p>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-3 shadow-sm h-100"
            >
              <h4 className="fw-bold text-primary mb-4">Información de contacto</h4>
              
              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-center">
                  <div className="bg-light p-2 rounded-circle text-primary me-3">
                    <FaEnvelope />
                  </div>
                  <a href="mailto:anaherrerapsicologia@gmail.com" className="text-decoration-none text-body">anaherrerapsicologia@gmail.com</a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <div className="bg-light p-2 rounded-circle text-primary me-3">
                    <FaPhoneAlt />
                  </div>
                  <a href="tel:+34623755502" className="text-decoration-none text-body">623 755 502</a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <div className="bg-light p-2 rounded-circle text-primary me-3">
                    <FaMapMarkerAlt />
                  </div>
                  <span>O Rosal (Pontevedra)</span>
                </li>
                <li className="mb-0 d-flex align-items-center">
                   <div className="bg-light p-2 rounded-circle text-primary me-3">
                    <FaLaptop />
                  </div>
                  <span>Terapia Online disponible</span>
                </li>
              </ul>

              <hr className="text-muted my-4" />

              <div className="d-grid">
                 <Button 
                  variant="outline-success" 
                  href="https://wa.me/34623755502" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center gap-2 py-2"
                >
                  <FaWhatsapp size={20} />
                  Contactar por WhatsApp
                </Button>
              </div>
              
              <div className="mt-4 text-center">
                <Image 
                  src={contactImg} 
                  fluid 
                  rounded 
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                  alt="Ilustración contacto"
                />
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-4 p-md-5 rounded-3 shadow-sm h-100 border-top border-4 border-primary"
            >
              <h4 className="fw-bold text-primary mb-4">Envíame un mensaje</h4>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Tu nombre" required className="bg-light border-0 py-2" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="tucorreo@ejemplo.com" required className="bg-light border-0 py-2" />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Cuéntame brevemente qué necesitas..." required className="bg-light border-0 py-2" />
                </Form.Group>
                
                <Button variant="primary" type="submit" size="lg" className="w-100 d-flex align-items-center justify-content-center gap-2">
                  <FaPaperPlane size={16} />
                  Enviar Mensaje
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
