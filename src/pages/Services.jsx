import React from 'react'
import '../styles/Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Application Development",
      description: "Building modern, responsive web applications using React, JavaScript, HTML5, and CSS3. Focus on performance, accessibility, and user experience.",
      icon: "🌐",
      features: ["React Development", "Responsive Design", "Performance Optimization", "Cross-browser Compatibility", "API Integration"],
      color: "#00e5ff",
      projects: "15+ Projects"
    },
    {
      id: 2,
      title: "Console Application Development",
      description: "Developing efficient console applications in C, C++, and Python with clean architecture, modular design, and optimized algorithms.",
      icon: "💻",
      features: ["C/C++ Programming", "Python Scripting", "Algorithm Implementation", "File Handling", "Data Processing"],
      color: "#4caf50",
      projects: "12+ Projects"
    },
    // {
    //   id: 3,
    //   title: "Educational Projects & Games",
    //   description: "Creating engaging educational software and games to help students learn programming concepts and problem-solving skills effectively.",
    //   icon: "🎮",
    //   features: ["Learning Tools", "Interactive Games", "Educational Software", "Programming Tutorials", "Skill Development"],
    //   color: "#ff9800",
    //   projects: "8+ Projects"
    // },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      description: "Implementing and optimizing data structures and algorithms for problem-solving, competitive programming, and technical interviews.",
      icon: "🧠",
      features: ["Algorithm Design", "Problem Solving", "Complexity Analysis", "Interview Preparation", "Optimization"],
      color: "#9c27b0",
      projects: "50+ Problems"
    },
    // {
    //   id: 5,
    //   title: "Project Consulting & Code Review",
    //   description: "Providing technical guidance, architecture consulting, and code reviews to help improve project quality and development processes.",
    //   icon: "🔍",
    //   features: ["Code Review", "Architecture Design", "Best Practices", "Performance Analysis", "Technical Guidance"],
    //   color: "#2196f3",
    //   projects: "20+ Reviews"
    // },
    {
      id: 6,
      title: "Learning & Tutorial Creation",
      description: "Creating comprehensive tutorials, documentation, and learning resources for programming concepts and technologies.",
      icon: "📚",
      features: ["Technical Writing", "Tutorial Creation", "Documentation", "Video Content", "Learning Paths"],
      color: "#ff4081",
      projects: "25+ Tutorials"
    }
  ]

  const testimonials = [
  //   {
  //     id: 1,
  //     name: "Alex Johnson",
  //     role: "Project Manager",
  //     company: "TechCorp Inc.",
  //     content: "Ziaullah delivered exceptional work on our web application. His attention to detail and problem-solving skills are impressive.",
  //     rating: 5,
  //     avatar: "👨‍💼"
  //   },
  //   {
  //     id: 2,
  //     name: "Sarah Miller",
  //     role: "University Professor",
  //     company: "State University",
  //     content: "The educational projects developed were perfect for our computer science curriculum. Students found them engaging and effective.",
  //     rating: 5,
  //     avatar: "👩‍🏫"
  //   },
    {
      id: 3,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateTech",
      content: "Excellent console application development with clean code and efficient algorithms. Highly recommended for technical projects.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ]

  const processSteps = [
    { number: "01", title: "Discovery & Planning", description: "Understanding requirements and planning the project architecture" },
    { number: "02", title: "Design & Development", description: "Implementing solutions with clean code and best practices" },
    { number: "03", title: "Testing & Optimization", description: "Rigorous testing and performance optimization" },
    { number: "04", title: "Delivery & Support", description: "Project delivery and ongoing technical support" }
  ]

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <div className="section-badge">
            <span className="badge-text">💼 My Services</span>
          </div>
          <h1 className="services-title">
            What I <span className="highlight">Offer</span>
          </h1>
          <p className="services-subtitle">
            Comprehensive solutions tailored to meet your development and learning needs. 
            From web applications to educational content, I deliver quality work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon-container" style={{ backgroundColor: `${service.color}15` }}>
                <span className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </span>
              </div>
              
              <div className="service-content">
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-projects" style={{ color: service.color }}>
                    {service.projects}
                  </span>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <span key={index} className="feature-tag" style={{ borderColor: service.color, color: service.color }}>
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="service-footer">
                  <a href="/contact" className="service-btn" style={{ backgroundColor: service.color }}>
                    <span className="btn-text">Get Started</span>
                    <span className="btn-icon">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="process-section">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">⚙️ My Process</span>
            </div>
            <h2 className="section-title">How I Work</h2>
            <p className="section-subtitle">
              A structured approach to ensure quality and efficiency in every project
            </p>
          </div>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div className="process-step" key={step.number}>
                <div className="step-indicator">
                  <span className="step-number">{step.number}</span>
                  {index < processSteps.length - 1 && <div className="step-connector"></div>}
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <div className="testimonials-section">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">⭐ Testimonials</span>
            </div>
            <h2 className="section-title">Client Feedback</h2>
            <p className="section-subtitle">
              What clients and collaborators say about working with me
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-header">
                  <div className="author-avatar">
                    <span className="avatar-icon">{testimonial.avatar}</span>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                
                <p className="testimonial-content">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-text">
              Let's discuss how I can help bring your ideas to life with quality development and reliable solutions.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">
                <span className="btn-icon">📧</span>
                <span className="btn-text">Contact Me</span>
              </a>
              <a href="/projects" className="cta-btn secondary">
                <span className="btn-icon">📁</span>
                <span className="btn-text">View Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services