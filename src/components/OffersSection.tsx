import React from 'react';
import './OffersSection.css';

const OffersSection: React.FC = () => (
  <section className="offers-section" id="asesoramiento">
    <h2>Tipos de Asesoramiento</h2>
    <div className="offers-list">
      <div className="offer-card">
        <span className="offer-type">Asesoramiento 1 a 1</span>
        <h3>Entrenamiento Personalizado</h3>
        <p className="offer-desc">Plan de entrenamiento y nutrición adaptado a tus objetivos, seguimiento semanal y contacto directo.</p>
        <p className="offer-price">$50.000/mes</p>
      </div>
      <div className="offer-card">
        <span className="offer-type">Asesoramiento Trimestral</span>
        <h3>Transformación Completa</h3>
        <p className="offer-desc">3 meses de acompañamiento, rutinas progresivas, control de avances y motivación constante.</p>
        <p className="offer-price">$50.000/trimestre</p>
      </div>
      <div className="offer-card">
        <span className="offer-type">Rutinas Personalizadas</span>
        <h3>Rutina a Medida</h3>
        <p className="offer-desc">Recibí una rutina exclusiva para tu nivel y objetivo, con explicación de ejercicios y estructura semanal.</p>
        <p className="offer-price">$50.000 única vez</p>
      </div>
      <div className="offer-card">
        <span className="offer-type">Plan Nutricional</span>
        <h3>Nutrición Deportiva</h3>
        <p className="offer-desc">Plan de alimentación personalizado para potenciar tus resultados y mejorar tu salud.</p>
        <p className="offer-price">$50.000/mes</p>
      </div>
    </div>
  </section>
);

export default OffersSection;
