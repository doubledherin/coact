import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';

import Prompt from '../common/Prompt';
import FixedImage from '../Image/FixedImage';
import ContentContext from '../../contexts/content';

const About = () => {
  const { about } = useContext(ContentContext);
  const {
    alt,
    cta,
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
            <FixedImage
              imgStyle={{ objectFit: 'contain' }}
              style={{ height: '350px' }}
              alt={alt}
              filename={img}
            />
          </Fade>
          <div className="details">
            <Fade left duration={1000} delay={1000} distance="30px">
              <h3>{name}</h3>
            </Fade>
            <Fade right duration={1000} delay={1000} distance="30px">
              <p>{accreditation}</p>
            </Fade>
            <Fade bottom duration={1000} delay={1000} distance="30px">
              <p className="social">
                <a href="https://www.linkedin.com/in/thelan/" target="_blank" rel="noreferrer">
                  <span>
                    <i className="fa fa-linkedin-square" style={{ fontSize: '24px' }} />{' '}
                  </span>
                  {linkedIn}
                </a>
              </p>
              <p className="social">
                <a href="https://xing.com/profile/thelan_nguyen" target="_blank" rel="noreferrer">
                  <span>
                    <i className="fa fa-xing" style={{ fontSize: '24px' }} />{' '}
                  </span>
                  {xing}
                </a>
              </p>
            </Fade>
          </div>
          <Prompt linkTo="contact" text={cta} />
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
