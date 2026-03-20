function About({ strengths, recentFocus }) {
  return (
    <section className="panel about" id="about">
      <div className="panel-header">
        <h2>About</h2>
        <p>Calm, deliberate engineering with a focus on reliability.</p>
      </div>
      <div className="panel-content about-grid">
        <p className="about-copy">
          I care about building services that are correct, observable, and easy to
          evolve. My work spans financial systems and consulting projects, from API
          design to deployment in the cloud. I enjoy taking ambiguous requirements,
          shaping them into solid designs, and delivering solutions that are simple to
          reason about and straightforward to operate.
        </p>
        <div className="about-tiles">
          <div className="tile">
            <span className="tile-label">Years of experience</span>
            <span className="tile-value">2+</span>
            <span className="tile-caption">Professional software development</span>
          </div>
          <div className="tile">
            <span className="tile-label">Core strengths</span>
            <ul className="chip-list">
              {strengths.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="tile">
            <span className="tile-label">Recent focus</span>
            <ul className="chip-list">
              {recentFocus.map((focus) => (
                <li key={focus}>{focus}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
