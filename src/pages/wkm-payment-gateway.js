import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectPreview from '../components/ProjectPreview';
import ProjectMain from '../components/ProjectMain';

const WkmPaymentGateway = ({ data }) => {
  const HeaderData = data.allDataJson.edges[0].node.header.wkmpg;
  const PreviewData = data.allDataJson.edges[0].node.preview.wkmpg;
  const MainData = data.allDataJson.edges[0].node.main.wkmpg;

  return (
    /*
      Pass wkmpg header data to layout component which passes the data down to the header component
      Pass footer class to layout component which passes the class down to the footer component
    */
    <Layout headerData={HeaderData} footerClass={{ class: 'relative' }}>
      <SEO title="WKM Payment Gateway" />
      <div className="panel">
        {/* Pass wkmpg preview data to ProjectPreview component */}
        <ProjectPreview data={PreviewData} />
        {/* Pass wkmpg main data to ProjectMain component */}
        <ProjectMain data={MainData} />
      </div>
    </Layout>
  );
};

// Fetch header, preview and main data for WKM Payment Gateway project from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          header {
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
          preview {
            wkmpg {
              class
              year
              type
              bannerImg
            }
          }
          main {
            wkmpg {
              type
              content
            }
          }
        }
      }
    }
  }
`;

WkmPaymentGateway.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WkmPaymentGateway;
