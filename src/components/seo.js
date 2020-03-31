import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import socialImage from '../images/fwm-social-31032020.jpg';

function SEO({ description, lang, meta, keywords, title }) {
  const detailsQuery = graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'robots',
                content: 'index, follow',
              },
              {
                name: 'description',
                content: metaDescription,
              },
              {
                name: 'google-site-verification',
                content: 'fjKffniQK2PDHcjBxzegtapV74Tv2HPsMTpWlHbIMn4',
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:image',
                content: `${socialImage}`,
              },
              {
                property: 'og:image:type',
                content: 'image/jpeg',
              },
              {
                property: 'og:image:width',
                content: '1200',
              },
              {
                property: 'og:image:height',
                content: '582',
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: 'twitter:image',
                content: `${socialImage}`,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [
    'forwebmotion',
    'fwm',
    'forward motion',
    'web developer',
    'frontend',
    'frontend developer',
    'front-end',
    'front-end developer',
    'javascript',
    'javascript developer',
    'react developer',
    'reactjs developer',
    'vue developer',
    'vuejs developer',
    'php',
    'php developer',
    'zend developer',
    'portfolio',
    'David Green',
    'Dave Green',
  ],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
