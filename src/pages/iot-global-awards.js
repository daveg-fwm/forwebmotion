import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import ProjectPreview from '../components/ProjectPreview';
import ProjectMain from '../components/ProjectMain';

const IotGlobalAwards = ({ data }) => {
  const PreviewData = data.allDataJson.edges[0].node.preview.iotga;
  const MainData = data.allDataJson.edges[0].node.main.iotga;

  return (
    <>
      <SEO title="IoT Global Awards" />
      <div className="panel">
        {/* Pass iotga preview data to ProjectPreview component */}
        <ProjectPreview data={PreviewData} />
        {/* Pass iotga main data to ProjectMain component */}
        <ProjectMain data={MainData} />
      </div>
    </>
  );
};

// Fetch preview and main data for IoT Global Awards project from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
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
