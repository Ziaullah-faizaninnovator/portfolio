import React, { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <ul>
            <li><strong>Email:</strong><a href="ziacontact11@example.com">ziacontact11@example.com</a> </li>
            <li><strong>Availability:</strong> Open to freelance projects and collaboration</li>
          </ul>
          
          <div className="contact-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn">
              GitHub
            </a>
            <a href="https://medium.com" target="_blank" rel="noreferrer" className="social-btn">
              Medium
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows=""
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact