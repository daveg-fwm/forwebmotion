import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import posed, { PoseGroup } from 'react-pose';
import GlobalStyled from './styles/GlobalStyled';
import Header from './header';
import MainPanelStyled from './styles/MainPanelStyled';
import Footer from './Footer';

const MainPanelPosed = posed(MainPanelStyled)({
  enter: {
    opacity: 1,
    transition: { duration: 500 },
    beforeChildren: true,
  },
  exit: {
    opacity: 0,
    transition: { duration: 500 },
  },
});

const Layout = ({ children, ...props }) => (
  /*
    Fetch page link data from gatsby-config.js (centralized navigation)
    Fetch header data from src/data/projects.json
  */
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
        allDataJson {
          edges {
            node {
              header {
                rsc {
                  class
                  logo
                  appIcon
                  techStack {
                    frontEnd {
                      title
                      html
                      css
                      js
                      jquery
                    }
                    backEnd {
                      title
                      php
                      mysql
                    }
                  }
                }
                iotga {
                  class
                  logo
                  appIcon
                  techStack {
                    frontEnd {
                      title
                      html
                      css
                      js
                      jquery
                    }
                    backEnd {
                      title
                      php
                      mysql
                    }
                    server {
                      title
                      ubuntu
                      apache
                      nginx
                    }
                    appsDevOps {
                      title
                      gulp
                      azureDevOps
                      github
                      sourceTree
                    }
                  }
                }
                wkmpg {
                  class
                  logo
                  appIcon
                  techStack {
                    frontEnd {
                      title
                      html
                      css
                      js
                      jquery
                    }
                    backEnd {
                      title
                      php
                      mysql
                      doctrine
                      sagePay
                    }
                    server {
                      title
                      ubuntu
                      apache
                      nginx
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      /*
        headerData gets passed to the Header component which passes down to HeaderContent component.
        footerClass gets passed down to the Footer component.
      */
      let headerData = {};
      let footerClass = { class: 'relative' };

      if (props.location.pathname === '/') {
        headerData = { class: 'index' };
        footerClass = { class: 'fixed' };
      } else if (props.location.pathname === '/red-sofa-cafe') {
        headerData = data.allDataJson.edges[0].node.header.rsc;
      } else if (props.location.pathname === '/iot-global-awards') {
        headerData = data.allDataJson.edges[0].node.header.iotga;
      } else if (props.location.pathname === '/wkm-payment-gateway') {
        headerData = data.allDataJson.edges[0].node.header.wkmpg;
      }

      return (
        <>
          {/* Styles used on every page */}
          <GlobalStyled />

          {/* Send page link and header content data to Header component. */}
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            data={headerData}
          />

          <MainPanelPosed key={props.location.pathname}>
            {children}
          </MainPanelPosed>

          <Footer footerClass={footerClass} />
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Layout;
