import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const WkmPaymentGateway = ({ data }) => {
  const ProjectData = data.allDataJson.edges[0].node.projects.wkmpg;
  const HeaderData = data.allDataJson.edges[1].node.header.wkmpg;

  return (
    /*
      Pass wkmpg header data to layout component which passes the data down to the header component
      Pass footer class to layout component which passes the class down to the footer component
    */
    <Layout headerData={HeaderData} footerClass={{ class: 'relative' }}>
      <SEO title="WKM Payment Gateway" />
      {/* Pass wkmpg preview data to Project component */}
      <Project data={ProjectData} />
    </Layout>
  );
};

/*
  Fetch main panel data for WKM Payment Gateway project from src/data/projects.json
  Fetch header data for WKM Payment Gateway project from src/data/header.json
*/
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          projects {
            wkmpg {
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
        }
      }
    }
  }
`;

WkmPaymentGateway.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WkmPaymentGateway;
