import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';
import Home from '../components/Home';

const IndexPage = ({ data }) => {
  const ProjectsData = data.allDataJson.edges[0].node.projects;

  return (
    /*
      Send page data so HeaderComponent knows to use static content - data is passed to layout component which passes the data down to the header component
      Pass footer class to layout component which passes the class down to the footer component
    */
    <Layout headerData={{ page: 'index' }} footerClass={{ class: 'fixed' }}>
      <SEO title="Home" />
      <Home />
      {Object.keys(ProjectsData).map(key => (
        // Pass projects' preview data to Project component
        <Project key={key} data={ProjectsData[key]} />
      ))}
    </Layout>
  );
};

// Fetch all data for project previews from src/data/projects.json
export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          projects {
            rsc {
              name
              class
              year
              type
              link
              bannerImg
              preview
            }
            iotga {
              name
              class
              year
              type
              link
              bannerImg
              preview
            }
            wkmpg {
              name
              class
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
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
