import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import ProjectPreview from '../components/ProjectPreview';
import ProjectMain from '../components/ProjectMain';

const WkmPaymentGateway = ({ data }) => {
  const PreviewData = data.allDataJson.edges[0].node.preview.wkmpg;
  const MainData = data.allDataJson.edges[0].node.main.wkmpg;

  return (
    <>
      <SEO title="WKM Payment Gateway" />
      <div className="panel">
        {/* Pass wkmpg preview data to ProjectPreview component */}
        <ProjectPreview data={PreviewData} />
        {/* Pass wkmpg main data to ProjectMain component */}
        <ProjectMain data={MainData} />
      </div>
    </>
  );
};

// Fetch preview and main data for WKM Payment Gateway project from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
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
