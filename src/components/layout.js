import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
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

  componentDidMount = () => {
    // console.log(document.getElementById('rsc-project').offsetTop);
  };

  render() {
    const { children, headerData, footerClass } = this.props;

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
