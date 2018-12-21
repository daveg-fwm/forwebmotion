import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const IotGlobalAwards = ({ data }) => {
  const Data = data.allDataJson.edges[0].node.iotga;

  return (
    <Layout>
      <SEO title="IoT Global Awards" />
      <Project data={Data} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          iotga {
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

IotGlobalAwards.propTypes = {
  data: PropTypes.object,
};

export default IotGlobalAwards;
