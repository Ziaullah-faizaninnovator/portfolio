import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <p className="home-intro">Hello, I'm</p>
        <h1 className="home-title">Ziaullah</h1>
        <h2 className="home-subtitle">Computer Science Student & Developer</h2>
        <p className="home-description">
          Building practical, people-centric solutions using technology. 
          Passionate about web development, problem-solving, and creating 
          impactful projects.
        </p>
        <div className="home-buttons">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="home-image">
        <img src="/images/profile.jpg" alt="Profile" />
      </div>
    </section>
  )
}

export default Home