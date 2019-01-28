import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  HomePanelStyled,
  ButtonStyled,
} from '../components/styles/HomePanelStyled';
import { FWMLogo } from '../components/svg/InlineSVG';
import Project from '../components/Project';

const IndexPage = ({ data }) => {
  const PreviewData = data.allDataJson.edges[0].node.preview;

  return (
    /*
      Send page data so HeaderComponent knows to use static content - data is passed to layout component which passes the data down to the header component
      Pass footer class to layout component which passes the class down to the footer component
    */
    <Layout headerData={{ page: 'index' }} footerClass={{ class: 'fixed' }}>
      <SEO title="Home" />

      {/* First panel on homepage */}
      <div className="hide-panel">
        <HomePanelStyled className="panel">
          <FWMLogo />
          <h1>A Web Developer's journey.</h1>
          <p>
            Everything we learn today is but a stepping stone to what we will
            learn tomorrow.
          </p>
          <ButtonStyled>The journey so far</ButtonStyled>
        </HomePanelStyled>
      </div>

      {/* Pass projects' preview data to Project component */}
      <Project PreviewData={PreviewData} />
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
