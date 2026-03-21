function Education({ school, degree, period, highlights }) {
  return (
    <section className="panel education" id="education">
      <div className="panel-header">
        <h2>Education</h2>
      </div>
      <div className="panel-content">
        <article className="education-card">
          <div className="education-card-head">
            <div className="education-card-titles">
              <h3 className="education-school">{school}</h3>
              <p className="education-degree">{degree}</p>
            </div>
            <span className="education-period">{period}</span>
          </div>
          <ul className="education-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Education;
