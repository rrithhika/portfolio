import React from 'react';
import './About.css';
import { Aboutimg } from '../image/image';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={Aboutimg} alt="Sara Howari" />
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
          <div className="about-text">
            <p>
              I am a visual artist working across acrylics, watercolors, pencil sketches, and pastel mediums. My practice focuses on creating original, handcrafted artworks with strong composition, balance, and attention to detail. I explore different materials to suit the subject rather than limiting my work to a single style or technique.
              Each piece is developed with a focus on clarity, texture, and finish—whether it’s a bold acrylic composition, a delicate watercolor, a detailed pencil sketch, or a soft pastel work. I take a disciplined approach to my craft, continuously refining my techniques and expanding my visual language.
            </p>
            <p>
              My work includes both personal projects and commissioned pieces, created with care, precision, and respect for the client’s vision while maintaining artistic integrity.
            </p>
            <div className="commitment-box">
              <div className="icon">✨</div>
              <p>
                I am deeply committed to my work, investing creativity and precision into 
                every project to ensure a unique and effective user experience.
              </p>
            </div>
            {/* <div className="skills-section">
              <h3>Skills</h3>
              <div className="skills-grid">
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/96/figma--v1.png" alt="Figma" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/96/adobe-xd--v1.png" alt="Adobe XD" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/96/adobe-illustrator--v1.png" alt="Illustrator" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/96/adobe-photoshop--v1.png" alt="Photoshop" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/96/figma--v1.png" alt="Figma" />
                </div>
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/96/adobe-xd--v1.png" alt="Adobe XD" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
