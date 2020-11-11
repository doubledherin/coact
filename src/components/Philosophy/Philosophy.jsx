import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import FixedImage from '../Image/FixedImage';
import FluidImage from '../Image/FluidImage';
import ContentContext from '../../contexts/content';

const Philosophy = () => {
  const { philosophy } = useContext(ContentContext);
  const {
    businessmanAlt,
    businessmanImg,
    mountainAlt,
    mountainImg,
    paragraphOne,
    paragraphTwo,
  } = philosophy;

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
    <section id="philosophy" className="page">
      <Container>
        <Row>
          <Col className="philosophy-left" md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="text">
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
              </div>
            </Fade>
            <Fade left duration={1000} delay={1300} distance="30px">
              <FixedImage
                imgStyle={{ objectFit: 'contain' }}
                style={{ height: '120px', marginTop: '80px' }}
                className="image"
                alt={businessmanAlt}
                filename={businessmanImg}
              />
            </Fade>
          </Col>
          <Col className="philosophy-right" md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <FluidImage alt={mountainAlt} filename={mountainImg} />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Philosophy;
