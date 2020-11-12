import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';
import ContentContext from '../../contexts/content';

const Contact = () => {
  const { contact } = useContext(ContentContext);
  const {
    subheadOne,
    paragraphOne,
    subheadTwo,
    paragraphTwo,
    subheadThree,
    credit1a,
    credit1b,
    credit2a,
    credit2b,
    credit2c,
    credit3,
  } = contact;

  return (
    <section id="contact">
      <Row className="page">
        <Col md={6} sm={12} className="left">
          <form action="https://getform.io/f/93570157-3df3-448b-a0ca-e5bb3a58c8b1" method="POST">
            <ul className="form-style-1">
              <li>
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input id="name" type="text" name="Name" className="field" />
              </li>
              <li>
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input id="email" type="email" name="Email" className="field" />
              </li>
              <li>
                <label htmlFor="message">
                  Your Message <span className="required">*</span>
                </label>
                <textarea id="message" name="Message" className="field field-textarea" />
              </li>
              <li>
                <input type="submit" value="Submit" />
              </li>
            </ul>
          </form>
        </Col>
        <Col md={6} sm={12} className="right">
          <div className="blank" />
          <div className="credits text">
            <Fade left duration={1000} delay={600} distance="30px">
              <h3>{subheadOne}</h3>
              <p>{paragraphOne}</p>
            </Fade>
            <Fade right duration={1000} delay={1000} distance="30px">
              <h3>{subheadTwo}</h3>
              <p>{paragraphTwo}</p>
            </Fade>
            <Fade bottom duration={1000} delay={1500} distance="30px">
              <h3>{subheadThree}</h3>
              <p className="credit">
                <span>
                  {credit1a}
                  <a href="https://github.com/doubledherin" target="_blank" rel="noreferrer">
                    {credit1b}
                  </a>
                </span>
              </p>
              <p className="credit">
                <span>
                  <a
                    href="https://www.gatsbyjs.com/starters/cobidev/gatsby-simplefolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {credit2a}
                  </a>
                  {credit2b}
                  <a href="https://github.com/cobidev" target="_blank" rel="noreferrer">
                    {credit2c}
                  </a>
                </span>
              </p>
              <p className="credit">{credit3}</p>
            </Fade>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
