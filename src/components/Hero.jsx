import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="greeting text-gradient">Hello, World! I am</p>
          <h1 className="name">Jeet Akbari</h1>
          <h2 className="role">Frontend Developer (React)</h2>
          
          <p className="tagline animate-fade-in delay-100">
            Passionate BCA student building high-performance, interactive, and beautiful single-page applications. 
            Transforming ideas into digital reality.
          </p>
          
          <div className="hero-cta animate-fade-in delay-200">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in delay-300">
          <div className="avatar-container glass">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
              alt="Developer Workspace" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
