function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <span className="section-label">GET TO KNOW ME</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>
              Passionate about building reliable
              backend solutions.
            </h3>

            <p>
              I'm Shaik Sumiya, a Computer Science and
              Engineering graduate with a strong interest
              in backend development and software engineering.
            </p>

            <p>
              I work with Python, FastAPI, MySQL, and
              SQLAlchemy to develop RESTful APIs,
              implement authentication, and build
              database-driven applications.
            </p>

            <p>
              My projects include digital payment systems,
              hospital appointment booking, inventory
              management, and real-time support applications.
              I focus on writing maintainable code,
              designing reliable APIs, and continuously
              improving my engineering skills.
            </p>
          </div>

          <div className="about-info">
            <h4>Quick Overview</h4>

            <div className="info-item">
              <span>Education</span>
              <strong>B.Tech — Computer Science</strong>
            </div>

            <div className="info-item">
              <span>Graduation</span>
              <strong>2025</strong>
            </div>

            <div className="info-item">
              <span>Current Role</span>
              <strong>Python Developer</strong>
            </div>

            <div className="info-item">
              <span>Core Technologies</span>
              <strong>Python · FastAPI · MySQL</strong>
            </div>

            <div className="info-item">
              <span>Focus</span>
              <strong>Backend Development</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About