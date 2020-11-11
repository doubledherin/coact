import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';

import Prompt from '../common/Prompt';
import FluidImage from '../Image/FluidImage';
import ContentContext from '../../contexts/content';

const Testimonials = () => {
  const { testimonials } = useContext(ContentContext);
  const { text1, attribution1, img } = testimonials;

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
    <section id="testimonials" className="page">
      <Row>
        <Col md={6} sm={12} className="left">
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div>
              <FluidImage
                className="image"
                imgStyle={{ objectFit: 'contain' }}
                style={{ maxHeight: '50vh' }}
                alt="person looking out window"
                filename={img}
              />
            </div>
          </Fade>
          <Prompt linkTo="about" text="A PERSONAL JOURNEY" />
        </Col>
        <Col md={6} sm={12} className="right">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div>
              <p className="testimonial">
                <i>{text1}</i>
              </p>
              <p className="attribution">{attribution1}</p>
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Testimonials;
