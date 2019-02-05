import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const About = ({ data, location }) => {
  const HeaderData = data.allDataJson.edges[0].node.header.about;
  const PreviewData = data.allDataJson.edges[0].node.preview.about;
  const MainData = data.allDataJson.edges[0].node.main.about;

  return (
    /*
      Pass forwebmotion header data to layout component which passes the data down to the header component.
      Location is used to determine the current page - passed to layout component which passes the data down to the header component.
      Pass footer class to layout component which passes the class down to the footer component.
    */
    <Layout
      headerData={HeaderData}
      footerClass={{ class: 'relative' }}
      location={location}
    >
      <SEO title="About" />
      {/* Pass forwebmotion preview and main data to Project component */}
      <Project PreviewData={PreviewData} MainData={MainData} />
    </Layout>
  );
};

// Fetch header, preview and main data for forwebmotion project from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          header {
            about {
              class
              logo
              appIcon
              techStack {
                frontEnd {
                  title
                  html
                  css
                  js
                  animejs
                  emotion
                }
                toolchainsCloudServices {
                  title
                  gatsby
                  amplify
                  aws
                }
                ideVersionControl {
                  title
                  vscode
                  git
                }
              }
            }
          }
          preview {
            about {
              class
              year
              type
              bannerImg
            }
          }
          main {
            about {
              type
              content
            }
          }
        }
      }
    }
  }
`;

About.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default About;
