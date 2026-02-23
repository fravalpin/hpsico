import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarMenu from './components/common/NavbarMenu'
import Hero from './components/sections/Hero'
import AboutMe from './components/sections/AboutMe'
import Services from './components/sections/Services'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <>
      <NavbarMenu />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
