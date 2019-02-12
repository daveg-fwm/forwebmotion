import styled from '@emotion/styled';
import { OpenSansLightWoff, OpenSansLightWoff2 } from './fonts/fonts';

const LoadingStyled = styled.div`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Open Sans Light'), local('OpenSans-Light'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${OpenSansLightWoff2})
        format('woff2'),
      /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        url(${OpenSansLightWoff}) format('woff');
  }

  @-webkit-keyframes animate-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes animate-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  position: fixed;
  background-color: #fff;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 1.5;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
  color: #121415;
  padding: 0 20px;
  box-sizing: border-box;
  opacity: 1;
  animation: animate-out 1s 12s forwards;

  p {
    text-align: center;
    opacity: 0;
  }

  @keyframes animate-in-out-p {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  p:first-of-type {
    width: calc(100% - 40px);
    position: absolute;
    margin-top: -20px;
    animation: animate-in-out-p 5s 1s forwards;
  }

  @keyframes animate-in-out-svg-p {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  p:last-of-type {
    font-size: 1.2em;
    animation: animate-in-out-svg-p 3.5s 7s forwards;
  }

  .fwm-logo {
    width: 100%;
    height: auto;
    max-width: 370px;
    max-height: 45.8px;
  }

  span.fwm-logo {
    display: block;
    opacity: 0;
    margin: -20px 0 12px;
    animation: animate-in-out-svg-p 4s 6s forwards;
  }
`;

export default LoadingStyled;
