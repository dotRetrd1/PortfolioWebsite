import React, { useState, useEffect } from 'react';
import './App.css';
import DragonWaterArtPortfolioPic from './assets/DragonWaterArtPortfolioPic.jpg'; // Replace with your actual image
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const App: React.FC = () => {
  // State for toggling the menu
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,  // Increased duration for a more gradual effect
      easing: 'ease-out-quint', // Smoother easing
      once: true,      // Animation happens only once when the element comes into view
      offset: 300,     // Start the animation earlier
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle the menu visibility
  };

  return (
    <div className="main-container">
      {/* Hamburger Menu */}
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#intro">Main</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="https://your-art-portfolio-link.com" target="_blank" rel="noopener noreferrer">Art Portfolio</a></li>
          <li><a href="https://your-gamedev-portfolio-link.com" target="_blank" rel="noopener noreferrer">GameDev Portfolio</a></li>
          <li><a href="https://your-engineering-portfolio-link.com" target="_blank" rel="noopener noreferrer">Engineering Portfolio</a></li>
        </ul>
      </div>

      {/* Intro Section */}
      <div className="intro" data-aos="fade-up" data-aos-duration="2000">
        <div className="intro-content" data-aos="fade-left" data-aos-duration="2000">
          <h1>Ido Lavion</h1> {/* Your name integrated into the intro */}
          <h2>Welcome to My Portfolio</h2>
        </div>

        {/* Portfolio Buttons Section */}
        <div className="portfolio-buttons" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">
          <a href="https://your-art-portfolio-link.com" target="_blank" rel="noopener noreferrer">Art Portfolio</a>
          <a href="https://your-gamedev-portfolio-link.com" target="_blank" rel="noopener noreferrer">GameDev Portfolio</a>
          <a href="https://your-engineering-portfolio-link.com" target="_blank" rel="noopener noreferrer">Engineering Portfolio</a>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="projects" data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="500">
        <h2>My Projects</h2>
        <div className="project-item" data-aos="flip-left" data-aos-duration="2000" data-aos-delay="700">
          <a href="https://your-art-portfolio-link.com" target="_blank" rel="noopener noreferrer">
            <img src={DragonWaterArtPortfolioPic} alt="Art Portfolio" />
          </a>
        </div>
        {/* You can add more projects here */}
      </div>

      {/* Footer Section */}
      <div className="about-contact-footer" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
        <div className="about-section" data-aos="fade-left" data-aos-duration="2000">
          <h2>About Me</h2>
          <p>Hello! I'm Ido Lavion, a passionate individual with a love for creating art, developing games, and engineering innovative solutions. I enjoy tackling new challenges and continuously growing in my fields of expertise. Welcome to my personal portfolio website!</p>
        </div>
        <div className="contact-section" data-aos="fade-right" data-aos-duration="2000">
          <h2>Contact Me</h2>
          <p>If you'd like to get in touch, feel free to reach out to me through my contact information below.</p>
          <p>Email: lavionido1@gmail.com</p>
        </div>
      </div>

      <footer data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1500">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
