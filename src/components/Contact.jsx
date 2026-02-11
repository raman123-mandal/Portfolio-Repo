const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-subtitle">Have a project in mind? Let's create something amazing together.</p>
        <div className="contact-grid">
          <a href="mailto:ramanjeet@example.com" className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>ramanjeetmandal4619@gmail.com</p>
          </a>
          <a href="https://github.com/raman123-mandal" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">💻</div>
            <h3>GitHub</h3>
            <p>@raman123-mandal</p>
          </a>
          <a href="https://linkedin.com/in/ramanjeet-mandal" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/ramanjeet-mandal</p>
          </a>
           <a href="https://leetcode.com/u/ramanjeetmandal/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">🧩</div>
            <h3>LeetCode</h3>
            <p>leetcode.com/u/ramanjeetmandal</p>
          </a>
        </div>
        <footer className="footer">
          <p>© 2026 Ramanjeet. Built with React</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
