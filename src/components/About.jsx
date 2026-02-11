const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm Ramanjeet, a Computer Science Engineering student passionate about web development, 
            Data Structures & Algorithms, and Cloud Computing. I love learning new technologies and building projects 
            that solve real-world problems.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>CSE</h3>
              <p>Student</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
