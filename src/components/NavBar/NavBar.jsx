import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';

const NavBar = (props) => {
  return props.navItems.map((navItem) => (
    <Fade top duration={800} delay={4000} distance="30px">
      <Link to="coaching" smooth duration={1000}>
        <h2 className="nav-item skew">{navItem}</h2>
      </Link>
    </Fade>
  ));
};

export default NavBar;
