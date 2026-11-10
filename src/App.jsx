import { useState } from 'react'
import './App.css'

import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Navigation */}
      <header className="navbar">
        <div className="nav-container">
          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
          >
            <span className="logo-dot"></span>
            Shaik Sumiya
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav
            id="main-navigation"
            className={`nav-links ${menuOpen ? 'active' : ''}`}
            aria-label="Main navigation"
          >
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-badge">
                ✦ Python Backend Developer
              </span>

              <h1>
                Building secure, scalable
                and reliable backend
                systems.
              </h1>

              <p className="hero-description">
                I'm Shaik Sumiya, a Python Developer
                specializing in FastAPI, MySQL,
                REST APIs, authentication, and
                database-driven applications.
              </p>

              <div className="hero-buttons">
                <a
                  href="#projects"
                  className="btn btn-primary"
                >
                  View Projects →
                </a>

                <a
                  href="#contact"
                  className="btn btn-secondary"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <aside className="focus-card">
              <h3>Focus Areas</h3>

              <ul>
                <li>Python & FastAPI Development</li>
                <li>REST API Design</li>
                <li>MySQL & Database Management</li>
                <li>Authentication & Security</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Education */}
        <Education />

        {/* Selected Projects */}
        <Projects />

        {/* Work Experience */}
        <Experience />

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact-container">
            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>Let's Connect</h2>

            <p className="section-description">
              I'm interested in opportunities
              involving Python development,
              backend engineering, and
              building reliable applications.
            </p>

            <div className="contact-buttons">
              {/* GitHub */}
              <a
                href="https://github.com/Sumiya0311"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub Profile ↗
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shaik-sumiya-b4521b2a5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn Profile ↗
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shaiksumiya401@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Email Me ✉
              </a>

              {/* Back to Top */}
              <a
                href="#home"
                className="btn btn-secondary"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Shaik Sumiya.
          All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App