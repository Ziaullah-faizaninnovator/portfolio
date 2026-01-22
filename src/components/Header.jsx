import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/images/selflearn_logo.png" alt="Zi-Tech Logo" />
        <span className="brand">Zi-Tech</span>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button
        className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </nav>

      {/* Overlay for mobile when menu is open */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
