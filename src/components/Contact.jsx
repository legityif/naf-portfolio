function Contact() {
  return (
    <section className="panel contact" id="contact">
      <div className="panel-content contact-grid">
        <div className="contact-left">
          <div className="panel-header contact-panel-header">
            <h2>Contact Me</h2>
          </div>
          <div className="contact-column">
            <p className="contact-copy contact-copy--lead">
              Open to thoughtful conversations and good engineering problems.
            </p>
            <p className="contact-copy">
              If you are assembling a team that values craft, ownership, and calm
              collaboration, I would love to hear from you.
            </p>
            <div className="contact-details">
              <a href="mailto:yifanyang80@gmail.com" className="contact-link">
                <span>Email</span>
                <span>yifanyang80@gmail.com</span>
              </a>
              <a className="contact-link">
                <span>Mobile</span>
                <span>(+61) 451 389 103</span>
              </a>
              <a
                href="https://github.com/legityif"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>GitHub</span>
                <span>@legityif</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yifan-yang-6a8a1a106/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>LinkedIn</span>
                <span>@linkedin.com/yifan-linkedin</span>
              </a>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          name="contact"
          netlify
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Who am I speaking with?"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Where can I reply?"
              required
            />
          </div>
          <div className="field field--grow">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="A few lines about what you are working on."
              required
            />
          </div>
          <button type="submit" className="button primary full-width">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
