import React from 'react'
import { Row, Col, Image, Card } from 'react-bootstrap'
import SectionWrapper from '../common/SectionWrapper'
import servicesImg from '../../assets/images/services.png'

const Services = () => {
  return (
    <SectionWrapper id="servicios">
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image 
            src={servicesImg} 
            alt="Ilustración de servicios de terapia" 
            fluid 
            rounded 
            className="shadow-sm"
            loading="lazy"
            width="500px"
          />
        </Col>
        
        <Col md={6}>
          <h2 className="mb-4">🌱 Servicios / Terapias</h2>
          
          <p className="lead mb-4">
            Ofrezco acompañamiento psicológico a personas jóvenes y adultas que están atravesando momentos de dificultad o que simplemente quieren conocerse mejor.
          </p>
          
          <p className="fw-bold">Algunas de las razones más comunes por las que la gente acude a consulta son:</p>
          
          <ul className="mb-4">
            <li>Ansiedad, estrés o sensación de bloqueo.</li>
            <li>Alteraciones del estado de ánimo.</li>
            <li>Regulación emocional</li>
            <li>Problemas de autoestima o inseguridad.</li>
            <li>Autoconocimiento</li>
            <li>Autoexigencia y perfeccionismo</li>
            <li>Habilidades sociales</li>
            <li>Resolución de problemas</li>
            <li>Dificultades en las relaciones o rupturas.</li>
            <li>Dependencia emocional.</li>
            <li>Procesos de duelo, cambio o toma de decisiones.</li>
          </ul>
          
          <div className="bg-white p-4 rounded shadow-sm border-start border-4 border-primary">
            <h5 className="text-primary mb-3">Modalidades</h5>
            <p className="mb-2">Las sesiones pueden ser presenciales u online, según lo que te resulte más cómodo.</p>
            <p className="mb-2">Si tu estado actual no te permite salir de casa, también se valorarán intervenciones a domicilio por la zona del Baixo Miño.</p>
            <p className="mb-0 fw-medium">En cualquiera de las opciones, encontrarás un espacio seguro, cercano y confidencial, donde poder avanzar a tu ritmo.</p>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Services
