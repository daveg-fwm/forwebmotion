import React from 'react';
import PropTypes from 'prop-types';
import { HomePanelStyled, ArrowStyled } from './styles/HomePanelStyled';
import { FWMIcon, FWMLogo } from './svg/InlineSVG';

const Home = ({ homeRef, homeScroll }) => (
  <div className="hide-panel" ref={homeRef}>
    <HomePanelStyled className="panel">
      <FWMIcon />
      <FWMLogo />
      <h1>A Web Developer's journey.</h1>
      <button type="button" aria-label="Scroll down to first project" aria-labelledby="rsc-project" onClick={() => homeScroll('#rsc-project')}>
        <ArrowStyled className="down-arrow">
          <span />
          <span />
        </ArrowStyled>
      </button>
    </HomePanelStyled>
  </div>
);

Home.propTypes = {
  homeRef: PropTypes.object,
  homeScroll: PropTypes.func,
};

export default Home;
