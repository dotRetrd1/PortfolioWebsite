import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './App.css';
import DragonWaterArtPortfolioPic from './assets/DragonWaterArtPortfolioPic.jpg'; // Replace with your actual image
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const App = () => {
    // State for toggling the menu
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 1500, // Increased duration for a more gradual effect
            easing: 'ease-out-quint', // Smoother easing
            once: true, // Animation happens only once when the element comes into view
            offset: 300, // Start the animation earlier
        });
    }, []);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu visibility
    };
    return (_jsxs("div", { className: "main-container", children: [_jsxs("div", { className: `hamburger-menu ${menuOpen ? 'open' : ''}`, onClick: toggleMenu, children: [_jsx("div", { className: "bar" }), _jsx("div", { className: "bar" }), _jsx("div", { className: "bar" })] }), _jsx("div", { className: `menu ${menuOpen ? 'open' : ''}`, children: _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { href: "#intro", children: "Main" }) }), _jsx("li", { children: _jsx("a", { href: "#about", children: "About Me" }) }), _jsx("li", { children: _jsx("a", { href: "https://your-art-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: "Art Portfolio" }) }), _jsx("li", { children: _jsx("a", { href: "https://your-gamedev-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: "GameDev Portfolio" }) }), _jsx("li", { children: _jsx("a", { href: "https://your-engineering-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: "Engineering Portfolio" }) })] }) }), _jsxs("div", { className: "intro", "data-aos": "fade-up", "data-aos-duration": "2000", children: [_jsxs("div", { className: "intro-content", "data-aos": "fade-left", "data-aos-duration": "2000", children: [_jsx("h1", { children: "Ido Lavion" }), " ", _jsx("h2", { children: "Welcome to My Portfolio" })] }), _jsxs("div", { className: "portfolio-buttons", "data-aos": "fade-right", "data-aos-duration": "2000", "data-aos-delay": "500", children: [_jsx("a", { href: "https://your-art-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: "Art Portfolio" }), _jsx("a", { href: "https://your-gamedev-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: "GameDev Portfolio" }), _jsx("a", { href: "https://your-engineering-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: "Engineering Portfolio" })] })] }), _jsxs("div", { id: "projects", className: "projects", "data-aos": "zoom-in", "data-aos-duration": "2500", "data-aos-delay": "500", children: [_jsx("h2", { children: "My Projects" }), _jsx("div", { className: "project-item", "data-aos": "flip-left", "data-aos-duration": "2000", "data-aos-delay": "700", children: _jsx("a", { href: "https://your-art-portfolio-link.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: DragonWaterArtPortfolioPic, alt: "Art Portfolio" }) }) })] }), _jsxs("div", { className: "about-contact-footer", "data-aos": "fade-up", "data-aos-duration": "2000", "data-aos-delay": "1000", children: [_jsxs("div", { className: "about-section", "data-aos": "fade-left", "data-aos-duration": "2000", children: [_jsx("h2", { children: "About Me" }), _jsx("p", { children: "Hello! I'm Ido Lavion, a passionate individual with a love for creating art, developing games, and engineering innovative solutions. I enjoy tackling new challenges and continuously growing in my fields of expertise. Welcome to my personal portfolio website!" })] }), _jsxs("div", { className: "contact-section", "data-aos": "fade-right", "data-aos-duration": "2000", children: [_jsx("h2", { children: "Contact Me" }), _jsx("p", { children: "If you'd like to get in touch, feel free to reach out to me through my contact information below." }), _jsx("p", { children: "Email: lavionido1@gmail.com" })] })] }), _jsx("footer", { "data-aos": "zoom-in", "data-aos-duration": "2000", "data-aos-delay": "1500", children: _jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " Your Name. All Rights Reserved."] }) })] }));
};
export default App;
