function Contact() {
  return (
    <section className="panel contact" id="contact">
      <div className="panel-header">
        <h2>Contact</h2>
        <p>Open to thoughtful conversations and good engineering problems.</p>
      </div>
      <div className="panel-content contact-grid">
        <div>
          <p className="contact-copy">
            If you are assembling a team that values craft, ownership, and calm
            collaboration, I would love to hear from you.
          </p>
          <div className="contact-details">
            <a href="mailto:yifan@example.com" className="contact-link">
              <span>Email</span>
              <span>yifan@example.com</span>
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
              href="https://instagram.com/naf_aus"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>Instagram</span>
              <span>@naf_aus</span>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Who am I speaking with?" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Where can I reply?" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="A few lines about what you are working on."
            />
          </div>
          <button type="submit" className="button primary full-width">
            Send message
          </button>
          <p className="form-note">
            Static form for now. Connect this to Formspree, Netlify Forms, or your own
            backend when ready.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
