import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef, useState } from 'react';
import SidebarMenu from './sideBarMenu';
import HamburgerMenu from './HamburgerMenu';
const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    // Close the sidebar if the user clicks outside
    const handleOutsideClick = (e) => {
        if (sidebarRef.current &&
            !sidebarRef.current.contains(e.target)) {
            setIsMenuOpen(false);
        }
    };
    React.useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('click', handleOutsideClick);
        }
        else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isMenuOpen]);
    return (_jsxs("div", { children: [_jsx(SidebarMenu, { isMenuOpen: isMenuOpen, sidebarRef: sidebarRef }), _jsx(HamburgerMenu, { toggleMenu: toggleMenu }), _jsx("main", { children: children })] }));
};
export default Layout;
