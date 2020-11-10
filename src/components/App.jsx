import React, { useState, useEffect } from 'react';
import Landing from './Landing/Landing';
import Coaching from './Coaching/Coaching';
import Philosophy from './Philosophy/Philosophy';
import Testimonials from './Testimonials/Testimonials';
import Considering from './Considering/Considering';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { ContentProvider } from '../contexts/content';

import {
  landingContent,
  aboutContent,
  coachingContent,
  philosophyContent,
  consideringContent,
  contactContent,
} from '../content';

function App() {
  const [landing, setLanding] = useState({});
  const [coaching, setCoaching] = useState({});
  const [philosophy, setPhilosophy] = useState({});
  const [considering, setConsidering] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});

  useEffect(() => {
    setLanding({ ...landingContent });
    setCoaching({ ...coachingContent });
    setPhilosophy({ ...philosophyContent });
    setConsidering({ ...consideringContent });
    setAbout({ ...aboutContent });
    setContact({ ...contactContent });
  }, []);

  return (
    <ContentProvider value={{ landing, coaching, philosophy, considering, about, contact }}>
      <Landing />
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
