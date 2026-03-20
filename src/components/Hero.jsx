function Hero({ metaItems }) {
  return (
    <section className="hero" id="top">
      <div className="hero-badge">Available for new opportunities</div>
      <h1 className="hero-title">
        Hi, I&apos;m Yifan.
        <span className="accent"> I design and build</span>
        reliable software systems.
      </h1>
      <p className="hero-subtitle">
        Software engineer with experience across finance and consulting, focused on
        resilient backend services, clean APIs, and infrastructure that scales.
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
