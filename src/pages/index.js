import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectPreview from '../components/ProjectPreview';
import Home from '../components/Home';

const IndexPage = ({ data }) => {
  const PreviewData = data.allDataJson.edges[0].node.preview;

  return (
    /*
      Send page data so HeaderComponent knows to use static content - data is passed to layout component which passes the data down to the header component
      Pass footer class to layout component which passes the class down to the footer component
    */
    <Layout headerData={{ page: 'index' }} footerClass={{ class: 'fixed' }}>
      <SEO title="Home" />
      <Home />
      {Object.keys(PreviewData).map(key => (
        <div key={key} id={PreviewData[key].class} className="panel">
          {/* Pass projects' preview data to ProjectPreview component */}
          <ProjectPreview data={PreviewData[key]} />
        </div>
      ))}
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
};

export default IndexPage;
