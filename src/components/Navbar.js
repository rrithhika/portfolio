import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Ritheeka</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">My Works</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
