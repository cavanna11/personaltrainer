import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import OffersSection from './components/OffersSection';
import WhatsAppFloat from './components/WhatsAppFloat';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
