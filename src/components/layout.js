import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import anime from 'animejs';
import GlobalStyled from './styles/GlobalStyled';
import Header from './header';
import MainPanelStyled from './styles/MainPanelStyled';
import Footer from './Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    headerData: PropTypes.object.isRequired,
    footerClass: PropTypes.object.isRequired,
  };

  state = {
    showMenu: false,
    // Create a ref for the nav element - value passed up from Header component via props
    navRef: React.createRef(),
    // Create a ref for the HeaderContent component - value passed up from HeaderContent component via props
    headerContentRef: React.createRef(),
  };

  componentDidMount = () => {
    const { headerContentRef } = this.state;

    // Animate HeaderContent component in
    anime({
      targets: headerContentRef.current,
      translateY: () => ['-100%', '0%'],
      easing: 'easeOutCubic',
      duration: 500,
    });
  };

  // Toggle showMenu state to open/close nav menu
  toggleNav = () => {
    const { showMenu, navRef } = this.state;

    this.setState({ showMenu: !showMenu });

    // Animate nav menu open/close
    anime({
      targets: navRef.current,
      translateY: () => {
        if (!showMenu) {
          return ['-100%', '0%'];
        }
        // Menu is closed
        return ['0%', '-100%'];
      },
      easing: 'easeOutCubic',
      duration: 500,
    });
  };

  hideHeaderContent = () => {
    const { showMenu, headerContentRef } = this.state;
    const delay = showMenu ? 500 : 0;

    // Close nav menu if it's open
    if (showMenu) this.toggleNav();

    // Hide HeaderContent component
    anime({
      targets: headerContentRef.current,
      translateY: () => ['0%', '-100%'],
      easing: 'easeOutCubic',
      duration: 500,
      delay,
    });
  };

  render() {
    const { children, headerData, footerClass } = this.props;
    const { navRef, headerContentRef } = this.state;

    return (
      // Fetch page link data from gatsby-config.js (centralized navigation)
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                menuLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <>
            {/* Styles used on every page */}
            <GlobalStyled />

            {/*
              Send page link and header content data to Header component.
              Header content data is received from pages.
            */}
            <Header
              menuLinks={data.site.siteMetadata.menuLinks}
              data={headerData}
              navRef={navRef}
              headerContentRef={headerContentRef}
              toggleNav={this.toggleNav}
              hideHeaderContent={this.hideHeaderContent}
            />

            <MainPanelStyled>{children}</MainPanelStyled>
            <Footer footerClass={footerClass} />
          </>
        )}
      />
    );
  }
}

export default Layout;
