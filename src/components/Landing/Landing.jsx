import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Fade, Zoom } from 'react-reveal';

import ContentContext from '../../contexts/content';
import FluidImage from '../Image/FluidImage';
import FixedImage from '../Image/FixedImage';
import NavBar from '../NavBar/NavBar';
import Prompt from '../common/Prompt';

const Landing = () => {
  const { landing } = useContext(ContentContext);
  const { companyName, cta, imgHikers, imgMountains, tagline } = landing;
  const [showtagline, setShowTagline] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    setTimeout(() => setShowTagline(true), 1);
    setTimeout(() => setShowTagline(false), 3000);
  }, []);

  return (
    <div id="landing" className="page">
      <section id="header">
        <div className="logo">
          <Fade top cascade duration={300} delay={500} distance="130px">
            <h1 className="company-name">{companyName}</h1>
          </Fade>
          <Fade bottom={isDesktop} top={isMobile} duration={800} delay={4000} distance="30px">
            <h2 className="tagline">{tagline}</h2>
          </Fade>
        </div>
        {isDesktop && (
          <NavBar
            navItems={[
              { to: 'coaching', text: 'COACHING' },
              { to: 'about', text: 'ABOUT' },
            ]}
          />
        )}
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
        <Prompt linkTo="coaching" text={cta} />
      </section>
    </div>
  );
};

export default Landing;
