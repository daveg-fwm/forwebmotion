import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const WkmPaymentGateway = ({ data }) => {
  const Data = data.allDataJson.edges[0].node.wkmpg;

  return (
    <Layout>
      <SEO title="WKM Payment Gateway" />
      <Project data={Data} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
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

WkmPaymentGateway.propTypes = {
  data: PropTypes.object,
};

export default WkmPaymentGateway;
