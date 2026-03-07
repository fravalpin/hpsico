import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5 mt-auto">
      <Container>
        <Row className="gy-4">
          <Col md={4} className="text-center text-md-start">
            <h4 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Ana Herrera</h4>
            <p className="small opacity-75">
              Psicóloga Sanitaria.<br />
              Colegiada G-XXXX
            </p>
          </Col>
          
          <Col md={4} className="text-center">
             <h6 className="text-uppercase mb-3 fw-bold ls-1 text-accent">Redes Sociales</h6>
             <div className="d-flex justify-content-center gap-3">
               <a href="#" className="text-white opacity-75 hover-opacity-100 transition"><FaInstagram size={24} /></a>
               <a href="#" className="text-white opacity-75 hover-opacity-100 transition"><FaLinkedin size={24} /></a>
               <a href="#" className="text-white opacity-75 hover-opacity-100 transition"><FaFacebook size={24} /></a>
             </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
             <p className="small opacity-75 mb-0">
               © {new Date().getFullYear()} Ana Herrera.<br />
               Todos los derechos reservados.
             </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
