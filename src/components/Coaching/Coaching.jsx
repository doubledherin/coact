import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';

import Prompt from '../common/Prompt';
import FluidImage from '../Image/FluidImage';
import ContentContext from '../../contexts/content';

const Coaching = () => {
  const { coaching } = useContext(ContentContext);
  const { cta, subheading, img, paragraphOne, paragraphTwo, paragraphThree } = coaching;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="coaching">
      <Row className="page">
        <Col md={6} sm={12} className="top left">
          <Fade bottom duration={1000} delay={600} distance="30px">
            <FluidImage
              className="image"
              imgStyle={{ objectFit: 'contain' }}
              style={{ maxHeight: '50vh' }}
              alt="person looking out window"
              filename={img}
            />
          </Fade>
          <Prompt linkTo="excuses" text={cta} />
        </Col>
        <Col md={6} sm={12} className="bottom right">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p>{paragraphOne}</p>
            <h3>
              <strong>{subheading}</strong>
            </h3>
            <p>{paragraphTwo}</p>
            <p>{paragraphThree}</p>
          </Fade>
          <Prompt linkTo="excuses" text={cta} />
        </Col>
      </Row>
    </section>
  );
};

export default Coaching;
