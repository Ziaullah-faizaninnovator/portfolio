import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/images/selflearn_logo.png" alt="Zi-Tech Logo" />
            <h3>Zi-Tech</h3>
          </div>
          <p className="footer-tagline">
            Building innovative solutions through technology & purpose.
            Transforming ideas into reality with clean code and creativity.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-envelope"></i>
              <span>ziaullah@example.com</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Pakistan</span>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <span>Available for freelance work</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="footer-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Ziaullah-faizaninnovator" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@ziaullahinnovator" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-medium"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          
          <div className="newsletter">
            <p>Subscribe to my newsletter</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} Ziaullah. All rights reserved.
        </p>
        <div className="footer-extra">
          <Link to="/privacy" className="extra-link">Privacy Policy</Link>
          <Link to="/terms" className="extra-link">Terms of Service</Link>
          <Link to="/sitemap" className="extra-link">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer