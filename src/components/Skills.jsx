const Skills = () => {
  const skillCategories = [
    { category: 'Frontend', skills: ['React', 'JavaScript', 'Bootstrap', 'HTML/CSS', 'Tailwind'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs','MySQL'] },
    { category: 'DSA & Problem Solving', skills: ['Data Structures', 'Algorithms', 'LeetCode', 'Problem Solving'] },
    { category: 'Cloud Computing', skills: ['AWS', 'Azure', 'Docker', 'CI/CD'] },
    { category: 'Languages', skills: ['JavaScript', 'Python', 'Java', 'C'] }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{cat.category}</h3>
            <div className="skill-tags">
              {cat.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
