import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import HeroImg from '../Image/HeroImg';
import HikerImg from '../Image/HikerImg';
import PortfolioContext from '../../context/context';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { imgMountains, imgHikers, title, subtitle } = hero;
  const [setIsDesktop] = useState(false);
  const [setIsMobile] = useState(false);

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
      <Fade top cascade duration={800} delay={500} distance="130px">
        <h1 className="hero-title logo">{title}</h1>
      </Fade>
      <section id="hero">
        <Container className="jumbotron">
          <Fade left duration={1000} delay={1000} distance="30px">
            <div className="coaching-wrapper__image">
              <HeroImg alt="mountains in the distance" filename={imgMountains} />
            </div>
          </Fade>
          <Fade right duration={1000} delay={1000} distance="30px">
            <div className="hikers__image">
              <HikerImg alt="hikers" filename={imgHikers} />
            </div>
          </Fade>
          <Zoom right duration={3000}>
            <h2 className="hero-subtitle">{subtitle}</h2>
          </Zoom>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
