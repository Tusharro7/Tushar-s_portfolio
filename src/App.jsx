import React from 'react'
import Navbar from './components/Navbar'
// import { Route, Router, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MouseGradient from './components/mouseMoveTracker/MouseGradient'
import EducationDetails from './components/EducationDetails'



function App() {
  return (
    <>
    <MouseGradient/>
    <div >    
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <EducationDetails/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App
