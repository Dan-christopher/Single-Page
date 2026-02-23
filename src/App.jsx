
import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

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
    </div>
  );
}

export default App;
