import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import SidebarMenu from './components/sideBarMenu';
import DragonWaterArtPortfolioPic from './assets/DragonWaterArtPortfolioPic.jpg';
import BatteryMeasurePic from './assets/BatteryMeasure.jpeg';

let IsOpen: boolean = false;

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null); // Reference for the hamburger menu button

  const openOrCloseSidebar = () => {
    if (IsOpen === false) {
      console.log('Sidebar is opening...');
      setIsMenuOpen(true);
      IsOpen = true;
    } else {
      console.log('Sidebar is closing...');
      setIsMenuOpen(false);
      IsOpen = false;
    }
  };

  const CloseSideBar = () => {
    console.log('Sidebar is closing...');
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside of both the sidebar and the hamburger button
      if (
        sidebarRef.current && !sidebarRef.current.contains(event.target as Node) &&
        burgerRef.current && !burgerRef.current.contains(event.target as Node)
      ) {
        CloseSideBar(); // Close the sidebar if clicked outside
        IsOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="App">
        {/* Pass the burgerRef to the HamburgerMenu */}
        <div ref={burgerRef}>
          <HamburgerMenu toggleMenu={openOrCloseSidebar} />
        </div>
        <SidebarMenu isMenuOpen={isMenuOpen} sidebarRef={sidebarRef} />
      </div>

      {/* Intro Section */}
      <div className="intro" id="intro">
        <div className="intro-content" data-aos="fade-up">
          <h1>Ido Lavion</h1> {/* Your name integrated into the intro */}
          <h2>Welcome to My Portfolio</h2>
        </div>

        {/* Portfolio Buttons Section */}
        <div className="portfolio-buttons" data-aos="fade-up" data-aos-delay="200">
          <a href="https://your-art-portfolio-link.com" target="_blank" rel="noopener noreferrer">Art Portfolio</a>
          <a href="https://your-gamedev-portfolio-link.com" target="_blank" rel="noopener noreferrer">GameDev Portfolio</a>
          <a href="https://your-engineering-portfolio-link.com" target="_blank" rel="noopener noreferrer">Engineering Portfolio</a>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="projects" data-aos="fade-up">
        <h2>My Projects</h2>
        <div className="project-item" data-aos="fade-up" data-aos-delay="300">
          <a href="https://your-art-portfolio-link.com" target="_blank" rel="noopener noreferrer">
            <img src={DragonWaterArtPortfolioPic} alt="Art Portfolio" />
          </a>
        </div>
        <div className="project-item" data-aos="fade-up" data-aos-delay="300">
          <a href="https://your-art-portfolio-link.com" target="_blank" rel="noopener noreferrer">
            <img src={BatteryMeasurePic} alt="Art Portfolio" />
          </a>
        </div>
        {/* Add more projects here */}
      </div>

      {/* About Section */}
      <div id="about" className="about-section" data-aos="fade-up">
        <h2>About Me</h2>
        <p>Hello! I'm Ido Lavion, A physics/high school student who likes to draw, create video games and do some engineerings.</p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out to me through my contact information below.</p>
        <p>Email: lavionido1@gmail.com</p>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} Ido Lavion. All Rights Reserved ^^.</p>
      </footer>
    </div>
  );
}

export default App;
