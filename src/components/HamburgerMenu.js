import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './HamburgerMenu.css';
const HamburgerMenu = ({ toggleMenu }) => {
    return (_jsxs("div", { className: "hamburger-menu", onClick: toggleMenu, children: [_jsx("div", { className: "bar" }), _jsx("div", { className: "bar" }), _jsx("div", { className: "bar" })] }));
};
export default HamburgerMenu;
