import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import SectionWrapper from '../common/SectionWrapper'
import aboutImg from '../../assets/images/ana_psicologa2.jpg'

const AboutMe = () => {
  return (
    <SectionWrapper id="sobre-mi">
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0 order-2 order-md-last">
           <Image 
            src={aboutImg}
            alt="Retrato de Ana Herrera" 
            fluid 
            rounded 
            className="shadow-sm"
            loading="lazy"
            width="500px"
          />
        </Col>
        
        <Col md={6} className="order-1 order-md-first">
          <h2 className="mb-4">💫 Sobre mí</h2>
          
          <div className="mb-4">
            <p>Desde que empecé mi camino como psicóloga, he tenido claro que lo importante no es encajar a las personas en una etiqueta diagnóstica, sino escuchar y comprender su historia.</p>
            
            <p>Como comentaba anteriormente, esa es la razón de escoger un enfoque integrador, para no solo eliminar el síntoma, ya que suele ser la parte visible del iceberg, pero siempre hay algo debajo que hay que resolver. Combinar diferentes corrientes terapéuticas me permite adaptarme a cada persona y a lo que necesita en cada momento. Con mucho mimo y mucho tacto y al ritmo que cada uno va marcando.</p>
            
            <p>Mi forma de trabajar se basa en la cercanía, el respeto y la autenticidad. Respetando siempre los ritmos de cada persona e implicándome en cada una de las historias que acompaño.</p>
            
            <p>A lo largo del proceso, iremos profundizando en el autoconocimiento, en la gestión emocional y en el desarrollo de herramientas que te permitan vivir de forma más consciente, tranquila y equilibrada.</p>
            
            <p>Creo en la posibilidad de transformar el malestar en comprensión, y la comprensión en crecimiento y evolución.</p>
          </div>

          <p className="fst-italic text-primary">“Cada persona tiene su propio ritmo.”</p>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default AboutMe
