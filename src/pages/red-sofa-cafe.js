import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const RedSofaCafe = ({ data }) => {
  const HeaderData = data.allDataJson.edges[0].node.header.rsc;
  const PreviewData = data.allDataJson.edges[0].node.preview.rsc;
  const MainData = data.allDataJson.edges[0].node.main.rsc;

  return (
    /*
      Pass rsc header data to layout component which passes the data down to the header component
      Pass footer class to layout component which passes the class down to the footer component
    */
    <Layout headerData={HeaderData} footerClass={{ class: 'relative' }}>
      <SEO title="Red Sofa Cafe" />
      {/* Pass rsc preview and main data to Project component */}
      <Project PreviewData={PreviewData} MainData={MainData} />
    </Layout>
  );
};

// Fetch header, preview and main data for Red Sofa Cafe project from src/data/projects.json
export const query = graphql`
  query {
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
          }
          preview {
            rsc {
              class
              year
              type
              bannerImg
            }
          }
          main {
            rsc {
              type
              content
            }
          }
        }
      }
    }
  }
`;

RedSofaCafe.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RedSofaCafe;
