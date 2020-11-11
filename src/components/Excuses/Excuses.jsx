import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';

import Prompt from '../common/Prompt';
import FixedImage from '../Image/FixedImage';
import FluidImage from '../Image/FluidImage';
import ContentContext from '../../contexts/content';

const Excuses = () => {
  const { excuses } = useContext(ContentContext);
  const {
    businessmanAlt,
    businessmanImg,
    cta,
    mountainAlt,
    mountainImg,
    paragraphOne,
    paragraphTwo,
  } = excuses;

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
    <section id="excuses" className="page">
      <Row>
        <Col className="excuses-left" md={6} sm={12}>
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
        <Col className="excuses-right" md={6} sm={12}>
          <Fade bottom duration={1000} delay={600} distance="30px">
            <FluidImage alt={mountainAlt} filename={mountainImg} />
          </Fade>
          <Prompt linkTo="philosophy" text={cta} />
        </Col>
      </Row>
    </section>
  );
};

export default Excuses;
