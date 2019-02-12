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

const RSCBanner = ({ mainBannerClass }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "rsc-banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Red Sofa Cafe project"
        className={`banner${
          mainBannerClass !== undefined ? ` ${mainBannerClass}` : ''
        }`}
      />
    )}
  />
);

RSCBanner.propTypes = {
  mainBannerClass: PropTypes.string,
};

export default RSCBanner;
