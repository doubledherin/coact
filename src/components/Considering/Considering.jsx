import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';

import FixedImage from '../Image/FixedImage';

import FluidImage from '../Image/FluidImage';
import ContentContext from '../../contexts/content';

const Considering = () => {
  const { considering } = useContext(ContentContext);
  const {
    imgMountains,
    imgHikers,
    mountainsAlt,
    hikersAlt,
    paragraphOne,
    paragraphTwo,
    subheadOne,
    subheadTwo,
  } = considering;

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
    <section id="considering" className="page">
      <Row>
        <Col className="left" md={6} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div>
              <h3>{subheadOne}</h3>
              <p>{paragraphOne}</p>
              <h3>{subheadTwo}</h3>
              <p>{paragraphTwo}</p>
            </div>
          </Fade>
        </Col>
        <Col className="right" md={6} sm={12}>
          <Fade right duration={1000} delay={1000} distance="30px">
            <FluidImage alt={mountainsAlt} filename={imgMountains} />
          </Fade>
          <Fade left duration={1000} delay={1300} distance="30px">
            <FixedImage alt={hikersAlt} filename={imgHikers} />
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Considering;
