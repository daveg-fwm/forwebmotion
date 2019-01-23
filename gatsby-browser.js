/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import Layout from './src/components/layout';

/*
  Page transition and transitionDelay:
  Exit and enter transitions run simultaneously for 500ms
  After transitionDelay, page scrolls to top if url has no hash otherwise scrolls to top of project div minus offset
*/
const transitionDelay = 0;

// Layout doesn't unmount on page change
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    let y = 0;

    /*
      If there is a hash in the url scroll to the top of the project div minus an offset.
      Offset matches top padding of main element.
    */
    if (location.hash !== '') {
      const id = location.hash.substr(1);
      let offset = 40;

      if (window.innerWidth < 1200) {
        offset = 125;
      } else if (window.innerHeight >= 620 && window.innerHeight < 660) {
        offset = 20;
      } else if (window.innerHeight < 620) {
        offset = 125;
      }

      y = document.getElementById(id).offsetTop - offset;
    }
    window.scrollTo(0, y);
    // window.setTimeout(() => window.scrollTo(0, y), transitionDelay);
  } else {
    // Scroll to last position when user refreshes the page
    const savedPosition = getSavedScrollPosition(location);
    return window.scrollTo(...(savedPosition || [0, 0]));
    // window.setTimeout(
    //   () => window.scrollTo(...(savedPosition || [0, 0])),
    //   transitionDelay
    // );
  }
  return false;
};
