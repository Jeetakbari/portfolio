import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "MongoDB", "jQuery"]
  },
  {
    title: "UI / Styling",
    skills: ["Tailwind CSS", "Responsive Web Design"]
  },
  {
    title: "Tools",
    skills: ["VS Code", "Git", "GitHub"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="text-gradient">Technical Skills</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category glass">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating tech background decoration */}
        <div className="tech-marquee-wrapper glass">
          <div className="tech-marquee">
            <span>REACT.JS</span>
            <span>NODE.JS</span>
            <span>JAVASCRIPT</span>
            <span>TAILWIND</span>
            <span>MONGODB</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>REACT.JS</span>
            <span>NODE.JS</span>
            <span>JAVASCRIPT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
