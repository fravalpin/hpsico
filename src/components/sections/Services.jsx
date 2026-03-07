import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaBrain, FaHeart, FaUserFriends, FaRegSadTear, FaLeaf, FaSearch } from 'react-icons/fa'

const servicesData = [
  {
    title: "Ansiedad y Estrés",
    desc: "Gestión de la ansiedad, sensación de bloqueo y ritmo de vida acelerado.",
    icon: <FaBrain />
  },
  {
    title: "Estado de Ánimo",
    desc: "Acompañamiento en tristeza profunda, apatía o desmotivación.",
    icon: <FaRegSadTear />
  },
  {
    title: "Autoestima",
    desc: "Trabajo sobre la inseguridad, autoexigencia y perfeccionismo.",
    icon: <FaLeaf />
  },
  {
    title: "Relaciones",
    desc: "Dificultades de pareja, rupturas, dependencia emocional y habilidades sociales.",
    icon: <FaHeart />
  },
  {
    title: "Duelo y Cambios",
    desc: "Procesos de pérdida, adaptación a nuevas etapas o toma de decisiones importantes.",
    icon: <FaUserFriends />
  },
  {
    title: "Autoconocimiento",
    desc: "Exploración personal para entenderte mejor y vivir con mayor consciencia.",
    icon: <FaSearch />
  }
]

const Services = () => {
  return (
    <section id="servicios" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="text-accent text-uppercase fw-bold ls-2">Qué ofrezco</h6>
            <h2 className="display-5 fw-bold text-primary mb-3">Servicios de Terapia</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Un espacio seguro para abordar tus inquietudes, ya sea de forma presencial u online.
            </p>
          </motion.div>
        </div>

        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-100 border-0 shadow-sm card-custom text-center p-4">
                  <div className="icon-box mx-auto mb-3 text-primary bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                    {service.icon}
                  </div>
                  <Card.Body>
                    <Card.Title className="h4 mb-3 fw-bold">{service.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {service.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div 
          className="mt-5 p-4 bg-light rounded-3 border-start border-4 border-accent shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Row className="align-items-center">
            <Col md={8}>
              <h4 className="fw-bold text-primary mb-2">Modalidades Flexibles</h4>
              <p className="mb-0 text-muted">
                Sesiones <strong>presenciales</strong> en consulta o <strong>online</strong> para tu comodidad. 
                También valoro intervenciones a domicilio en la zona del Baixo Miño.
              </p>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
               <a href="#contacto" className="btn btn-outline-primary rounded-pill px-4">Más información</a>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default Services
