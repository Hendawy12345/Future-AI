import React, { useEffect, useRef } from "react";
import WOW from "wowjs";
import "animate.css";
import NavbarComponent from './Navbar/navbar';
import Home from "./Home/Home";
import About from './About/About';
import Services from "./Services/Services";
import Career from "./Career/Career";
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const ScrollAnimation = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavbarComponent 
        onScrollToSection={{
          about: () => scrollToSection(aboutRef),
          services: () => scrollToSection(servicesRef),
          career: () => scrollToSection(careerRef),
          contact: () => scrollToSection(contactRef),
        }} 
      />
      <Home />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={careerRef}>
        <Career />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ScrollAnimation;
