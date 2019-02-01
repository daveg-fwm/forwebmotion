import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/Home';
import Project from '../components/Project';

const IndexPage = ({ data, location }) => {
  const PreviewData = data.allDataJson.edges[0].node.preview;

  return (
    /*
      Send page data so HeaderComponent knows to use static content - data is passed to layout component which passes the data down to the header component.
      Location is used to determine the current page - passed to layout component which passes the data down to the header component.
      Pass footer class to layout component which passes the class down to the footer component.
    */
    <Layout
      headerData={{ page: 'index' }}
      footerClass={{ class: 'fixed' }}
      location={location}
    >
      <SEO title="Home" />
      <Home />
      {/* Pass projects' preview data to Project component */}
      <Project PreviewData={PreviewData} />
    </Layout>
  );
};

// Fetch all data for project previews from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          preview {
            rsc {
              name
              class
              year
              type
              link
              bannerImg
              intro
            }
            iotga {
              name
              class
              year
              type
              link
              bannerImg
              intro
            }
            wkmpg {
              name
              class
              year
              type
              link
              bannerImg
              intro
            }
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default IndexPage;
