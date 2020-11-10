import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Fade, Zoom } from 'react-reveal';

import ContentContext from '../../contexts/content';
import FluidImage from '../Image/FluidImage';
import FixedImage from '../Image/FixedImage';

const Landing = () => {
  const { landing } = useContext(ContentContext);
  const { cta, imgMountains, imgHikers, companyName, tagline } = landing;
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
    setTimeout(() => setShowTagline(true), 300);
    setTimeout(() => setShowTagline(false), 4000);
  }, []);
  if (isDesktop) {
    console.log('is desktop');
  }
  if (isMobile) {
    console.log('is mobile');
  }

  return (
    <div id="landing">
      <section id="logo">
        <Fade top cascade duration={800} delay={500} distance="130px">
          <h1 className="company-name">{companyName}</h1>
        </Fade>
        <Fade duration={800} delay={7000} distance="130px">
          <h2 className="tagline">{tagline}</h2>
        </Fade>
      </section>
      <section id="images">
        <Container className="jumbotron">
          <Fade duration={1000} delay={1000} distance="30px">
            <FluidImage alt="mountains in the distance" filename={imgMountains} />
          </Fade>
          <Fade left duration={1000} delay={1300} distance="30px">
            <FixedImage className="hikers__image" alt="hikers" filename={imgHikers} />
          </Fade>
        </Container>
      </section>
      <section id="cta">
        <Zoom bottom opposite when={showtagline} duration={3000}>
          <h2 className="tagline">{tagline}</h2>
        </Zoom>
        <Fade right duration={1000} delay={5000} distance="30px">
          <div>
            <div>{cta}</div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Landing;
