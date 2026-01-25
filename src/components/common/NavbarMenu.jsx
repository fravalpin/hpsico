import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logoImg from '../../assets/images/logo.png'

const NavbarMenu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" sticky="top" className="bg-white">
      <Container>
        <Navbar.Brand href="#inicio" onClick={() => setExpanded(false)} className="fw-bold text-primary">
          <img
            src={logoImg}
            height="30"
            className="d-inline-block align-top me-2"
            alt="Logo Ana Herrera"
          />
          Ana Herrera
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
            <Nav.Link href="#sobre-mi" onClick={() => setExpanded(false)}>Sobre mí</Nav.Link>
            <Nav.Link href="#servicios" onClick={() => setExpanded(false)}>Servicios</Nav.Link>
            <Nav.Link href="#faq" onClick={() => setExpanded(false)}>FAQ</Nav.Link>
            <Nav.Link href="#contacto" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu
