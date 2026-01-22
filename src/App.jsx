import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Services from './pages/Services'
import './styles/App.css'

// Move ScrollToTop inside BrowserRouter
const AppWithRouter = () => {
  const location = useLocation()
  
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

// Main App component with BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  )
}

export default App