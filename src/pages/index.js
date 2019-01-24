import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import SEO from '../components/seo';
import ProjectPreview from '../components/ProjectPreview';
import Home from '../components/Home';

const IndexPage = ({ data }) => {
  const PreviewData = data.allDataJson.edges[0].node.preview;

  const Transition = posed.div({
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  });

  return (
    <>
      <SEO title="Home" />
      <Home />
      {Object.keys(PreviewData).map(key => (
        <Transition key={key} id={PreviewData[key].class} className="panel">
          {/* Pass projects' preview data to ProjectPreview component */}
          <ProjectPreview data={PreviewData[key]} />
        </Transition>
      ))}
    </>
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
