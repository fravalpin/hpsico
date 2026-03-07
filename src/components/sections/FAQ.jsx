import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaQuestionCircle } from 'react-icons/fa'

const FAQ = () => {
  return (
    <section id="faq" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="text-accent text-uppercase fw-bold ls-2">Dudas</h6>
            <h2 className="display-5 fw-bold text-primary mb-3">Preguntas Frecuentes</h2>
          </motion.div>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" className="shadow-sm rounded overflow-hidden">
                <Accordion.Item eventKey="0" className="border-0 border-bottom">
                  <Accordion.Header className="fw-bold text-primary">
                    <div className="d-flex align-items-center gap-2">
                       <FaQuestionCircle className="text-accent" />
                       ¿Cómo empiezo el proceso?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted bg-light">
                    Mándame un Whatsapp o un email y me pondré en contacto contigo lo antes posible. Te llamaré para que me cuentes brevemente el motivo de consulta y agendaremos una cita para poder empezar.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="1" className="border-0 border-bottom">
                  <Accordion.Header>
                     <div className="d-flex align-items-center gap-2">
                       <FaQuestionCircle className="text-accent" />
                       ¿Cuánto dura una sesión?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted bg-light">
                    Las sesiones suelen ser de <strong>50 minutos</strong>, salvo excepciones que acordaremos previamente según tus necesidades.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="2" className="border-0 border-bottom">
                  <Accordion.Header>
                     <div className="d-flex align-items-center gap-2">
                       <FaQuestionCircle className="text-accent" />
                       ¿Cada cuánto se hacen las sesiones?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted bg-light">
                    Lo más recomendable es que al inicio sean <strong>semanales</strong>, y a medida que avanza el proceso terapéutico se vayan espaciando (quincenales, mensuales). Sin embargo, siempre tengo en cuenta las circunstancias de cada persona (económicas, de horario) para adaptarnos.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3" className="border-0">
                  <Accordion.Header>
                     <div className="d-flex align-items-center gap-2">
                       <FaQuestionCircle className="text-accent" />
                       ¿Cuánto dura una terapia?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted bg-light">
                    No hay una duración establecida. Cada proceso es diferente: algunas personas necesitan un acompañamiento más breve, otras requieren de más tiempo. Lo importante es que el ritmo tenga sentido para ti y notes avances.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQ
