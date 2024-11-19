import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PortfolioButtons = () => {
    return (_jsxs("div", { className: "portfolio-buttons", children: [_jsx("button", { onClick: () => window.open('https://your-art-portfolio-link.com', '_blank'), children: "Art Portfolio" }), _jsx("button", { onClick: () => window.open('https://your-gamedev-portfolio-link.com', '_blank'), children: "GameDev Portfolio" }), _jsx("button", { onClick: () => window.open('https://your-engineering-portfolio-link.com', '_blank'), children: "Engineering Portfolio" })] }));
};
export default PortfolioButtons;
