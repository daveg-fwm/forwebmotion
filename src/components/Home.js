import React from 'react';
import { HomePanelStyled, ButtonStyled } from './styles/HomePanelStyled';
import { FWMLogo } from './svg/InlineSVG';

const Home = () => (
  <HomePanelStyled className="panel">
    <FWMLogo />
    <h1>A Web Developer's journey.</h1>
    <p>
      Everything we learn today is but a stepping stone to what we will learn
      tomorrow.
    </p>
    <ButtonStyled>The journey so far</ButtonStyled>
  </HomePanelStyled>
);
export default Home;
