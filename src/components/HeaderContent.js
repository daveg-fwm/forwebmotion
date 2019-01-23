import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
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
    windowWidth: PropTypes.number.isRequired,
    windowHeight: PropTypes.number.isRequired,
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
    const { data, windowWidth, windowHeight } = this.props;
    // Create component to display logo dynamically
    const Logo = this.components[data.logo];
    // Create component to display app icon dynamically
    const AppIcon = this.components[data.appIcon];

    // Content pages use a styled component while the index page uses a div
    const posedElement =
      data.class === 'index' ? posed.div : posed(HeaderContentStyled);

    // Animate header content - y: '0vh' = transform: translateY('0vh')
    let enter = {
      y: '0vh',
      transition: {
        duration: 500,
      },
      delay: 100,
    };

    let exit = {
      y: '-100vh',
      transition: {
        duration: 500,
      },
    };

    // Remove animation when header content is hidden (nav menu button reveals navigation and header content)
    if (windowWidth < 1200 || windowHeight < 620) {
      enter = {};
      exit = {};
    }

    // Animate the header content
    const HeaderContentPosed = posedElement({
      enter,
      exit,
    });

    // Header content on homepage is static and structured differently to other pages
    if (data.class === 'index') {
      return (
        <PoseGroup>
          <HeaderContentPosed key={data.class} className="header-content">
            <p>
              Currently my focus is on JavaScript. I've recently completed
              courses on ES6 and React. This site was built with React and
              represents my progress so far.
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
          </HeaderContentPosed>
        </PoseGroup>
      );
    }

    // Header content is populated using data received from layout component
    return (
      <PoseGroup>
        <HeaderContentPosed key={data.class} className="header-content">
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
        </HeaderContentPosed>
      </PoseGroup>
    );
  }
}

export default HeaderContent;
