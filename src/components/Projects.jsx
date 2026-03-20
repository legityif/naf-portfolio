function Projects({ projects }) {
  return (
    <section className="panel projects" id="projects">
      <div className="panel-header">
        <h2>Selected projects</h2>
        <p>A few representative projects. Demos and code available on request.</p>
      </div>
      <div className="panel-content project-grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <div className="card-header">
              <span className="card-tag">{project.tag}</span>
              <span className="card-year">{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
              View sample
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
