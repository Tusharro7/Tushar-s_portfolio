import React from 'react'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div >    
    <Navbar/>
    <div>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App
