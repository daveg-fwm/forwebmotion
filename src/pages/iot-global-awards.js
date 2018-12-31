import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const IotGlobalAwards = ({ data }) => {
  const ProjectData = data.allDataJson.edges[0].node.projects.iotga;
  const HeaderData = data.allDataJson.edges[1].node.header.iotga;

  return (
    /*
      Pass iotga header data to layout component which passes the data down to the header component
      Pass footer class to layout component which passes the class down to the footer component
    */
    <Layout headerData={HeaderData} footerClass={{ class: 'relative' }}>
      <SEO title="IoT Global Awards" />
      {/* Pass iotga preview data to Project component */}
      <Project data={ProjectData} />
    </Layout>
  );
};

/*
  Fetch main panel data for IoT Global Awards project from src/data/projects.json
  Fetch header data for IoT Global Awards project from src/data/header.json
*/
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          projects {
            iotga {
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
          }
        }
      }
    }
  }
`;

IotGlobalAwards.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IotGlobalAwards;
