import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const RedSofaCafe = ({ data }) => {
  const Data = data.allDataJson.edges[0].node.rsc;

  return (
    <Layout>
      <SEO title="Red Sofa Cafe" />
      {/* pass data to Project component */}
      <Project data={Data} />
    </Layout>
  );
};

// fetch data for Red Sofa Cafe project from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          rsc {
            name
            color
            year
            type
            link
            bannerImg
            preview
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
