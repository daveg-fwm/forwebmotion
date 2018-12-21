import React from 'react';
import FooterPanel from './styles/FooterPanel';

const year = new Date().getFullYear();

const Footer = () => (
  <FooterPanel>
    <div>
      <p>&copy; {year}. All Rights Reserved.</p>
    </div>
  </FooterPanel>
);

export default Footer;
