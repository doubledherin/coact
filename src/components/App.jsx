import React, { useState, useEffect } from 'react';
import Landing from './Landing/Landing';
import Coaching from './Coaching/Coaching';
import Excuses from './Excuses/Excuses';
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
  excusesContent,
  philosophyContent,
  consideringContent,
  testimonialsContent,
  contactContent,
} from '../content';

function App() {
  const [landing, setLanding] = useState({});
  const [coaching, setCoaching] = useState({});
  const [excuses, setExcuses] = useState({});
  const [philosophy, setPhilosophy] = useState({});
  const [considering, setConsidering] = useState({});
  const [testimonials, setTestimonials] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});

  useEffect(() => {
    setLanding({ ...landingContent });
    setCoaching({ ...coachingContent });
    setExcuses({ ...excusesContent });
    setPhilosophy({ ...philosophyContent });
    setConsidering({ ...consideringContent });
    setTestimonials({ ...testimonialsContent });
    setAbout({ ...aboutContent });
    setContact({ ...contactContent });
  }, []);

  return (
    <ContentProvider
      value={{ landing, coaching, excuses, philosophy, considering, testimonials, about, contact }}
    >
      <Landing />
      <Coaching />
      <Excuses />
      <Philosophy />
      <Considering />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </ContentProvider>
  );
}

export default App;
