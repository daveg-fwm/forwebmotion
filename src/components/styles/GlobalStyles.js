import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      /* open-sans-300 - latin */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        src: local('Open Sans Light'), local('OpenSans-Light'),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../../../static/fonts/open-sans-v15-latin-300.woff2')
            format('woff2'),
          /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            url('../../../static/fonts/open-sans-v15-latin-300.woff')
            format('woff');
      }

      /* open-sans-regular - latin */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Open Sans Regular'), local('OpenSans-Regular'),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../../../static/fonts/open-sans-v15-latin-regular.woff2')
            format('woff2'),
          /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            url('../../../static/fonts/open-sans-v15-latin-regular.woff')
            format('woff');
      }

      /* open-sans-600 - latin */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../../../static/fonts/open-sans-v15-latin-600.woff2')
            format('woff2'),
          /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            url('../../../static/fonts/open-sans-v15-latin-600.woff')
            format('woff');
      }

      /* open-sans-700 - latin */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        src: local('Open Sans Bold'), local('OpenSans-Bold'),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../../../static/fonts/open-sans-v15-latin-700.woff2')
            format('woff2'),
          /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            url('../../../static/fonts/open-sans-v15-latin-700.woff')
            format('woff');
      }

      html {
        box-sizing: border-box;
        font-size: 10px;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 1.5;
        font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 300;
        color: #121415;
        background-color: #f9f9f9;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      main,
      menu,
      nav,
      section,
      summary {
        display: block;
      }

      input:focus,
      select:focus,
      textarea:focus,
      button:focus,
      [contenteditable='true']:focus {
        outline: 0;
      }

      a:not(.a-svg) {
        outline: 0;
        color: #40afe9;
        font-weight: 400;
        text-decoration: none;
      }

      button {
        cursor: pointer;
      }

      /* set pointer-events to none so title doesn't show on hover */
      svg {
        pointer-events: none;
      }

      /* all anchor tags that wrap svgs need to take up the full width and height due to no pointer events on svgs */
      .a-svg {
        display: inline-block;
      }
    `}
  />
);

export default GlobalStyles;
