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
  AnimeJSIcon,
  GatsbyIcon,
  AmplifyIcon,
  EmotionIcon,
  GitIcon,
  AWSIcon,
  VSCodeIcon,
  ReactIcon,
  FWMLogo,
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
    AnimeJSIcon,
    GatsbyIcon,
    AmplifyIcon,
    EmotionIcon,
    GitIcon,
    AWSIcon,
    VSCodeIcon,
    ReactIcon,
    FWMLogo,
  };

  render() {
    const { data } = this.props;
    // Create component to display logo dynamically
    const Logo = this.components[data.logo];
    // Create component to display app icon dynamically
    const AppIcon = this.components[data.appIcon];

    // Header content on homepage is static and structured differently to other pages
    if ('page' in data) {
      return (
        <HeaderContentStyled className="header-content">
          <section className="home-section">
            <p>
              Everything we learn today is but a stepping stone to what we will
              learn tomorrow.
            </p>
            <p>
              Check out the links below to find out what I'm learning today.
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
          </section>
        </HeaderContentStyled>
      );
    }

    // Header content is populated using data received from layout component
    return (
      <HeaderContentStyled className="header-content">
        <div className={`project-header ${data.class}`}>
          <Logo />
          {data.appIcon !== 'static' ? <AppIcon /> : null}
        </div>

        {// Cycle through tech stack object to get stack layers eg: frontEnd, backEnd
        Object.keys(data.techStack).map(layer => (
          <section key={layer}>
            {// Cycle through stack layer object to display layer title and icons
            Object.keys(data.techStack[layer]).map(item => {
              if (item === 'title') {
                return (
                  <h2 key={data.techStack[layer][item]}>
                    {data.techStack[layer][item]}
                  </h2>
                );
              }

              // Create component to display icon dynamically
              const Icon = this.components[data.techStack[layer][item]];
              return <Icon key={data.techStack[layer][item]} />;
            })}
          </section>
        ))}
      </HeaderContentStyled>
    );
  }
}

export default HeaderContent;
