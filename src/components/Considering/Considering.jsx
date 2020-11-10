import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import FixedImage from '../Image/FixedImage';
import ContentContext from '../../contexts/content';

const Considering = () => {
  const { considering } = useContext(ContentContext);
  const { img, paragraphOne, paragraphTwo, subheadOne, subheadTwo } = considering;

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
                <FixedImage alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <h3>{subheadOne}</h3>
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <h3>{subheadTwo}</h3>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Considering;
