import React from 'react';
import PropTypes from 'prop-types';
import FooterPanelStyled from './styles/FooterPanelStyled';
import { LinkedInIcon } from './svg/InlineSVG';

const year = new Date().getFullYear();

const Footer = ({ footerClass }) => (
  <FooterPanelStyled className={footerClass.class}>
    <div>
      <a
        className="a-svg"
        href="https://www.linkedin.com/in/dave-green-963270120/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
        <span className="a-svg-txt">LinkedIn</span>
      </a>
      <a className="email-me" href="mailto:dave@forwebmotion.com">
        dave@forwebmotion.com
      </a>
      <p>&copy; {year}. All Rights Reserved.</p>
    </div>
  </FooterPanelStyled>
);

Footer.propTypes = {
  footerClass: PropTypes.shape({
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
