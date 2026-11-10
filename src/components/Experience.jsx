const experiences = [
  {
    role: "Python Developer",
    company: "Stackly",
    duration: "July 2026 – Present",
    type: "Professional Experience",
    description:
      "Working on backend development projects using Python, FastAPI, MySQL, and modern development tools.",
    responsibilities: [
      "Developing RESTful APIs using Python and FastAPI.",
      "Implementing JWT authentication and role-based access control.",
      "Designing database models and managing MySQL databases using SQLAlchemy.",
      "Building backend features for digital wallet, booking, and management applications.",
      "Testing and documenting API endpoints using Swagger UI and Postman.",
      "Using Git and GitHub for version control and project management.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "MySQL",
      "SQLAlchemy",
      "JWT",
      "Git",
      "Docker",
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <span className="section-label">
          PROFESSIONAL JOURNEY
        </span>

        <h2>Work Experience</h2>

        <p className="experience-intro">
          Practical experience developing backend
          applications, implementing APIs, and
          working with database-driven systems.
        </p>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.company}
            >
              <div className="experience-header">
                <div>
                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <h3>{experience.role}</h3>

                  <p className="experience-company">
                    {experience.company}
                  </p>
                </div>

                <span className="experience-duration">
                  {experience.duration}
                </span>
              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <h4>Key Responsibilities</h4>

              <ul className="experience-responsibilities">
                {experience.responsibilities.map(
                  (responsibility) => (
                    <li key={responsibility}>
                      {responsibility}
                    </li>
                  )
                )}
              </ul>

              <div className="experience-technologies">
                {experience.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience