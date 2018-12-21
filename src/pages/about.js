import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ data }) => {
  const Data = data.allDataJson.edges[0].node.iotga;

  return (
    <Layout>
      <SEO title="About forwebmotion" />
      <div>About me and this site</div>
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

About.propTypes = {
  data: PropTypes.object,
};

export default About;
