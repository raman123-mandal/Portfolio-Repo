import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">👋 Welcome to my portfolio</div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Ramanjeet</span>
        </h1>
        <p className="hero-subtitle">CSE Student | Web Developer | Tech Enthusiast</p>
        <p className="hero-description">
          Crafting beautiful, functional web experiences with modern technologies
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="cta-button primary">View My Work</Link>
          <Link to="/contact" className="cta-button secondary">Contact Me</Link>
        </div>
      </div>
      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default Hero;
