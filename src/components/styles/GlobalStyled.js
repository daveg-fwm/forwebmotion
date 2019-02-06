import { Global, css } from '@emotion/core';

const GlobalStyled = () => (
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
        font-size: 8px;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        padding: 0;
        margin: 0;
        font-size: 2.2rem;
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

      @keyframes active-click {
        0% {
          font-weight: inherit;
        }
        100% {
          font-weight: 700;
        }
      }

      a {
        outline: 0;
        color: #40afe9;
        transition: font-weight 0.2s;

        &:link,
        &:visited {
          font-weight: inherit;
        }

        &:hover {
          font-weight: 700;
        }

        &:active {
          animation: active-click 0.2s 1;
        }
      }

      button {
        cursor: pointer;
      }

      a,
      button {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }

      /* Set pointer-events to none so title doesn't show on hover */
      svg {
        pointer-events: none;
      }

      /* All anchor tags that wrap svgs need to take up the full width and height due to no pointer events on svgs */
      .a-svg {
        display: block;
      }

      p {
        margin: 0 0 20px;

        a {
          text-decoration: none;
        }
      }

      .a-svg-txt {
        position: relative;
        top: -2px;
        margin-left: 10px;
      }

      .right-arrow-link {
        display: inline-flex;
        align-items: center;
      }

      .right-arrow-link .a-svg-txt {
        margin-left: 25px;
      }

      @media (min-width: 400px) {
        html {
          font-size: 10px;
        }
      }
    `}
  />
);

export default GlobalStyled;
