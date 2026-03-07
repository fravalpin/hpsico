import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3 mt-auto">
      <Container>
        <Row className="gy-3 align-items-center">
          <Col md={6} className="text-center text-md-start">
             <div className="d-flex justify-content-center justify-content-md-start gap-3">
               <a href="https://www.instagram.com/anaherrera_psico/" className="text-white opacity-75 hover-opacity-100 transition" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
               <a href="https://www.linkedin.com/in/ana-herrera-rubio-62983b165/" className="text-white opacity-75 hover-opacity-100 transition" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
             </div>
          </Col>

          <Col md={6} className="text-center text-md-end">
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
