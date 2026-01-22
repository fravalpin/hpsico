import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import SectionWrapper from '../common/SectionWrapper'

const Hero = () => {
  return (
    <SectionWrapper id="inicio">
      <Row className="align-items-center flex-column-reverse flex-md-row">
        <Col md={6} className="mt-4 mt-md-0">
          <h1 className="display-4 mb-4">Bienvenidx a este espacio!</h1>
          
          <div className="lead mb-4">
            <p>Me presento: soy Ana, psicóloga sanitaria.</p>
            <p>Acompaño a personas que están atravesando un momento complicado y quieren sentirse mejor, entenderse y reencontrar el equilibrio en sus vidas o a personas que quieren conocerse en mayor profundidad y gestionar sus emociones de una forma más saludable.</p>
            
            <p>Mi manera de trabajar se basa en un enfoque integrador, (¿y eso qué es Ana? Que tengo una base cognitiva-conductual, que es la que se suele estudiar en la carrera, pero también me he formado en trauma, apego y terapias de tercera generación). Esto me permite adaptarme a las necesidades de cada persona, porque cada proceso, igual que cada persona, es un mundo. Completamente único y personal.</p>
            
            <p>En las sesiones encontrarás un espacio seguro, donde puedas hablar sin juicios y con absoluta tranquilidad. Un espacio donde poder mostrarte vulnerable y sentirte escuchadx, sostenidx y apoyadx. Donde miraremos lo que duele, pero también descubriremos tus recursos y tu capacidad de cambio.</p>
          </div>

          <p className="fst-italic text-primary mb-4">“Todo cambio empieza por un pequeño paso.”</p>
          
          <div className="d-grid gap-2 d-md-block">
            <Button variant="primary" href="#contacto" className="me-md-3 mb-2 mb-md-0 btn-lg">
              Contactar por WhatsApp
            </Button>
            <Button variant="outline-primary" href="#servicios" className="btn-lg">
              Ver servicios
            </Button>
          </div>
        </Col>
        
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image 
            src="https://placehold.co/600x600/f2f2f2/516b8c?text=Espacio+Calma" 
            alt="Espacio de consulta tranquilo y natural" 
            fluid 
            rounded 
            className="shadow-sm"
          />
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Hero
