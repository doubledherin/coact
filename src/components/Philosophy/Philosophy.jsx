import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import ContentContext from '../../contexts/content';

const Philosophy = () => {
  const { philosophy } = useContext(ContentContext);
  const { img } = philosophy;

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
    <section id="philosophy">
      <Container>
        <Title title="Philosophy & Approach" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  My coaching is an invitation for a deep change toward fulfilling potential.
                  Accessing to your natural creativity and resourcefulness will turn aspirations to
                  reality.
                </p>
                <h3>From self-discovery to envisioning</h3>
                <p className="about-wrapper__info-text">
                  A coaching process usually begins with an exploration of who you are, who you wish
                  to be and what you want to create. Your fulfilling vision will serve as a your
                  north star to navigate through. Crafting a roadmap will support you to follow up
                  your experiment and practices.
                </p>
                <h3>Exploring and going beyond</h3>
                <p className="about-wrapper__info-text">
                  Straightforward conversation with inquiries exposes what is underneath your
                  struggles, reveals your (hidden) values and underlines what really matters to you.
                  Improvisation, playfulness and light meditation open up exploration and go beyond
                  your boundary. Brainstorming, actions learning and experimental practices help to
                  develop new skills and behavior.
                </p>
                <h3>Experiencing</h3>
                <p className="about-wrapper__info-text">
                  You are most likely experiencing self-awareness, connection to your inner knowing,
                  power of choice and appreciation. You will also be able to see through what is
                  happening, aligning your life values and triggering pattern interruptions. This
                  will create room for your resilience and authenticity to show up.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Philosophy;
