import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Philosopy = () => {
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
    <section id="coaching">
      <Container>
        <Title title="Coaching for Change" />
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
                  Most clients come to me for various reasons: leadership competency, personal development, career perspective, relationship deepening or even burn-out. They often asked why they did not engage with coaching earlier.
                </p>
                <h3>What do you really want?</h3>
                <p className="about-wrapper__info-text">
                  The answer seems obvious at first, for instance a challenging job, a conflict resolution or developing new skills. Slowly, other aspects show up and matters get more complex, for example dependencies or an interaction with others.
                </p>
                <h3>Are you a passenger or a pilot?</h3>
                <p className="about-wrapper__info-text">
                  When change at some point is necessary, which one are you? Feeling stuck is a wake up call for redirection. There is no shortcut for getting a clarity what really matters and going for it. What holds you back to go through?
                </p>
                <h3>How to go through and get there?</h3>
                <p className="about-wrapper__info-text">
                  When change at some point is necessary, which one are you? Feeling stuck is a wake up call for redirection. There is no shortcut for getting a clarity what really matters and going for it. What holds you back to go through?
                </p>
                <p className="about-wrapper__info-text">
                  This is where coaching comes in. The coach is a sparring partner and co-traveller of your journey of change.
                </p>
                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Philosopy;
