import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import GlobalStyles from './styles/GlobalStyles';
import Header from './header';
import MainPanel from './styles/MainPanel';
import Footer from './Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      // fetch page link data from gatsby-config.js (centralized navigation)
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
            <GlobalStyles />
            {/* send page link data to Header component */}
            <Header menuLinks={data.site.siteMetadata.menuLinks} />
            <MainPanel>{children}</MainPanel>
            <Footer />
          </>
        )}
      />
    );
  }
}

export default Layout;
