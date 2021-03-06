import styled from '@emotion/styled';

const HeaderContentStyled = styled.div`
  width: 100%;
  transform: translateY(100%);

  .project-header {
    height: 84px;
    margin: 0 -25px 25px;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translateX(-100%);
  }

  .rsc-header {
    background-color: #fedf2f;
  }

  .rsc-logo {
    width: 132px;
    height: 30.48px;
  }

  .iotga-header {
    background-color: #bb9847;
  }

  .iotga-logo {
    width: 133px;
    height: 24.55px;
    margin-top: 3px;
  }

  .wkmpg-header {
    background-color: #41a940;
  }

  .wkm-logo {
    width: 68px;
    height: 35.94px;
    margin-top: 1px;
  }

  .expat-header {
    background-color: #bc2224;
  }

  .expat-logo {
    width: 68px;
    height: 38.67px;
  }

  .about-header {
    background-color: #40afe9;
  }

  .fwm-logo {
    width: 140px;
    height: 17.33px;
    fill: #fff;
  }

  .wordpress-icon,
  .zend-icon,
  .vue-icon,
  .react-icon {
    width: 30px;
    height: 30px;
    fill: #fff;
    margin-top: 3px;
  }

  .zend-icon {
    margin-top: 5px;
  }

  section {
    max-width: 600px;
    margin: 0 auto;
  }

  section:not(:first-of-type) {
    border-top: 1px solid;
    padding-top: 10px;
  }

  section:not(:last-of-type) {
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.6rem;
    margin: 0 0 15px;
  }

  div.SVGInline {
    position: relative;
  }

  div.SVGInline .tooltip {
    visibility: hidden;
    width: 65px;
    background-color: #121415;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 0;
    margin-left: -15px;
  }

  div.SVGInline .tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #121415 transparent transparent transparent;
  }

  .project-header div.SVGInline .tooltip {
    bottom: -5px;
    margin-left: -80px;
  }

  .project-header div.SVGInline.wordpress-icon .tooltip,
  .project-header div.SVGInline.react-icon .tooltip {
    bottom: 10px;
    margin-left: -75px;
  }

  .project-header div.SVGInline.vue-icon .tooltip {
    bottom: 8px;
  }

  .project-header div.SVGInline .tooltip::after {
    top: 50%;
    left: 100%;
    margin-left: 0;
    margin-top: -5px;
    border-color: transparent transparent transparent #121415;
  }

  .SVGInline:hover .tooltip,
  .SVGInline:active .tooltip {
    visibility: visible;
  }

  div.html-icon .tooltip,
  div.css-icon .tooltip {
    margin-left: -18px;
  }

  div.gulp-icon .tooltip {
    margin-left: -20px;
  }

  div.sagepay-icon .tooltip {
    margin-left: -10px;
  }

  div.php-icon .tooltip,
  div.apache-icon .tooltip,
  div.nginx-icon .tooltip {
    bottom: 125%;
  }

  div.mysql-icon .tooltip {
    bottom: 120%;
    margin-left: -10px;
  }

  div.animejs-icon .tooltip,
  div.emotion-icon .tooltip {
    margin-left: -7px;
  }

  div.aws-icon .tooltip {
    margin-left: 0px;
  }

  div.contentful-icon .tooltip {
    margin-left: 20px;
  }

  div.vwo-icon .tooltip {
    margin-left: -10px;
  }

  div.asana-icon .tooltip {
    margin-left: 5px;
  }

  div.slack-icon .tooltip {
    margin-left: 0;
  }

  .html-icon,
  .css-icon,
  .js-icon,
  .jquery-icon,
  .ubuntu-icon,
  .gulp-icon,
  .azuredevops-icon,
  section:not(.home-section) .github-icon,
  .sourcetree-icon,
  .doctrine-icon,
  .gatsby-icon,
  .vscode-icon,
  .tag-manager-icon,
  .git-icon {
    width: 30px;
    height: 30px;

    svg {
      margin-right: 20px;

      &.html-icon,
      &.css-icon {
        margin-left: -3px;
        margin-right: 15px;
      }

      &.gulp-icon {
        margin-left: -8px;
        margin-right: 10px;
      }

      &.azuredevops-icon {
        position: relative;
        top: 2px;
      }
    }
  }

  section:not(.home-section) .github-icon {
    fill: #121415;

    .tooltip {
      display: block;
    }
  }

  .php-icon,
  .apache-icon,
  .nginx-icon {
    width: 40px;
    height: 40px;
  }

  .npm-icon {
    width: 40px;
    height: 40px;
    top: 7px;
    margin-top: -7px;

    svg {
      margin-right: 20px;
    }
  }

  .mysql-icon {
    width: 50px;
    height: 50px;
  }

  .php-icon,
  .mysql-icon,
  .apache-icon,
  .nginx-icon,
  .doctrine-icon {
    margin-bottom: -30px;
    position: relative;
    top: -10px;

    svg {
      margin-right: 20px;
    }
  }

  .doctrine-icon {
    top: -15px;
  }

  .sagepay-icon {
    width: 50px;
    height: 11.61px;

    svg {
      margin-right: 20px;
    }
  }

  .animejs-icon {
    width: 50px;
    height: 12px;
    position: relative;
    top: -2px;

    svg {
      margin-right: 12px;
      margin-left: -3px;
    }
  }

  .emotion-icon {
    width: 56px;
    height: 12.36px;
    position: relative;
    top: -2px;

    svg {
      margin-right: 0;
    }
  }

  .amplify-icon {
    width: 32px;
    height: 23.86px;
    position: relative;
    top: -1px;

    svg {
      margin-right: 20px;
    }
  }

  .aws-icon {
    width: 60px;
    height: 24px;
    position: relative;
    top: -1px;

    svg {
      margin-right: 20px;
    }
  }

  .contentful-icon {
    width: 100px;
    height: 24px;

    svg {
      margin-right: 20px;
    }
  }

  .vwo-icon {
    width: 45px;
    height: 30px;

    svg {
      margin-right: 20px;
    }
  }

  .asana-icon {
    width: 70px;
    height: 24px;

    svg {
      margin-right: 20px;
    }
  }

  .slack-icon {
    width: 60px;
    height: 24px;

    svg {
      margin-right: 20px;
    }
  }

  @media (min-width: 1200px) and (min-height: 620px) {
    section:last-of-type {
      border-bottom: 0;
      padding-bottom: 0;
    }
  }
`;

export default HeaderContentStyled;
