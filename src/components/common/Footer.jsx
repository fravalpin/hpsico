import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <Container className="text-center text-muted">
        <p className="mb-0">© {new Date().getFullYear()} Ana Herrera - Psicóloga Sanitaria</p>
      </Container>
    </footer>
  )
}

export default Footer
