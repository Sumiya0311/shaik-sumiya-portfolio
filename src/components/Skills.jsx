const skillCategories = [
  {
    title: "Backend Development",
    description: "Building reliable APIs and backend applications.",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "REST APIs",
      "JWT Authentication",
      "Pydantic",
    ],
  },
  {
    title: "Databases & ORM",
    description: "Designing and managing database-driven systems.",
    skills: [
      "MySQL",
      "SQL",
      "SQLAlchemy",
      "Alembic",
      "Database Design",
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Development, testing, and deployment tools.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "Swagger UI",
    ],
  },
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React Basics",
      "Responsive Design",
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <span className="section-label">
          MY TECHNICAL EXPERTISE
        </span>

        <h2>Technical Skills</h2>

        <p className="skills-intro">
          Technologies and tools I use to develop
          backend applications, design RESTful APIs,
          and build database-driven solutions.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article
              className="skill-card"
              key={category.title}
            >
              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills