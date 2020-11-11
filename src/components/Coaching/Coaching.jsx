import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';
import FluidImage from '../Image/FluidImage';
import ContentContext from '../../contexts/content';

const Coaching = () => {
  const { coaching } = useContext(ContentContext);
  const {
    heading1,
    heading2,
    subheading,
    img,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
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
    <section id="coaching" className="page">
      <Row>
        <Col md={6} sm={12} className="coaching-left">
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="">
              <FluidImage alt="person looking out window" filename={img} />
            </div>
          </Fade>
        </Col>
        <Col md={6} sm={12} className="coaching-right">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <h1>{heading1}</h1>
            <h1>{heading2}</h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p>{paragraphOne}</p>
            <h3>{subheading}</h3>
            <p>{paragraphTwo}</p>
            <p>{paragraphThree}</p>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Coaching;
