import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';

import FluidImage from '../Image/FluidImage';
import ContentContext from '../../contexts/content';

const Philosophy = () => {
  const { philosophy } = useContext(ContentContext);
  const {
    alt,
    img,
    quote,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    subheadOne,
    subheadTwo,
    subheadThree,
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
      <Row>
        <Col className="philosophy-left" md={6} sm={12}>
          <Fade bottom duration={1000} delay={600} distance="30px">
            <FluidImage alt={alt} filename={img} />
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="quote">{quote}</p>
          </Fade>
        </Col>
        <Col className="philosophy-right" md={6} sm={12}>
          <Fade left duration={1000} delay={1300} distance="30px">
            <p>{paragraphOne}</p>
            <h3>{subheadOne}</h3>
            <p>{paragraphTwo}</p>
            <h3>{subheadTwo}</h3>
            <p>{paragraphThree}</p>
            <h3>{subheadThree}</h3>
            <p>{paragraphFour}</p>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Philosophy;
