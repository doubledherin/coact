import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Coaching from './Coaching/Coaching';
import Philosophy from './Philosophy/Philosophy';
import Testimonials from './Testimonials/Testimonials';
import Considering from './Considering/Considering';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { ContentProvider } from '../contexts/content';

import {
  heroData,
  aboutData,
  coachingData,
  philosophyData,
  consideringData,
  contactData,
} from '../content/data';

function App() {
  const [hero, setHero] = useState({});
  const [coaching, setCoaching] = useState({});
  const [philosophy, setPhilosophy] = useState({});
  const [considering, setConsidering] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setCoaching({ ...coachingData });
    setPhilosophy({ ...philosophyData });
    setConsidering({ ...consideringData });
    setAbout({ ...aboutData });
    setContact({ ...contactData });
  }, []);

  return (
    <ContentProvider value={{ hero, coaching, philosophy, considering, about, contact }}>
      <Hero />
      <Coaching />
      <Philosophy />
      <Testimonials />
      <Considering />
      <About />
      <Contact />
      <Footer />
    </ContentProvider>
  );
}

export default App;
