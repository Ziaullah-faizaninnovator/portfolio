import React, { useState } from 'react'
import '../styles/Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with React, featuring smooth animations, optimized performance, and showcasing projects, skills, and experience with an elegant UI/UX design.",
    github: "https://github.com/Ziaullah-faizaninnovator/My_Portfolio",
    live: "https://portfolio-q5yv5l5j6-zias-projects-d176fb0a.vercel.app/",
    img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&h=400&fit=crop",
    tags: ["React", "JavaScript", "CSS", "Frontend", "Responsive"],
    category: "web",
    year: "2024"
  },
  {
    id: 2,
    title: "Real Salesman – Smart Inventory System",
    description: "A comprehensive inventory management solution for retailers featuring sales tracking, profit calculation, stock management, and reporting tools to streamline daily business operations.",
    github: "https://github.com/Ziaullah-faizaninnovator/RealSaleman",
    live: "https://ziaullah-faizaninnovator.github.io/RealSaleman/",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["JavaScript", "Inventory", "Management", "Business"],
    category: "web",
    year: "2023"
  },
  {
    id: 3,
    title: "E-Commerce System (C++)",
    description: "Console-based e-commerce platform with complete product management, shopping cart functionality, order processing, user authentication, and transaction history features.",
    github: "https://github.com/Ziaullah-faizaninnovator/Full-Ecommerce-c-project",
    img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=600&h=400&fit=crop",
    tags: ["C++", "Console", "E-commerce", "OOP"],
    category: "console",
    year: "2023"
  },
  {
    id: 4,
    title: "Restaurant Order System (Python)",
    description: "Python-based restaurant management system featuring menu handling, table management, order processing, billing, and inventory tracking for efficient restaurant operations.",
    github: "https://github.com/Ziaullah-faizaninnovator/restaurant-order-system-python",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop",
    tags: ["Python", "Restaurant", "Management", "CLI"],
    category: "console",
    year: "2024"
  },
  {
    id: 5,
    title: "Snake Game (Assembly Language)",
    description: "Classic Snake game developed entirely in Assembly language, showcasing low-level programming, memory management, game logic implementation, and hardware interaction.",
    github: "https://github.com/Ziaullah-faizaninnovator/Snake_Game-in-Assembly-Languge",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
    tags: ["Assembly", "Game", "Low-level", "Embedded"],
    category: "game",
    year: "2025"
  },
  {
    id: 6,
    title: "SelfLearna - Digital Library Management System",
    description: "A high-performance digital library featuring 30+ essential Computer Science books with efficient data retrieval using advanced data structures, search algorithms, and user-friendly interface.",
    github: "https://github.com/Ziaullah-faizaninnovator/SelfLearna-Libarary-Management-System-",
    live: "https://ziaullah-faizaninnovator.github.io/SelfLearna-Libarary-Management-System-/",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    tags: ["C", "Library", "Data Structures", "Management"],
    category: "web",
    year: "2025"
  },
  {
    id: 7,
    title: "Fund My Vision - Crowdfunding Platform (C++)",
    description: "A crowdfunding platform concept connecting innovators with supporters, featuring project proposals, funding mechanisms, progress tracking, and secure transaction handling.",
    github: "https://github.com/Ziaullah-faizaninnovator/FundMyVision-c-project",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    tags: ["C++", "Crowdfunding", "Platform", "Finance"],
    category: "console",
    year: "2024"
  },
  {
    id: 8,
    title: "DSA High-Tech Company Problems",
    description: "Comprehensive collection of Data Structures & Algorithms problems from top tech company interviews, featuring optimized solutions, complexity analysis, and problem-solving strategies.",
    github: "https://github.com/Ziaullah-faizaninnovator/DSA-Concept-HighTechCompany-Problem-c-",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
    tags: ["C++", "DSA", "Algorithms", "Problem Solving"],
    category: "dsa",
    year: "2025"
  },
  {
    id: 9,
    title: "Ebay.com Clone - Frontend E-commerce",
    description: "A responsive e-commerce frontend clone featuring product listings, category filtering, shopping cart functionality, and modern UI design with smooth user interactions.",
    github: "https://github.com/Ziaullah-faizaninnovator/Ebay.com",
    live: "https://ziaullah-faizaninnovator.github.io/Ebay.com/",
    img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "Frontend"],
    category: "web",
    year: "2023"
  },
  {
    id: 10,
    title: "Student Management System (C)",
    description: "Complete student information management system with features for record keeping, grade tracking, attendance management, and report generation for educational institutions.",
    github: "https://github.com/Ziaullah-faizaninnovator/Student-Management-System-C",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    tags: ["C", "Management", "Database", "Education"],
    category: "console",
    year: "2024"
  },
  {
    id: 11,
    title: "Weather App Dashboard",
    description: "Real-time weather application with location-based forecasts, interactive maps, temperature graphs, and weather alerts using external API integration.",
    github: "https://github.com/Ziaullah-faizaninnovator/Weather-App",
    live: "https://ziaullah-faizaninnovator.github.io/Weather-App/",
    img: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    tags: ["JavaScript", "API", "Weather", "Dashboard"],
    category: "web",
    year: "2024"
  },
  {
    id: 12,
    title: "Task Manager Todo App",
    description: "A simple and stylish **Todo App** built with **React** and **Vite**. This app allows you to **add, remove, and filter tasks** while keeping track of time and date.",
    github: "https://github.com/Ziaullah-faizaninnovator/TodoAppUsingReact",
    live: "https://ziaullah-faizaninnovator.github.io/TodoAppUsingReact/",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["React", "CLI", "Javascript"],
     category: "web",
    year: "2025"
  }
  , {
    id: 13,
    title: "AI Assistant Chat App",
    description: "A beautiful, responsive AI chat application built with React that uses Google's Gemini AI to answer your questions. Features chat history, quick questions, and a clean UI.",
    github: "https://github.com/Ziaullah-faizaninnovator/AI-assistant-project",
    live: "https://portfolio-q5yv5l5j6-zias-projects-d176fb0a.vercel.app/",
    img: "https://images.unsplash.com/photo-1581092795360-5b9b5c963f0e?w=600&h=400&fit=crop&crop=center",
    tags: ["React", "JavaScript", "Gemini AI", "Chat", "Responsive", "API"],
    category: "web",
    year: "2025"
  },
  {
    id: 14,
    title: "Salon Landing Responsive Page",
    description: "This project is a modern and fully responsive salon landing page designed to showcase a beauty salon or barber shop in a clean and professional way.",
    github: "https://github.com/Ziaullah-faizaninnovator/Saloon-Landing-page/tree/main",
    live: "https://ziaullah-faizaninnovator.github.io/Saloon-Landing-page/",
    img: "https://images.unsplash.com/photo-1571977424419-d03f1b7f8c2e?w=600&h=400&fit=crop&crop=center",
    tags: ["JavaScript", "Responsive"],
    category: "web",
    year: "2025"
  },
  {
    id: 15,
    title: "Doctor Landing Responsive Page",
    description: "This project is a modern and fully responsive doctor landing page designed for clinics, hospitals, or individual medical professionals.",
    github: "https://github.com/Ziaullah-faizaninnovator/Doctor-landing-Responsvie-page",
    live: "https://ziaullah-faizaninnovator.github.io/Doctor-landing-Responsvie-page/",
    img: "https://images.unsplash.com/photo-1580281658623-84b5567b8e3f?w=600&h=400&fit=crop&crop=center",
    tags: ["JavaScript", "Responsive"],
    category: "web",
    year: "2025"
  },
  {
    id: 16,
    title: "Lawyer Responsive Landing Page",
    description: "This project is a modern and fully responsive lawyer landing page designed for law firms or individual legal professionals.",
    github: "https://github.com/Ziaullah-faizaninnovator/Lawyer-Landing-Responsive-Page/tree/main",
    live: "https://portfolio-q5yv5l5j6-zias-projects-d176fb0a.vercel.app/",
    img: "https://images.unsplash.com/photo-1596496055863-f3b7463f2641?w=600&h=400&fit=crop&crop=center",
    tags: ["React", "JavaScript", "Responsive", "Landing Page"],
    category: "web",
    year: "2025"
  }
];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const categoryStats = {
    all: projects.length,
    web: projects.filter(p => p.category === 'web').length,
    console: projects.filter(p => p.category === 'console').length,
    game: projects.filter(p => p.category === 'game').length,
    dsa: projects.filter(p => p.category === 'dsa').length
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="section-badge">
            <span className="badge-text">🚀 My Projects</span>
          </div>
          <h1 className="projects-title">
            Featured <span className="highlight">Projects</span>
          </h1>
          <p className="projects-subtitle">
            A collection of my work showcasing skills across web development, 
            console applications, games, and problem-solving.
          </p>
        </div>

        {/* <div className="projects-stats">
          <div className="stat-card">
            <div className="stat-icon">📁</div>
            <div className="stat-content">
              <h3 className="stat-number">{projects.length}+</h3>
              <p className="stat-label">Total Projects</p>
           </div>
           </div>
        </div> */}

        <div className="filter-section">
          <div className="filter-header">
            <h3 className="filter-title">Browse by Category</h3>
            <div className="active-count">
              <span className="count-number">{filteredProjects.length}</span>
              <span className="count-text">projects</span>
            </div>
          </div>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              <span className="filter-icon">📂</span>
              <span className="filter-text">All Projects</span>
              <span className="filter-count">{categoryStats.all}</span>
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
              onClick={() => setActiveFilter('web')}
            >
              <span className="filter-icon">🌐</span>
              <span className="filter-text">Web Development</span>
              <span className="filter-count">{categoryStats.web}</span>
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'console' ? 'active' : ''}`}
              onClick={() => setActiveFilter('console')}
            >
              <span className="filter-icon">💻</span>
              <span className="filter-text">Console Apps</span>
              <span className="filter-count">{categoryStats.console}</span>
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'game' ? 'active' : ''}`}
              onClick={() => setActiveFilter('game')}
            >
              <span className="filter-icon">🎮</span>
              <span className="filter-text">Games</span>
              <span className="filter-count">{categoryStats.game}</span>
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'dsa' ? 'active' : ''}`}
              onClick={() => setActiveFilter('dsa')}
            >
              <span className="filter-icon">🧠</span>
              <span className="filter-text">DSA Problems</span>
              <span className="filter-count">{categoryStats.dsa}</span>
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.img} alt={project.title} className="project-image" loading="lazy" />
                <div className="project-overlay">
                  <span className="project-year">📅 {project.year}</span>
                  <span className="project-category">
                    {project.category === 'web' && '🌐 Web'}
                    {project.category === 'console' && '💻 Console'}
                    {project.category === 'game' && '🎮 Game'}
                    {project.category === 'dsa' && '🧠 DSA'}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <p className="project-description">{project.details}</p>

                <div className="project-footer">
                  <div className="project-actions">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn code-btn"
                    >
                      <span className="btn-icon">👨‍💻</span>
                      <span className="btn-text">View Code</span>
                    </a>
                    
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn live-btn"
                      >
                        <span className="btn-icon">🌐</span>
                        <span className="btn-text">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3 className="cta-title">Want to see more?</h3>
            <p className="cta-text">
              Explore all my projects, contributions, and coding experiments on GitHub.
            </p>
            <a 
              href="https://github.com/Ziaullah-faizaninnovator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <span className="cta-text" style={{color:"green"}}>Explore My GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects