import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Syeda Pakeeza Fatima</h1>
        <nav className="header-nav">
          <a href="#bio-section">About</a>
          <a href="#work-samples">Projects</a>
          <a href="#skills-section">Skills</a>
          <a href="#skills-section">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
