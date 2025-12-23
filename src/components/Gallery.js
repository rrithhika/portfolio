import { gall1, gall2, gall3, gall4, gall5, gall6 } from '../image/image';
import './Gallery.css';

function Gallery() {
  const projects = [
    {
      id: 1,
      image: gall1,
      // title: 'Mobile App Design',
      // category: 'UI/UX Design',
    },
    {
      id: 2,
      image: gall2,
      // title: 'E-commerce Platform',
      // category: 'Web Design',
    },
    {
      id: 3,
      image: gall3,
      // title: 'Dashboard Interface',
      // category: 'UI Design',
    },
    {
      id: 4,
      image: gall4,
      // title: 'Brand Identity',
      // category: 'Branding',
    },
    {
      id: 5,
      image: gall5,
      // title: 'Social Media App',
      // category: 'UX Design',
    },
    {
      id: 6,
      image: gall6,
      // title: 'Landing Page',
      // category: 'Web Design',
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>MY Works</h2>
          <p className="gallery-description">
            Original artworks across multiple traditional mediums.
          </p>
        </div>
        <div className="gallery-grid">
          {projects.map((project) => (
            <div key={project.id} className="gallery-item">
              <div className="gallery-image">
                <img src={project.image} alt={project.title} />
                <div className="gallery-overlay">
                  {/* <div className="gallery-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
