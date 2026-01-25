import React from 'react'
import { Row, Col, Form, Button, Image } from 'react-bootstrap'
import SectionWrapper from '../common/SectionWrapper'
import contactImg from '../../assets/images/contact.png'

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
            src={contactImg}
            alt="Ilustración de contacto" 
            fluid 
            rounded 
            className="shadow-sm"
            loading="lazy"
            width="500px"
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
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp me-2" viewBox="0 0 16 16">
                 <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
               </svg>
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
