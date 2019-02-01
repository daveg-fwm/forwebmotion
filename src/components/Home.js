import React from 'react';
import PropTypes from 'prop-types';
import { HomePanelStyled, ButtonStyled } from './styles/HomePanelStyled';
import { FWMLogo } from './svg/InlineSVG';

const Home = ({ homeRef }) => (
  <div className="hide-panel" ref={homeRef}>
    <HomePanelStyled className="panel">
      <FWMLogo />
      <h1>A Web Developer's journey.</h1>
      <p>
        Everything we learn today is but a stepping stone to what we will learn
        tomorrow.
      </p>
      <ButtonStyled>The journey so far</ButtonStyled>
    </HomePanelStyled>
  </div>
);

Home.propTypes = {
  homeRef: PropTypes.object,
};

export default Home;
