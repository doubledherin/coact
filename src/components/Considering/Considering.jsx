import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Considering = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
        <Title title="Considering" />
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
                <h3>Before getting started</h3>
                <p className="about-wrapper__info-text">
                  Ask yourself if you are willing to invest time and energy into the coaching journey. It requires personal commitment. Think through what you can reasonably take on. To get a good idea of what to expect and if we can work together, feel free to contact me for a conversation. Please send me an email to thelan@co-act.space. . 
                </p>
                <h3>Coaching package</h3>
                <p className="about-wrapper__info-text">
                  The length of the coaching process and frequency of sessions are determined accordingly with the client. I recommend a package of 8 sessions of 50 minutes over a period of four months to allow a certain level of depth and sustainability. I coach via Zoom, over the phone or inperson.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Considering;
