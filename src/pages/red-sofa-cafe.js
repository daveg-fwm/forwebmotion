import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import ProjectPreview from '../components/ProjectPreview';
import ProjectMain from '../components/ProjectMain';

const RedSofaCafe = ({ data }) => {
  const PreviewData = data.allDataJson.edges[0].node.preview.rsc;
  const MainData = data.allDataJson.edges[0].node.main.rsc;

  return (
    <>
      <SEO title="Red Sofa Cafe" />
      <div className="panel">
        {/* Pass rsc preview data to ProjectPreview component */}
        <ProjectPreview data={PreviewData} />
        {/* Pass rsc main data to ProjectMain component */}
        <ProjectMain data={MainData} />
      </div>
    </>
  );
};

// Fetch preview and main data for Red Sofa Cafe project from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          preview {
            rsc {
              class
              year
              type
              bannerImg
            }
          }
          main {
            rsc {
              type
              content
            }
          }
        }
      }
    }
  }
`;

RedSofaCafe.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RedSofaCafe;
