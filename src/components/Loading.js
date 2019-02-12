import React from 'react';
import LoadingStyled from './styles/LoadingStyled';
import FWMLogo from './svg/FWMLogo';

const Loading = () => (
  <LoadingStyled className="loading">
    <p>
      Everything we learn today is but a stepping stone to what we will learn
      tomorrow.
    </p>
    <FWMLogo />
    <p>A Web Developer's journey.</p>
  </LoadingStyled>
);

export default Loading;
