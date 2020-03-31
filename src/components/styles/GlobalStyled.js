import { Global, css } from '@emotion/core';
import {
  OpenSansLightWoff,
  OpenSansLightWoff2,
  OpenSansRegularWoff,
  OpenSansRegularWoff2,
  OpenSansSemiBoldWoff,
  OpenSansSemiBoldWoff2,
  OpenSansBoldWoff,
  OpenSansBoldWoff2,
} from './fonts/fonts';

const GlobalStyled = () => (
  <Global
    styles={css`
      /* open-sans-300 - latin */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        font-display: auto;
        src: local('Open Sans Light'), local('OpenSans-Light'),
          /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${OpenSansLightWoff2})
            format('woff2'),
          /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            url(${OpenSansLightWoff}) format('woff');
      }

      /* open-sans-regular - latin */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: auto;
        src: local('Open Sans Regular'), local('OpenSans-Regular'),
          /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${OpenSansRegularWoff2})
            format('woff2'),
          /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            url(${OpenSansRegularWoff}) format('woff');
      }

      /* open-sans-600 - latin */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-display: auto;
        src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
          /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${OpenSansSemiBoldWoff2})
            format('woff2'),
          /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            url(${OpenSansSemiBoldWoff}) format('woff');
      }

      /* open-sans-700 - latin */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-display: auto;
        src: local('Open Sans Bold'), local('OpenSans-Bold'),
          /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${OpenSansBoldWoff2})
            format('woff2'),
          /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            url(${OpenSansBoldWoff}) format('woff');
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

      @keyframes showContent {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      body {
        padding: 0;
        margin: 0;
        font-size: 2.2rem;
        line-height: 1.5;
        font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 300;
        color: #121415;
        background-color: #f2f2f2;
        opacity: 0;
        animation: showContent 0.5s forwards;

        @media (max-width: 600px) {
          font-size: 1.8rem;
        }
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

      .right-arrow-link,
      .left-arrow-link {
        display: inline-flex;
        align-items: center;
      }

      .right-arrow-link .a-svg-txt,
      .left-arrow-link .a-svg-txt {
        margin-left: 25px;
      }

      .full-img-popup {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        opacity: 0;
        transition: opacity 0.3s;

        div {
          width: calc(100% - 20px);
          max-width: 1000px;
          max-height: 90%;
          padding: 40px;
          background-color: #fff;
          border-radius: 3px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          @media (max-width: 1024px) {
            padding: 40px 20px;
          }

          .full-img-popup-close-btn {
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            background-color: transparent;
            border: 0;

            &:focus {
              outline: 0;
            }

            span {
              display: block;
              width: 16px;
              height: 2px;
              background-color: #40afe9;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;

              &:first-of-type {
                transform: rotate(45deg);
              }

              &:last-of-type {
                transform: rotate(-45deg);
              }
            }
          }

          img {
            width: 100%;
          }
        }
      }
    `}
  />
);

export default GlobalStyled;
