import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import NotFoundPanelStyled from './styles/NotFoundPanelStyled';

const NotFound = ({ mainRef, animateExit }) => (
  <div
    className="hide-panel"
    ref={mainRef}
    style={{ transform: 'translateY(-100%)' }}
  >
    <NotFoundPanelStyled className="panel">
      <p>
        You seem to have wandered
        <br />
        off in search of the unknown.
      </p>
      <p>
        Not to worry though.
        <br />
        Home is just a{' '}
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            animateExit();
            setTimeout(() => navigate('/'), 1000);
          }}
        >
          link
        </a>{' '}
        away.
      </p>
      <p>😉</p>
    </NotFoundPanelStyled>
  </div>
);

NotFound.propTypes = {
  mainRef: PropTypes.object,
  animateExit: PropTypes.func,
};

export default NotFound;
