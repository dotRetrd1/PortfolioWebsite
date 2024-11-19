import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import SidebarMenu from './components/sideBarMenu';
import DragonWaterArtPortfolioPic from './assets/DragonWaterArtPortfolioPic.jpg';
let IsOpen = false;
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);
    const burgerRef = useRef(null); // Reference for the hamburger menu button
    const openOrCloseSidebar = () => {
        if (IsOpen === false) {
            console.log('Sidebar is opening...');
            setIsMenuOpen(true);
            IsOpen = true;
        }
        else {
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
        const handleClickOutside = (event) => {
            // Check if the click is outside of both the sidebar and the hamburger button
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) &&
                burgerRef.current && !burgerRef.current.contains(event.target)) {
                CloseSideBar(); // Close the sidebar if clicked outside
                IsOpen = false;
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (_jsxs("div", { className: "main-container", children: [_jsxs("div", { className: "App", children: [_jsx("div", { ref: burgerRef, children: _jsx(HamburgerMenu, { toggleMenu: openOrCloseSidebar }) }), _jsx(SidebarMenu, { isMenuOpen: isMenuOpen, sidebarRef: sidebarRef })] }), _jsxs("div", { className: "intro", id: "intro", children: [_jsxs("div", { className: "intro-content", "data-aos": "fade-up", children: [_jsx("h1", { children: "Ido Lavion" }), " ", _jsx("h2", { children: "Welcome to My Portfolio" })] }), _jsxs("div", { className: "portfolio-buttons", "data-aos": "fade-up", "data-aos-delay": "200", children: [_jsx("a", { href: "https://your-art-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: "Art Portfolio" }), _jsx("a", { href: "https://your-gamedev-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: "GameDev Portfolio" }), _jsx("a", { href: "https://your-engineering-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: "Engineering Portfolio" })] })] }), _jsxs("div", { id: "projects", className: "projects", "data-aos": "fade-up", children: [_jsx("h2", { children: "My Projects" }), _jsx("div", { className: "project-item", "data-aos": "fade-up", "data-aos-delay": "300", children: _jsx("a", { href: "https://your-art-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: DragonWaterArtPortfolioPic, alt: "Art Portfolio" }) }) })] }), _jsxs("div", { id: "about", className: "about-section", "data-aos": "fade-up", children: [_jsx("h2", { children: "About Me" }), _jsx("p", { children: "Hello! I'm Ido Lavion, a passionate individual with a love for creating art, developing games, and engineering innovative solutions. I enjoy tackling new challenges and continuously growing in my fields of expertise. Welcome to my personal portfolio website!" })] }), _jsxs("div", { id: "contact", className: "contact-section", "data-aos": "fade-up", children: [_jsx("h2", { children: "Contact Me" }), _jsx("p", { children: "If you'd like to get in touch, feel free to reach out to me through my contact information below." }), _jsx("p", { children: "Email: lavionido1@gmail.com" })] }), _jsx("footer", { children: _jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " Ido Lavion. All Rights Reserved."] }) })] }));
};
export default App;
