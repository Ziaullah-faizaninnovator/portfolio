import React from 'react'
import '../styles/Blogs.css'

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: "How I Became a Better Student Through Discipline",
      description: "Practical habits, mindset shifts, and strategies that helped me improve academically and develop better learning techniques.",
      img: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600&h=400&fit=crop",
      link: "https://medium.com/@ziaullahinnovator/how-i-became-a-better-student-real-strategies-to-improve-memory-problem-solving-skills-446f98f348ce",
      date: "December 10, 2024",
      platform: "Medium",
      readTime: "6 min read",
      category: "Productivity",
      views: "2.5K"
    },
    {
      id: 2,
      title: "Why Learning JavaScript Is Powerful for Modern Web Development",
      description: "Exploring JavaScript's evolution, its role in frontend/backend development, and why it remains the most versatile language for web.",
      img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=400&fit=crop",
      link: "https://medium.com/@ziaullahinnovator/why-javascript-71c99fd1d9ab",
      date: "November 22, 2024",
      platform: "Medium",
      readTime: "8 min read",
      category: "Web Development",
      views: "3.1K"
    },
    {
      id: 3,
      title: "How to Become a Better Developer: A Practical Roadmap",
      description: "Essential skills, mindset, daily practices, and learning strategies required to grow as a professional software developer.",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop",
      link: "https://medium.com/@ziaullahinnovator",
      date: "October 5, 2024",
      platform: "Medium",
      readTime: "10 min read",
      category: "Career",
      views: "4.2K"
    },
    {
      id: 4,
      title: "Understanding Data Structures: From Zero to Hero",
      description: "A beginner-friendly guide to essential data structures, their real-world applications, and implementation strategies.",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      link: "https://medium.com/@ziaullahinnovator",
      date: "September 18, 2024",
      platform: "Medium",
      readTime: "12 min read",
      category: "Programming",
      views: "3.8K"
    },
    
    {
      id: 5,
      title: " Building Your Own AI Chat ",
      description: "Have you ever wanted to create your own AI chat assistant like ChatGPT but didn't know where to start? I was in the same position just a few weeks ago. Today, I'm sharing my journey of building a fully functional AI chat application that anyone can create - completely for FREE.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      link: "https://medium.com/@ziaullahinnovator/building-your-own-ai-chat-assistant-a-complete-guide-for-beginners-34f26243ce47",
      date: "jan 24, 2026",
      platform: "Medium",
      readTime: "3 min read",
      category: "Learning",
      views: "K"
    },

    // {
    //   id: 5,
    //   title: "The Power of Consistent Learning in Tech",
    //   description: "How maintaining consistency in learning new technologies can accelerate your career growth and skill development.",
    //   img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    //   link: "https://medium.com/@ziaullahinnovator",
    //   date: "August 30, 2024",
    //   platform: "Medium",
    //   readTime: "5 min read",
    //   category: "Learning",
    //   views: "2.9K"
    // },
    // {
    //   id: 6,
    //   title: "Building Your First React Project: A Step-by-Step Guide",
    //   description: "Complete walkthrough of building a React application from scratch, covering best practices and common pitfalls.",
    //   img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    //   link: "https://medium.com/@ziaullahinnovator",
    //   date: "July 15, 2024",
    //   platform: "Medium",
    //   readTime: "15 min read",
    //   category: "React",
    //   views: "5.7K"
    // }
  ]

  return (
    <section className="blogs-section" id="blogs">
      <div className="blogs-container">
        <div className="blogs-header">
          <div className="section-badge">
            <span className="badge-text">📚 My Writings</span>
          </div>
          <h1 className="blogs-title">
            Blogs & <span className="highlight">Articles</span>
          </h1>
          <p className="blogs-subtitle">
            Sharing insights on programming, learning strategies, and tech trends 
            to help others in their development journey.
          </p>
        </div>

        <div className="blogs-stats">
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-content">
              <h3 className="stat-number">{blogsData.length}+</h3>
              <p className="stat-label">Articles Published</p>
            </div>
          </div>
          {/* <div className="stat-card">
            <div className="stat-icon">👁️</div>
            <div className="stat-content">
              <h3 className="stat-number">2K+</h3>
              <p className="stat-label">Total Reads</p>
            </div>
          </div> */}
          {/* <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3 className="stat-number">4.8</h3>
              <p className="stat-label">Avg. Rating</p>
            </div>
          </div> */}
        </div>

        <div className="blogs-grid">
          {blogsData.map((blog) => (
            <article className="blog-card" key={blog.id}>
              <div className="blog-image-container">
                <img src={blog.img} alt={blog.title} className="blog-image" loading="lazy" />
                <div className="blog-overlay">
                  <span className="blog-category">{blog.category}</span>
                  <div className="blog-views">
                    {/* <span className="views-icon">👁️</span> */}
                    {/* <span className="views-count">{blog.views}</span> */}
                  </div>
                </div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-platform">{blog.platform}</span>
                  <div className="meta-details">
                    <span className="blog-date">📅 {blog.date}</span>
                    <span className="blog-read-time">⏱️ {blog.readTime}</span>
                  </div>
                </div>

                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>

                <div className="blog-footer">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-btn"
                  >
                    <span className="btn-text" style={{fontSize:"21px"}}>Read Article</span>
                    <span className="btn-icon">→</span>
                  </a>
                  {/* <div className="blog-actions">
                    <button className="action-btn like-btn" aria-label="Like article">
                      <span className="action-icon">❤️</span>
                      <span className="action-text">Like</span>
                    </button>
                    <button className="action-btn share-btn" aria-label="Share article">
                      <span className="action-icon">🔗</span>
                      <span className="action-text">Share</span>
                    </button>
                  </div> */}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blogs-cta">
          <div className="cta-content">
            <h3 className="cta-title">Want to explore more content?</h3>
            <p className="cta-text">
              Follow me on Medium for regular updates on technology, programming, 
              and personal growth insights.
            </p>
            <a 
              href="https://medium.com/@ziaullahinnovator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <span className="cta-text" style={{color:"GREEN"}}>Visit My Medium Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Blogs