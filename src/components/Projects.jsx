const Projects = () => {
  const projects = [
    { 
      title: 'E-commerce Platform', 
      description: 'Full-stack shopping platform with payment integration and admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: 'https://github.com/raman123-mandal'
    },
    { 
      title: 'Cloud-Based File Storage', 
      description: 'Scalable file storage system deployed on AWS with S3 and Lambda functions',
      tech: ['AWS', 'S3', 'Lambda', 'Node.js'],
      link: '#',
      github: 'https://github.com/raman123-mandal'
    },
    { 
      title: 'Task Management App', 
      description: 'Collaborative project management tool with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#',
      github: 'https://github.com/raman123-mandal'
    },
    { 
      title: 'Weather Dashboard', 
      description: 'Real-time weather app with interactive maps and forecasts',
      tech: ['JavaScript', 'API', 'CSS'],
      link: '#',
      github: 'https://github.com/raman123-mandal'
    },
     { 
      title: 'Netflix Clone', 
      description: 'Clone of Netflix UI with responsive design and movie browsing',
      tech: ['React', 'React Router', 'CSS'],
      link: 'http://localhost:5173',
      github: 'https://github.com/raman123-mandal'
    }
    
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} className="project-link">Live Demo →</a>
              <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
