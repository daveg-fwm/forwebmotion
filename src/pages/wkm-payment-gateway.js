import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const WkmPaymentGateway = ({ data, location }) => {
  const HeaderData = data.allDataJson.edges[0].node.header.wkmpg;
  const PreviewData = data.allDataJson.edges[0].node.preview.wkmpg;
  const MainData = data.allDataJson.edges[0].node.main.wkmpg;

  return (
    /*
      Pass wkmpg header data to layout component which passes the data down to the header component.
      Location is used to determine the current page - passed to layout component which passes the data down to the header component.
      Pass footer class to layout component which passes the class down to the footer component.
    */
    <Layout
      headerData={HeaderData}
      footerClass={{ class: 'relative' }}
      location={location}
    >
      <SEO title="WKM Payment Gateway" keywords={['WKM Global']} />
      {/* Pass wkmpg preview and main data to Project component */}
      <Project PreviewData={PreviewData} MainData={MainData} />
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
  location: PropTypes.object.isRequired,
};

export default WkmPaymentGateway;
