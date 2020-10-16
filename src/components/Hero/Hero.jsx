import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import HeroImg from '../Image/HeroImg';
import PortfolioContext from '../../context/context';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { img, title, name, subtitle, cta } = hero;
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
  }, []);

  return (
    <div id="landing">
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <h1 className="hero-title">co.act</h1>
      </Fade>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
        <h2 className="hero-subtitle">Let&#39;s go beyond</h2>
      </Fade>
      <section id="hero">
        <Container className="jumbotron">
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="coaching-wrapper__image">
              <HeroImg alt="mountain climber on mountainside" filename={img} />
            </div>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="coaching" smooth duration={1000}>
                  Are you a passenger or a pilot?
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
