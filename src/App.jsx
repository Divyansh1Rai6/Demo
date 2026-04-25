import Navigation from './components/Navigation';
import HeroCarousel from './components/HeroCarousel';
import SpecialtyIcons from './components/SpecialtyIcons';
import ProductsCarousel from './components/ProductsCarousel';
import AboutSection from './components/AboutSection';
import USPSection from './components/USPSection';
import InstagramFeed from './components/InstagramFeed';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Marquee from './components/Marquee';

export default function App() {
  return (
    <div className="w-full">
      <Navigation />
      <div id="home"><HeroCarousel /></div>
      <div id="marquee">Marquee</div>
      <div id="specialties"><SpecialtyIcons /></div>
      <div id="products"><ProductsCarousel /></div>
      <div id="about"><AboutSection /></div>
      <div id="usp"><USPSection /></div>
      <div id="instagram"><InstagramFeed /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
