import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/GlobalStyles';
import Header from './header';
import MainPanel from './styles/MainPanel';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    {/* Styles used on every page */}
    <GlobalStyles />
    <Header />
    <MainPanel>{children}</MainPanel>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
