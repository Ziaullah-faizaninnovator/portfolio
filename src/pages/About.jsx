import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-text">
        <p className="intro">Hello </p>

        <h2>
          I'm <span className="highlight">Zia Saafir</span>
        </h2>

        <p className="description">
          A Computer Science student and problem solver focused on building 
          practical, people-centric solutions using technology.
        </p>

        <p className="description">
          I work mainly in web development and enjoy solving real-world problems
          in education, finance, and technology. Passionate about learning new 
          technologies and creating meaningful projects that make a difference.
        </p>

        <div className="education-section">
          <h3>Education</h3>
          <div className="education-card">
            <h4>Bachelor of Science in Computer Science</h4>
            <p className="institute">Fast National University of Science & Technology</p>
            <p className="duration"></p>
            <p className="education-details">
              Relevant Courses: Data Structures, Algorithms, Web Development, 
              Database Systems, Software Engineering
            </p>
          </div>
        </div>

        <h3>Technical Skills</h3>
        <div className="skills-buttons">
          <span>JavaScript</span>
          <span>React.js</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>C Programming</span>
          <span>C++</span>
          <span>Python</span>
          <span>Data Structures</span>
          <span>Problem Solving</span>
          <span>Frontend Development</span>
        </div>

        <h3>Connect with me</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/Ziaullah-faizaninnovator" target="_blank" rel="noreferrer" className="social-link">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://medium.com/@ziaullahinnovator" target="_blank" rel="noreferrer" className="social-link">
            <i className="fab fa-medium"></i> Medium
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
            <i className="fab fa-twitter"></i> Twitter
          </a> */}
        </div>
      </div>

      <div className="about-image">
        <div className="image-container">
          <img src="/images/profile.jpg" alt="Ziaullah - Developer" />
          <div className="image-overlay">
            <div className="experience-badge">
              <span className="exp-number">10+</span>
              <span className="exp-text">Projects Completed</span>
            </div>
            <div className="experience-badge">
              <span className="exp-number">1+</span>
              <span className="exp-text">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About