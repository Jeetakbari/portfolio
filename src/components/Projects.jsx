import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projectsList = [
  {
    id: 1,
    title: 'Home Cleaning System',
    subtitle: 'BCA Final Project',
    description: 'A comprehensive platform for booking home cleaning services. Features user authentication, booking management, and admin dashboards.',
    tech: ['React', 'PHP', 'MySQL'],
    github: 'https://github.com/Jeetakbari',
  },
  {
    id: 2,
    title: 'Hotel Management System',
    subtitle: 'Fullstack Application',
    description: 'A system designed to manage hotel bookings, room availability, and customer details smoothly.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Jeetakbari',
  },
  {
    id: 3,
    title: 'Food Master',
    subtitle: 'Food Ordering Platform',
    description: 'An interactive food ordering system with a seamless user interface for browsing menus and completing orders efficiently.',
    tech: ['React', 'PHP', 'MySQL'],
    github: 'https://github.com/Jeetakbari',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="text-gradient">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card glass">
              <div className="project-content">
                <span className="project-subtitle text-gradient">{project.subtitle}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-icon">
                    <Github size={20} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
