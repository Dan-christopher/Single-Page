
import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="app-wrapper" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
