import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

const images = [
  '/1gym.jpg',
  '/2gym.jpg',
  '/3gym.jpg'
];

const AUTO_SLIDE_INTERVAL = 5000;

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section className="hero-section">
      <div className="hero-carousel-container">
        <div
          className="hero-carousel-track"
          style={{
            transform: `translateX(-${current * 100}vw)`,
            transition: 'transform 0.7s cubic-bezier(.77,0,.18,1)'
          }}
        >
          {images.map((img, idx) => (
            <img
              key={img + idx}
              src={img}
              alt={`Entrenamiento ${idx + 1}`}
              className="hero-img"
            />
          ))}
        </div>
      </div>
      <div className="hero-content">
        <h1>Entrenamiento Personalizado</h1>
        <p>Transformá tu cuerpo y tu vida con asesoramiento profesional, rutinas y seguimiento personalizado.</p>
        <a href="https://wa.me/2257529684?text=Hola%2C%20quer%C3%ADa%20informaci%C3%B3n%20sobre%20las%20webs" className="cta-btn">Quiero asesoramiento</a>
      </div>
    </section>
  );
};

export default HeroSection;
