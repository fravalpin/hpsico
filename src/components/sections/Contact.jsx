import React from 'react'
import { Row, Col, Form, Button, Image } from 'react-bootstrap'
import SectionWrapper from '../common/SectionWrapper'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission would go here (e.g. API call or mailto fallback)
    alert("Gracias por tu mensaje. Esta funcionalidad estaría conectada a un servicio de email.");
  };

  return (
    <SectionWrapper id="contacto">
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image 
            src="https://placehold.co/600x600/f2f2f2/516b8c?text=Contacto" 
            alt="Contacto y cercanía" 
            fluid 
            rounded 
            className="shadow-sm"
            loading="lazy"
          />
        </Col>

        <Col md={6}>
          <h2 className="mb-4">📞 Contacto</h2>
          
          <div className="mb-4">
            <p>Si sientes que es momento de empezar tu proceso o simplemente quieres más información, puedes escribirme a:</p>
            
            <ul className="list-unstyled mb-4">
              <li className="mb-2">📧 <a href="mailto:anaherrerapsicologia@gmail.com" className="text-decoration-none text-body">anaherrerapsicologia@gmail.com</a></li>
              <li className="mb-2">📱 <a href="tel:+34623755502" className="text-decoration-none text-body">623755502</a></li>
              <li className="mb-2">📍 O Rosal</li>
              <li className="mb-2">💻 Online</li>
            </ul>
            
            <p>También puedes dejarme un mensaje a través del formulario de contacto. Te responderé lo antes posible :)</p>
          </div>
          
          <Form onSubmit={handleSubmit} className="mb-4">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" required />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="tucorreo@ejemplo.com" required />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="¿En qué puedo ayudarte?" required />
            </Form.Group>
            
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Enviar mensaje
              </Button>
            </div>
          </Form>

           <div className="d-grid gap-2">
             <Button variant="outline-success" href="https://wa.me/34623755502" target="_blank" rel="noopener noreferrer">
                Abrir WhatsApp
             </Button>
           </div>

          <p className="fst-italic text-primary mt-4 text-center">“A veces cuidarse también es pedir ayuda.”</p>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Contact
