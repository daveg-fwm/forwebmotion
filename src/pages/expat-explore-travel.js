import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const ExpatExploreTravel = ({ data, location }) => {
  const HeaderData = data.allDataJson.edges[0].node.header.expat;
  const PreviewData = data.allDataJson.edges[0].node.preview.expat;
  const MainData = data.allDataJson.edges[0].node.main.expat;

  return (
    /*
      Pass expat header data to layout component which passes the data down to the header component.
      Location is used to determine the current page - passed to layout component which passes the data down to the header component.
      Pass footer class to layout component which passes the class down to the footer component.
    */
    <Layout
      headerData={HeaderData}
      footerClass={{ class: 'relative' }}
      location={location}
    >
      <SEO title="Expat Explore Travel" />
      {/* Pass expat preview and main data to Project component */}
      <Project PreviewData={PreviewData} MainData={MainData} />
    </Layout>
  );
};

// Fetch header, preview and main data for Expat Explore Travel project from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          header {
            expat {
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
          preview {
            expat {
              class
              year
              type
              bannerImg
            }
          }
          main {
            expat {
              type
              content
            }
          }
        }
      }
    }
  }
`;

ExpatExploreTravel.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default ExpatExploreTravel;
