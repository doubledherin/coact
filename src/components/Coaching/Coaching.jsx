import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import FixedImage from '../Image/FixedImage';
import ContentContext from '../../contexts/content';

const Coaching = () => {
  const { coaching } = useContext(ContentContext);
  const {
    img,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    paragraphFive,
    subheadOne,
    subheadTwo,
    subheadThree,
  } = coaching;
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
        <Row className="coaching-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="coaching-wrapper__image">
                <FixedImage alt="person looking out window" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="coaching-wrapper__info">
                <p className="coaching-wrapper__info-text">{paragraphOne}</p>
                <h3>{subheadOne}</h3>
                <p className="coaching-wrapper__info-text">{paragraphTwo}</p>
                <h3>{subheadTwo}</h3>
                <p className="coaching-wrapper__info-text">{paragraphThree}</p>
                <h3>{subheadThree}</h3>
                <p className="coaching-wrapper__info-text">{paragraphFour}</p>
                <p className="coaching-wrapper__info-text">{paragraphFive}</p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Coaching;
