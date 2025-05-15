import React, { useEffect, useState } from 'react';
import './Header.css';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Quién soy' },
  { id: 'asesoramiento', label: 'Planes' },
  { id: 'contacto', label: 'Contacto' },
];

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 60) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`main-header${visible ? ' visible' : ''}`}>
      <nav className="navbar">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <button onClick={() => handleNav(s.id)}>{s.label}</button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
