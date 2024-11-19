import React from 'react';
import './HamburgerMenu.css';

interface HamburgerMenuProps {
  toggleMenu: () => void; // Prop to trigger sidebar opening/closing
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleMenu }) => {
  return (
    <div className="hamburger-menu" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default HamburgerMenu;
