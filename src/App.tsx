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

      <footer>
				{/* About Section */}
      <div id="about" className="about-contact-section" data-aos="fade-up">
        <h2>About Me</h2>
        <p>Hello! I'm Ido Lavion, A physics/high school student who likes to draw, create video games and do some engineerings.</p>
      {/* Contact Section */}
        <h3>Contact Me</h3>
        <p>If you'd like to get in touch, feel free to reach out to me through my contact information below.</p>
        <p>Email: lavionido1@gmail.com</p>
      </div>

        <p>&copy; {new Date().getFullYear()} Ido Lavion. All Rights Reserved ^^.</p>
      </footer>
    </div>
  );
}

export default App;
