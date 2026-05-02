import React from 'react';
import { BookOpen, Code, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="text-gradient">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass">
            <p>
              I am a motivated and detail-oriented Entry-Level Frontend Developer with a solid foundation in web technologies. 
              Currently, I am pursuing my Bachelor of Computer Applications (BCA) degree at Veer Narmad South Gujarat University (VNSGU), graduating in 2026.
            </p>
            <p>
              Proficient in modern web standards like HTML5, CSS3, and modern JavaScript, I have hands-on experience building functional, 
              single-page applications using React.js. I focus on creating high-quality, responsive user interfaces that provide excellent user experiences.
            </p>
            <p>
              Eager to apply my academic training and driven by a strong desire to learn, I am looking forward to collaborating in professional 
              development environments.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="info-card glass">
              <BookOpen size={32} className="card-icon" />
              <h3>Education</h3>
              <p>BCA (2026)</p>
              <span className="text-muted">VNSGU, Surat</span>
            </div>
            
            <div className="info-card glass">
              <Terminal size={32} className="card-icon" />
              <h3>Experience</h3>
              <p>Academic Projects</p>
              <span className="text-muted">Full-stack & Frontend</span>
            </div>
            
            <div className="info-card glass">
              <Code size={32} className="card-icon" />
              <h3>Focus</h3>
              <p>React Ecosystem</p>
              <span className="text-muted">UI / Single Page Apps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
