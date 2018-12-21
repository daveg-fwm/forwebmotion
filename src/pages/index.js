import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';
import Home from '../components/Home';

const IndexPage = ({ data }) => {
  const Data = data.allDataJson.edges[0].node;

  return (
    <Layout>
      <SEO title="Home" />
      <Home />
      {Object.keys(Data).map(key => (
        <Project key={key} data={Data[key]} />
      ))}
    </Layout>
  );
};

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
          iotga {
            name
            color
            year
            type
            link
            bannerImg
            preview
          }
          wkmpg {
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

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
