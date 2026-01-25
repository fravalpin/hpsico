import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import SectionWrapper from '../common/SectionWrapper'
import heroImg from '../../assets/images/ana_psicologa.jpg'

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
             <Button variant="outline-success" href="https://wa.me/34623755502" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp me-2" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Contactar por WhatsApp
            </Button>
          </div>
        </Col>
        
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image 
            src={heroImg}
            alt="Ana Herrera psicóloga" 
            fluid 
            rounded 
            className="shadow-sm"
            width="300px"
          />
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Hero
