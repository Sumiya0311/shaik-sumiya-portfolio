const projects = [
  {
    id: 1,
    title: "Digital Wallet & Payments System",
    description:
      "A secure digital wallet backend supporting wallet transactions, peer-to-peer transfers, merchant payments, refunds, cashback, and double-entry ledger accounting.",
    features: [
      "JWT authentication and wallet PIN security",
      "P2P transfers and merchant payments",
      "Cashback processing and transaction history",
      "Double-entry ledger and idempotency controls",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "MySQL",
      "SQLAlchemy",
      "JWT",
    ],
    github: "",
  },
  {
    id: 2,
    title: "Hospital Appointment Booking System",
    description:
      "A hospital management backend designed to support patient appointments, doctor schedules, role-based access, and real-time queue updates.",
    features: [
      "Patient and doctor management",
      "Appointment scheduling",
      "JWT authentication and role-based access",
      "Real-time updates using WebSockets",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "MySQL",
      "SQLAlchemy",
      "WebSockets",
    ],
    github: "",
  },
  {
    id: 3,
    title: "Event & Movie Ticket Booking System",
    description:
      "A backend ticket booking application for managing events, shows, venues, seats, reservations, and payment records.",
    features: [
      "Event and show management",
      "Seat and booking management",
      "Database migrations using Alembic",
      "Containerized services using Docker",
    ],
    technologies: [
      "FastAPI",
      "MySQL",
      "Redis",
      "Docker",
      "Alembic",
    ],
    github: "",
  },
  {
    id: 4,
    title: "Real-Time Support Ticket System",
    description:
      "An asynchronous backend application for managing customer support tickets, agent assignments, messages, and ticket history.",
    features: [
      "JWT authentication and role-based access",
      "Ticket creation and status management",
      "Agent and category management",
      "Ticket messages and activity history",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "MySQL",
      "SQLAlchemy",
    ],
    github: "",
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <span className="section-label">
          FEATURED WORK
        </span>

        <h2>Selected Projects</h2>

        <p className="projects-intro">
          A collection of backend applications demonstrating
          API development, database design, authentication,
          and practical problem-solving.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="featured-project-card"
              key={project.id}
            >
              <div className="project-card-header">
                <span className="project-number">
                  0{project.id}
                </span>
                <span className="project-category">
                  Backend Development
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <h4>Key Features</h4>

              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  View on GitHub ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects