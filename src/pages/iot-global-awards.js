import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const IotGlobalAwards = ({ data, location }) => {
  const HeaderData = data.allDataJson.edges[0].node.header.iotga;
  const PreviewData = data.allDataJson.edges[0].node.preview.iotga;
  const MainData = data.allDataJson.edges[0].node.main.iotga;

  return (
    /*
      Pass iotga header data to layout component which passes the data down to the header component.
      Location is used to determine the current page - passed to layout component which passes the data down to the header component.
      Pass footer class to layout component which passes the class down to the footer component.
    */
    <Layout
      headerData={HeaderData}
      footerClass={{ class: 'relative' }}
      location={location}
    >
      <SEO title="IoT Global Awards" keywords={['IoT Global Awards']} />
      {/* Pass iotga preview and main data to Project component */}
      <Project PreviewData={PreviewData} MainData={MainData} />
    </Layout>
  );
};

// Fetch header, preview and main data for IoT Global Awards project from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
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
          preview {
            iotga {
              class
              year
              type
              bannerImg
            }
          }
          main {
            iotga {
              type
              content
            }
          }
        }
      }
    }
  }
`;

IotGlobalAwards.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default IotGlobalAwards;
