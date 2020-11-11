import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const Prompt = (props) => {
  const { linkTo, text } = props;
  return (
    <Link to={linkTo} smooth duration={1000}>
      <Fade bottom duration={1000} delay={4000} distance="30px">
        <div className="corner-card">
          <div className="cta-text">
            <h1 className="skew">{text}</h1>
          </div>
        </div>
      </Fade>
    </Link>
  );
};

export default Prompt;

Prompt.propTypes = {
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
