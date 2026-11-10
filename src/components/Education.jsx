const educationDetails = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution:
      "Audisankara College of Engineering and Technology, Gudur",
    university: "JNTU Anantapur",
    year: "2021 – 2025",
    result: "CGPA: 8.6",
  },
  {
    degree: "Intermediate (MPC)",
    field: "Mathematics, Physics and Chemistry",
    institution: "Sri Vema Junior College, Naidupeta",
    year: "2019 – 2021",
    result: "78.3%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "Secondary Education",
    institution: "St. Mary's E.M. High School, Naidupeta",
    year: "2019",
    result: "83%",
  },
]

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <span className="section-label">
          ACADEMIC BACKGROUND
        </span>

        <h2>Education</h2>

        <p className="education-intro">
          My academic journey in computer science,
          technology, and foundational studies.
        </p>

        <div className="education-timeline">
          {educationDetails.map((item) => (
            <article
              className="education-card"
              key={item.degree}
            >
              <div className="education-top">
                <h3>{item.degree}</h3>
                <span className="education-year">
                  {item.year}
                </span>
              </div>

              <p className="education-field">
                {item.field}
              </p>

              <p className="education-institution">
                {item.institution}
              </p>

              {item.university && (
                <p className="education-university">
                  {item.university}
                </p>
              )}

              <span className="education-result">
                {item.result}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education