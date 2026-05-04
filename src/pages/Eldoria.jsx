import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import charSelectImg from '../assets/images/char_select.png';
import townImg from '../assets/images/town_menu.png';
import profileImg from '../assets/images/lvl5.png';
import alchemistImg from '../assets/images/alchemist.png';
import mapImg from '../assets/images/explore.png';
import cemeteryImg from '../assets/images/cemetery.png';
import battleImg from '../assets/images/battle.png';

function ProjectSlideshow() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    { src: charSelectImg, alt: 'Character Selection' },
    { src: townImg, alt: 'Town menu' },
    { src: profileImg, alt: 'Profile with inventory and stats' },
    { src: alchemistImg, alt: 'Alchemist NPC with dialogue and shop interface' },
    { src: mapImg, alt: 'Explorable World Map' },
    { src: cemeteryImg, alt: 'Cemetery scene showcasing enemies' },
    { src: battleImg, alt: 'Battle scene with dynamic combat' }
  ];

  const handleImageClick = (src) => {
    if (isMobile) {
      setSelectedImage(src);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Carousel fade interval={4000} className="shadow-lg rounded-4 overflow-hidden border border-secondary eldoria-carousel">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="position-relative">
              <img
                className="d-block w-100 eldoria-slide-img"
                src={typeof slide.src !== 'undefined' ? slide.src : "images/placeholder1.webp"}
                alt={slide.alt}
                style={{ 
                  objectFit: 'cover', 
                  cursor: isMobile ? 'pointer' : 'default'
                }}
                onClick={() => handleImageClick(slide.src)}
                title={isMobile ? "Click to view enlarged" : ""}
              />
              <div className="position-absolute bottom-0 start-0 w-100 h-50 bg-gradient-to-t from-dark"></div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {selectedImage && (
        <div className="custom-modal-overlay" onClick={closeModal}>
          <div className="custom-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-bar">
              <h5 style={{ margin: 0, color: '#fff' }}>Enlarged view</h5>
              <button className="close-x-btn" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body-content">
              <img src={selectedImage} alt="Enlarged view" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Eldoria({ theme = 'dark' }) {
  const cardBgClass = theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white';
  const cardStyle = {
    background: theme === 'light'
      ? 'linear-gradient(145deg, #f8f9fa, #e9ecef)'
      : 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
    boxShadow: '0 0 40px rgba(106, 205, 229, 0.1)'
  };

  return (
    <div className="container py-5">
      <div className={`card ${cardBgClass} border-0 shadow-lg rounded-5 overflow-hidden`} style={cardStyle}>
        
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-between text-center text-lg-start">
            
            {/* 1. Group: Header (Aligned with the Carousel top) */}
            <header>
              <div className="d-flex justify-content-center justify-content-lg-start gap-2 mb-3">
                <span className="badge rounded-pill bg-info text-dark px-3 py-2 fw-bold">Main Project</span>
                <span className="badge rounded-pill border border-info text-info px-3 py-2">Python + Pygame</span>
              </div>
              <h2 className="display-4 fw-bold mb-3" style={{ color: "#0dcaf0" }}>
                Tales of Eldoria
              </h2>
              <p className="lead opacity-75 mb-0">
                A solo-developed Fantasy RPG built from the ground up, focusing on <strong>OO Design</strong> and <strong>Custom AI systems</strong>.
              </p>
            </header>

            {/* 2. Group: List */}
            <div className="features-grid py-4">
              <ul className="list-unstyled row g-3 d-inline-block d-lg-flex text-start mx-auto ms-lg-0 mb-0 w-100">
                {[
                  { icon: '✨', text: 'Autonomous NPC AI' },
                  { icon: '🎭', text: '8 Playable Classes' },
                  { icon: '⚔️', text: 'Turn-based Combat' },
                  { icon: '🛡️', text: 'Complex Inventory' },
                  { icon: '🌏', text: 'Explorable World' },
                  { icon: '🎵', text: 'Atmospheric Music' }
                ].map((item, index) => (
                  <li key={index} className="col-lg-6 py-1 d-flex align-items-center">
                    <span className="me-2 fs-5">{item.icon}</span>
                    <span className="opacity-90">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Group: Buttons (Aligned with the Carousel bottom) */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-auto">
              <a href="https://github.com/Davidva0812/Tales-Of-Eldoria" 
                 className="btn btn-outline-info px-4 py-2 rounded-pill fw-bold transition-all hover:scale-105" 
                 target="_blank" rel="noopener noreferrer">
                 GitHub Repo
              </a>
              <a href="https://davidva0812.github.io/Fantasy-website/" 
                 className="btn btn-info px-4 py-2 rounded-pill text-dark fw-bold shadow-sm transition-all hover:scale-105" 
                 target="_blank" rel="noopener noreferrer">
                 Live Demo
              </a>
            </div>
          </div>

          {/* Right side: Slideshow */}
          <div className="col-lg-7 p-4 p-md-5 d-flex align-items-center justify-content-center">
            <div className="rounded-4 bg-info bg-opacity-10 shadow-sm overflow-hidden w-100 h-100 d-flex align-items-center justify-content-center">
               <div className="w-100 border border-info border-opacity-25 rounded-4 overflow-hidden">
                  <ProjectSlideshow />
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
