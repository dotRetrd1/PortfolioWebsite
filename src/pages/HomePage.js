import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './HomePage'; // Make sure to import your main page styles
const HomePage = () => {
    return (_jsxs("div", { className: "main-container", children: [_jsx("div", { className: "sunset-circle" }), _jsx("section", { className: "intro", children: _jsxs("div", { className: "intro-content", children: [_jsx("h1", { children: "Ido Lavion" }), _jsx("h2", { children: "Welcome to my portfolio" }), _jsx("p", { children: "Explore my work in engineering, game development, and art." })] }) }), _jsxs("section", { className: "projects", children: [_jsx("h2", { children: "Featured Projects" }), _jsxs("div", { className: "portfolio-gallery", children: [_jsxs("div", { className: "project-item", children: [_jsx("img", { src: "project1.jpg", alt: "Project 1" }), _jsx("p", { children: "Project 1 Description" })] }), _jsxs("div", { className: "project-item", children: [_jsx("img", { src: "project2.jpg", alt: "Project 2" }), _jsx("p", { children: "Project 2 Description" })] }), _jsxs("div", { className: "project-item", children: [_jsx("img", { src: "project3.jpg", alt: "Project 3" }), _jsx("p", { children: "Project 3 Description" })] })] })] }), _jsxs("section", { className: "about-contact-footer", children: [_jsxs("div", { className: "about-section", children: [_jsx("h2", { children: "About Me" }), _jsx("p", { children: "Hi, I'm Ido Lavion, a developer, artist, and creator." })] }), _jsxs("div", { className: "contact-section", children: [_jsx("h3", { children: "Contact Me" }), _jsx("p", { children: "Email: idolavion@example.com" })] })] }), _jsx("footer", { children: _jsx("p", { children: "\u00A9 2024 Ido Lavion. All rights reserved." }) })] }));
};
export default HomePage;
