import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectPreview from '../components/ProjectPreview';
import ProjectMain from '../components/ProjectMain';

const IotGlobalAwards = ({ data }) => {
  const HeaderData = data.allDataJson.edges[0].node.header.iotga;
  const PreviewData = data.allDataJson.edges[0].node.preview.iotga;
  const MainData = data.allDataJson.edges[0].node.main.iotga;

  return (
    /*
      Pass iotga header data to layout component which passes the data down to the header component
      Pass footer class to layout component which passes the class down to the footer component
    */
    <Layout headerData={HeaderData} footerClass={{ class: 'relative' }}>
      <SEO title="IoT Global Awards" />
      <div className="panel">
        {/* Pass iotga preview data to ProjectPreview component */}
        <ProjectPreview data={PreviewData} />
        {/* Pass iotga main data to ProjectMain component */}
        <ProjectMain data={MainData} />
      </div>
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
};

export default IotGlobalAwards;
