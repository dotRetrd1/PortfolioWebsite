import React from 'react';
import './SidebarMenu.css'; // Assuming you have a separate CSS file for the sidebar styling

interface SidebarMenuProps {
  isMenuOpen: boolean;
  sidebarRef: React.RefObject<HTMLDivElement>;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isMenuOpen, sidebarRef }) => {
  return (
    <div
      ref={sidebarRef}
      className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
    >
      <div className="sidebar-content">
        <ul className="sidebar-links">
          <li>
            <a href="#intro" className="sidebar-link">Home</a>
          </li>
          <li>
            <a href="#projects" className="sidebar-link">My Projects</a>
          </li>
          <li>
            <a href="#about" className="sidebar-link">About Me</a>
          </li>
          <li>
            <a href="#contact" className="sidebar-link">Contact</a>
          </li>
          <li>
            <a href="/art" className="sidebar-link">Art Portfolio</a>
            </li>
            <li>
            <a href="/gamedev" className="sidebar-link">GameDev Portfolio</a>
            </li>
            <li>
            <a href="/engineering" className="sidebar-link">Engineering Portfolio</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
