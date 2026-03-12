import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import "./Navbar.css";

const Navbar = ({ name, leftLinks = [], rightLinks = [] }) => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <>
      <nav className="navbar">
        {/* hamburger */}
        <div className="navbar-hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        <div className="navbar-left">
          {leftLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-center">{name}</div>

        <div className="navbar-right">
          {rightLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* mobile drawer */}
      <div className={`navbar-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-close" onClick={() => setMenuOpen(false)}>
          ✕
        </div>

        <div className="drawer-links">
          {allLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
