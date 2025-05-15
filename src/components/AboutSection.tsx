import React, { useState, useEffect, useRef } from 'react';
import './AboutSection.css';


const images = [
  '/1gym.jpg',
  '/2gym.jpg',
  '/3gym.jpg'
];
const AUTO_SLIDE_INTERVAL = 3000;
const AboutSection: React.FC = () => {
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
    <section className="about-section" id="about">
      <h2>¿Quién soy?</h2>
      <p>Soy entrenador personal certificado, especializado en entrenamiento online y transformación física. Mi misión es ayudarte a lograr tus objetivos con un plan adaptado a vos, seguimiento constante y motivación profesional.</p>
      <div className="about-tags">
        <span>Lic. en Ciencias del Deporte</span>
        <span>Nutrición Deportiva</span>
        <span>Entrenamiento funcional</span>
        <span>+8 años de experiencia</span>
      </div>
      <div className="about-social">
        <a href="https://www.instagram.com/santicavanna.dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/instagram.png" alt="Instagram" />
        </a>
        {/* Puedes agregar más redes aquí si lo deseas */}
      </div>
    </section>
  );
};

export default AboutSection;
