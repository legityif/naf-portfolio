function Experience({ roles }) {
  return (
    <section className="panel experience" id="experience">
      <div className="panel-header">
        <h2>Experience</h2>
        <p>Roles where craft, impact, and collaboration mattered.</p>
      </div>
      <div className="panel-content timeline">
        {roles.map((role) => (
          <article className="timeline-item" key={`${role.company}-${role.roleType}`}>
            <div className="timeline-meta">
              <span className="pill">{role.roleType}</span>
              <span className="company">{role.company}</span>
            </div>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
            <ul>
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
