import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-scroll';

import ContentContext from '../../contexts/content';
import FluidImage from '../Image/FluidImage';
import FixedImage from '../Image/FixedImage';

const Landing = () => {
  const { landing } = useContext(ContentContext);
  const {
    companyName,
    cta1,
    cta2,
    imgHikers,
    imgMountains,
    navAbout,
    navCoaching,
    tagline,
  } = landing;
  const [showtagline, setShowTagline] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    setTimeout(() => setShowTagline(true), 100);
    setTimeout(() => setShowTagline(false), 3000);
  }, []);

  return (
    <div id="landing">
      <section id="header">
        <div className="logo">
          <Fade top cascade duration={300} delay={500} distance="130px">
            <h1 className="company-name">{companyName}</h1>
          </Fade>
          <Fade bottom={isDesktop} top={isMobile} duration={800} delay={5000} distance="30px">
            <h2 className="tagline">{tagline}</h2>
          </Fade>
        </div>
        <Fade top duration={800} delay={5000} distance="30px">
          <Link to="coaching" smooth duration={1000}>
            <h2>{navCoaching}</h2>
          </Link>
        </Fade>
        <Fade top duration={800} delay={5000} distance="30px">
          <Link to="about" smooth duration={1000}>
            <h2>{navAbout}</h2>
          </Link>
        </Fade>
      </section>
      <section id="images">
        <Container className="jumbotron">
          <Fade right duration={1000} delay={1000} distance="30px">
            <FluidImage alt="mountains in the distance" filename={imgMountains} />
          </Fade>
          <Fade left duration={1000} delay={1300} distance="30px">
            <FixedImage className="hikers__image" alt="hikers" filename={imgHikers} />
          </Fade>
          <Zoom bottom opposite when={showtagline} duration={2000}>
            <h2 className="tagline">{tagline}</h2>
          </Zoom>
        </Container>
      </section>
      <section id="cta">
        <Fade right duration={1000} delay={5000} distance="30px">
          <div className="corner-card">
            <div className="cta-text">
              <h1>{cta1}</h1>
              <h1>{cta2}</h1>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Landing;
