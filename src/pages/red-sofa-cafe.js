import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const RedSofaCafe = ({ data }) => {
  const HeaderData = data.allDataJson.edges[0].node.header.rsc;
  const ProjectData = data.allDataJson.edges[0].node.main.rsc;

  return (
    /*
      Pass rsc header data to layout component which passes the data down to the header component
      Pass footer class to layout component which passes the class down to the footer component
    */
    <Layout headerData={HeaderData} footerClass={{ class: 'relative' }}>
      <SEO title="Red Sofa Cafe" />
      {/* Pass rsc preview data to Project component */}
      <Project data={ProjectData} />
    </Layout>
  );
};

// Fetch main panel and header data for Red Sofa Cafe project from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          main {
            rsc {
              class
              year
              type
              bannerImg
            }
          }
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
        }
      }
    }
  }
`;

RedSofaCafe.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RedSofaCafe;
