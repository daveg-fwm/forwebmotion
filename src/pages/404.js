import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../components/NotFound';

const NotFoundPage = ({ location }) => (
  /*
      Send page data so HeaderComponent knows to use static content - data is passed to layout component which passes the data down to the header component.
      Location is used to determine the current page - passed to layout component which passes the data down to the header component.
      Pass footer class to layout component which passes the class down to the footer component.
    */
  <Layout
    headerData={{ page: '404' }}
    footerClass={{ class: 'fixed' }}
    location={location}
  >
    <SEO title="404: Not Found" />
    <NotFound />
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
