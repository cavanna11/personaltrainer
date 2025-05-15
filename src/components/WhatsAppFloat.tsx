import React from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat: React.FC = () => (
  <a
    href="https://wa.me/2257529684?text=Hola%2C%20quer%C3%ADa%20informaci%C3%B3n%20sobre%20las%20webs"
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
  </a>
);

export default WhatsAppFloat;
