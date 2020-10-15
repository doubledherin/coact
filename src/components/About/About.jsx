import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
      <Container>
        <Title title="A Personal Journey" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  In a small neighborhood of Saigon, a group of kids ran to be the first. Neither winning nor running interested me, staying aside became a habit. The past had to hide, survival was the present, and the future felt liked a dark hole. Mixture of being poor and fear, escape postulated as alternative. That is how the world presented itself to me
                </p>
                <p className="about-wrapper__info-text">
                  After landing in Paris, the western dream turned into an illusion. Graduating as an engineer felt like a breakthrough. In a pursuit of success, I moved to San Francisco. On the top of the hill, the doubt kept persisting: “Is it the right mountain to climb?” I tried to find an answer by backpacking in the woods, traveling through undeveloped countries and practicing yoga. What seemed familiar was the connection to nature, people, emptiness and uncertainty. 
                </p>
                <p className="about-wrapper__info-text">
                  Down to the valley of despair, it was a wake up call for inner exploration and being an artist. Exhibitions were always a challenge to reveal who I am. My vision of success and happiness felt borrowed from someone else. The “American dream” reached its end. A big shift had to happen. Courage was not there with me at first: moving out of San Francisco! 
                </p>
                <p className="about-wrapper__info-text">
                  What is next and what for? Konstanz, a conscious choice of life shift. Whatever I had already accomplished vanished, experiences remain. The completion of my coaching training allowed to see through my journey and draws a new path: the co-experiencing of other people’s transformative expedition.  
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
