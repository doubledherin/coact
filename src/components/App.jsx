import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Coaching from './Coaching/Coaching';
import Philosophy from './Philosophy/Philosophy';
import Testimonials from './Testimonials/Testimonials';
import Considering from './Considering/Considering';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  coachingData,
  philosophyData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [coaching, setCoaching] = useState({});
  const [philosophy, setPhilosophy] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setCoaching({ ...coachingData });
    setPhilosophy({ ...philosophyData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, coaching, philosophy, about, projects, contact, footer }}>
      <Hero />
      <Coaching />
      <Philosophy />
      <Testimonials />
      <Considering />
      <About />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
