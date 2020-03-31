import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const IOTGABannerFull = ({ mainBannerClass }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "iotga-banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="IoT Global Awards project"
        className={`banner${
          mainBannerClass !== undefined ? ` ${mainBannerClass}` : ''
        }`}
      />
    )}
  />
);

IOTGABannerFull.propTypes = {
  mainBannerClass: PropTypes.string,
};

export default IOTGABannerFull;