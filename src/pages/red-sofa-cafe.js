import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const RedSofaCafe = ({ data }) => {
  const ProjectData = data.allDataJson.edges[0].node.projects.rsc;
  const HeaderData = data.allDataJson.edges[1].node.header.rsc;

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

/*
  Fetch main panel data for Red Sofa Cafe project from src/data/projects.json
  Fetch header data for Red Sofa Cafe project from src/data/header.json
*/
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          projects {
            rsc {
              name
              class
              year
              type
              link
              bannerImg
              preview
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
