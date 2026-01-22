import React from 'react'
import { Container } from 'react-bootstrap'

const SectionWrapper = ({ id, className = '', children }) => {
  return (
    <section id={id} className={className}>
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default SectionWrapper
