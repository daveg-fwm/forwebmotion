import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { HeaderContentStyled, ArrowStyled } from './styles/HeaderPanelStyled';
import {
  GitHubIcon,
  RSCLogo,
  IOTGALogo,
  WKMLogo,
  HTMLIcon,
  CSSIcon,
  JSIcon,
  JQueryIcon,
  PHPIcon,
  MySQLIcon,
  UbuntuIcon,
  ApacheIcon,
  NginxIcon,
  GulpIcon,
  AzureDevOpsIcon,
  SourceTreeIcon,
  DoctrineIcon,
  SagePayIcon,
  WordPressIcon,
  ZendIcon,
} from './svg/InlineSVG';

class HeaderContent extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      class: PropTypes.string,
      logo: PropTypes.string,
      appIcon: PropTypes.string,
      techStack: PropTypes.object,
    }).isRequired,
  };

  components = {
    RSCLogo,
    IOTGALogo,
    WKMLogo,
    HTMLIcon,
    CSSIcon,
    JSIcon,
    JQueryIcon,
    PHPIcon,
    MySQLIcon,
    UbuntuIcon,
    ApacheIcon,
    NginxIcon,
    GulpIcon,
    AzureDevOpsIcon,
    GitHubIcon,
    SourceTreeIcon,
    DoctrineIcon,
    SagePayIcon,
    WordPressIcon,
    ZendIcon,
  };

  render() {
    const { data } = this.props;
    // Create component to display logo dynamically
    const Logo = this.components[data.logo];
    // Create component to display app icon dynamically
    const AppIcon = this.components[data.appIcon];

    // Header content on homepage is static and structured differently to other pages - only index.js sends page data
    if ('page' in data) {
      return (
        <div className="header-content">
          <p>
            Currently my focus is on JavaScript. I've recently completed courses
            on ES6 and React. This site was built with React and represents my
            progress so far.
          </p>
          <a
            className="a-svg"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span className="a-svg-txt">Forwebmotion repo</span>
          </a>
          <Link to="/about" className="right-arrow-link">
            <ArrowStyled className="right-arrow">
              <span />
              <span />
            </ArrowStyled>
            <span className="a-svg-txt">More on forwebmotion</span>
          </Link>
        </div>
      );
    }

    // Header content is populated using data received from pages
    return (
      <HeaderContentStyled className="header-content">
        <div className={`project-header ${data.class}`}>
          <Logo />
          {data.appIcon !== 'static' ? <AppIcon /> : null}
        </div>

        {// Cycle through tech stack object to get stack layer eg: frontEnd
        Object.keys(data.techStack).map(type => (
          <section key={type}>
            {// Cycle through stack layer object to display layer title and icons
            Object.keys(data.techStack[type]).map(item => {
              if (item === 'title') {
                return (
                  <h2 key={data.techStack[type][item]}>
                    {data.techStack[type][item]}
                  </h2>
                );
              }

              // Create component to display icon dynamically
              const Icon = this.components[data.techStack[type][item]];
              return <Icon key={data.techStack[type][item]} />;
            })}
          </section>
        ))}
      </HeaderContentStyled>
    );
  }
}

export default HeaderContent;
