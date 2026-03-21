function About({ strengths, recentFocus }) {
  return (
    <section className="panel about" id="about">
      <div className="panel-header about-panel-header">
        <h2>About</h2>
      </div>
      <div className="panel-content about-body">
        <p className="about-lede">
          AI empowered software engineering with a focus on reliability and scalability.
        </p>
        <div className="about-divider" aria-hidden="true" />
        <div className="about-grid">
          <p className="about-copy">
            I build applications that are scalable, reliable and observable, leveraging AI tools
            to accelerate productivity. My work includes building APIs in Java / Spring Boot,
            writing automated test suites in Playwright / Typescript, leveraging real-time data
            pipelines with PubSub/Kafka and BigQuery/SQL.
          </p>
          <div className="about-tiles">
            <div className="tile">
              <span className="tile-label">Years of experience</span>
              <span className="tile-value">2+</span>
              <span className="tile-caption">software development</span>
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
      </div>
    </section>
  );
}

export default About;
