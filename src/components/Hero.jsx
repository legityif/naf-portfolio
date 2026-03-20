function Hero({ metaItems }) {
  return (
    <section className="hero" id="top">
      <div className="hero-badge">Open to new opportunities</div>
      <h1 className="hero-title">
        Hi, I&apos;m Yifan.
      </h1>
      <h1 className="hero-title">
        <span className="accent"> I design reliable software systems 
          leveraging the power of AI tools. </span>
      </h1>
      <p className="hero-subtitle">
        Software engineer with experience across the finance and technology sectors. 
        I leverage the power of AI and build reliable backend services, clean APIs, 
        and infrastructure that scales.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="button primary">
          Contact me
        </a>
        <a href="#projects" className="button ghost">
          View selected work
        </a>
      </div>
      <div className="hero-meta">
        {metaItems.map((item) => (
          <div key={item.label}>
            <span className="meta-label">{item.label}</span>
            <span className="meta-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
