
import './App.css'
import './style.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route,Link }from 'react-router'

function App() {
  
  return (
    <>
    
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
