import React from 'react'
import { Row, Col, Accordion, Image } from 'react-bootstrap'
import SectionWrapper from '../common/SectionWrapper'

const FAQ = () => {
  return (
    <SectionWrapper id="faq">
      <Row className="align-items-center">
        <Col md={6} className="order-md-last text-center mb-4 mb-md-0">
          <Image 
            src="https://placehold.co/600x600/f2f2f2/516b8c?text=Tranquilidad" 
            alt="Ambiente tranquilo" 
            fluid 
            rounded 
            className="shadow-sm"
            loading="lazy"
          />
        </Col>

        <Col md={6} className="order-md-first">
          <h2 className="mb-4">❓ Preguntas frecuentes</h2>
          
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Cómo empiezo el proceso?</Accordion.Header>
              <Accordion.Body>
                Mándame un Whatsapp y me pondré en contacto contigo lo antes posible. Te llamaré para que me cuentes brevemente el motivo de consulta y agendaremos una cita para poder empezar lo antes posible.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Cuánto dura una sesión?</Accordion.Header>
              <Accordion.Body>
                Las sesiones suelen ser de 50 minutos, salvo excepciones.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Cada cuánto se hacen las sesiones?</Accordion.Header>
              <Accordion.Body>
                Lo más recomendable es que al inicio sean semanales, y a medida que avanza el proceso terapéutico se vayan espaciando. Sin embargo, siempre tengo en cuenta las circunstancias de cada persona para adaptarnos a lo que mejor le conviene.
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Cuánto dura una terapia?</Accordion.Header>
              <Accordion.Body>
                No hay una duración establecida. Cada proceso es diferente: algunas personas necesitan un acompañamiento más breve, otras requieren de más tiempo. Lo importante es que el ritmo tenga sentido para ti.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default FAQ
