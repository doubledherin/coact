import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';
import FixedImage from '../Image/FixedImage';
import ContentContext from '../../contexts/content';

const About = () => {
  const { about } = useContext(ContentContext);
  const {
    alt,
    img,
    name,
    accreditation,
    linkedIn,
    xing,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
  } = about;

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
    <section id="about">
      <Row>
        <Col md={6} sm={12} className="left">
          <Fade left duration={1000} delay={600} distance="30px">
            <FixedImage alt={alt} filename={img} />
          </Fade>
          <Fade left duration={1000} delay={1000} distance="30px">
            <h3>{name}</h3>
          </Fade>
          <Fade right duration={1000} delay={1000} distance="30px">
            <p>{accreditation}</p>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="social">{linkedIn}</p>
            <p className="social">{xing}</p>
          </Fade>
        </Col>
        <Col md={6} sm={12} className="right">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div>
              <p>{paragraphOne}</p>
              <p>{paragraphTwo}</p>
              <p>{paragraphThree}</p>
              <p>{paragraphFour}</p>
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default About;
