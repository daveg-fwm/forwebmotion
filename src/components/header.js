import { Link } from 'gatsby';
import React from 'react';
import { HeaderPanel, NavButton } from './styles/HeaderPanel';
import { FWMIcon } from './svg/InlineSVG';

const toggleNav = event => {
  event.preventDefault();
  console.log(event);
};

const Header = () => (
  <HeaderPanel>
    <div>
      <div className="top-nav">
        <Link className="a-svg" to="/">
          <FWMIcon />
        </Link>
        <NavButton onClick={toggleNav}>
          <span />
          <span />
          <span />
        </NavButton>
      </div>
      <nav>
        <Link to="/red-sofa-cafe/">Red Sofa Cafe</Link>
        <Link to="/iot-global-awards/">IoT Global Awards</Link>
        <Link to="/wkm-payment-gateway/">WKM Payment Gateway</Link>
        <Link to="/about/">About forwebmotion</Link>
      </nav>
    </div>
  </HeaderPanel>
);

export default Header;
