import React from 'react';
import './Hero.css';
import { Aboutimg, bg4 } from '../image/image';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">WELCOME TO MY WORLD ✨</span>
          <h1>Hi, I'm <span className="name-highlight">Ritheeka</span></h1>
          <h2 className="hero-title"><span className="gradient-text">Artist</span></h2>
          <p className="hero-description">
            Visual artist working with acrylics, watercolors, pastels, and pencil sketches. Focused on clean composition, detail, and original handcrafted work, created for both personal and commissioned projects.
          </p>
          {/* <div className="hero-buttons">
            <a href="#gallery" className="cta-button">
              My Projects
            </a>
            <a href="#contact" className="cta-button-secondary">
              Download CV
            </a>
          </div> */}
          <div className="social-links">
            <a href="https://www.youtube.com/@Artandcraftwithrithika" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="https://instagram.com/rrithhika_" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-frame">
            <img src={bg4} alt="Ritheeka - UI/UX Designer" />
            <div className="floating-icon icon-1">✨</div>
            <div className="floating-icon icon-2">🎨</div>
            <div className="floating-icon icon-3">💡</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
