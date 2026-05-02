import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Get your free access key from https://web3forms.com/
    formData.append("access_key", "d7c8894d-8904-427b-a546-55fbe6c252f3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="text-gradient">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            <p className="contact-desc">
              I'm always open to discussing web development work, internships, or new opportunities. 
              Feel free to reach out to me below!
            </p>
            
            <ul className="contact-list">
              <li>
                <div className="contact-icon glass">
                  <Phone size={20} />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">Phone</span>
                  <a href="tel:9099833423">9099833423</a>
                </div>
              </li>
              <li>
                <div className="contact-icon glass">
                  <Mail size={20} />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">Email</span>
                  <a href="mailto:jeetakbari107@gmail.com">jeetakbari107@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="contact-icon glass">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">Location</span>
                  <span>26, Syamdham Soc V-3, Nana Varachha, Surat, Gujarat.</span>
                </div>
              </li>
            </ul>
            
            <div className="social-links">
              <a href="https://github.com/Jeetakbari" target="_blank" rel="noopener noreferrer" className="social-icon glass">
                <Github size={24} />
              </a>
              <a href="#" className="social-icon glass" title="LinkedIn (Link Pending)">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Let's build something great together..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
              {result && <span className="form-result" style={{display: 'block', marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-main)'}}>{result}</span>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
