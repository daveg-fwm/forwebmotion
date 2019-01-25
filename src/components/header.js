import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import anime from 'animejs';
import { HeaderPanelStyled, NavButtonStyled } from './styles/HeaderPanelStyled';
import { FWMIcon } from './svg/InlineSVG';
import HeaderContent from './HeaderContent';

class Header extends React.Component {
  static propTypes = {
    menuLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
    data: PropTypes.object.isRequired,
  };

  state = {
    showMenu: false,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    // Create a ref for the HeaderContent component - value passed up to this Header component via props
    headerContentRef: React.createRef(),
  };

  // Create a ref for the nav element
  navRef = React.createRef();

  componentDidMount = () => {
    const { headerContentRef } = this.state;

    // Animate HeaderContent component in
    anime({
      targets: headerContentRef.current,
      translateY: () => ['-100%', '0%'],
      easing: 'easeOutCubic',
      duration: 500,
    });

    window.addEventListener('resize', this.updateSize);
  };

  // Prevent memory leaks
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateSize);
  };

  // Animation values vary depending on window size
  updateSize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  // Toggle showMenu state to open/close nav menu
  toggleNav = () => {
    const { showMenu } = this.state;

    this.setState({ showMenu: !showMenu });

    // Animate nav menu open/close
    anime({
      targets: this.navRef.current,
      translateY: () => {
        if (!showMenu) {
          return ['-100%', '0%'];
        }
        // Menu is closed
        return ['0%', '-100%'];
      },
      easing: 'easeOutCubic',
      duration: 500,
    });
  };

  hideContent = () => {
    const { showMenu, headerContentRef } = this.state;
    const delay = showMenu ? 500 : 0;

    // Close nav menu if it's open
    if (showMenu) this.toggleNav();

    // Hide HeaderContent component
    anime({
      targets: headerContentRef.current,
      translateY: () => ['0%', '-100%'],
      easing: 'easeOutCubic',
      duration: 500,
      delay,
    });
  };

  render() {
    const { menuLinks, data } = this.props;
    const { headerContentRef } = this.state;

    return (
      <HeaderPanelStyled>
        <div className="header-panel-inner" ref={this.headerRef}>
          <div className="top-nav">
            <a
              href="/"
              className="a-svg"
              onClick={e => {
                e.preventDefault();

                // Only call functions if link does not match current page
                if (window.location.pathname !== '/') {
                  this.hideContent();
                  setTimeout(() => navigate('/'), 1000);
                }
              }}
            >
              <FWMIcon />
            </a>
            <NavButtonStyled type="button" onClick={this.toggleNav}>
              <span />
              <span />
              <span />
            </NavButtonStyled>
          </div>

          <div className="header-content-container">
            {/*
              Send data from layout to populate content for this component - no data for index page as content structure for header is different to other pages so edit directly in component
            */}
            <HeaderContent data={data} headerContentRef={headerContentRef} />

            <nav ref={this.navRef}>
              <ul>
                {/* menuLinks contains page link data - received from Layout component */}
                {menuLinks.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className={
                        window.location.pathname === item.link ? 'active' : null
                      }
                      onClick={e => {
                        e.preventDefault();

                        // Only call functions if link does not match current page
                        if (window.location.pathname !== item.link) {
                          this.hideContent();
                          setTimeout(() => navigate(`${item.link}`), 1000);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </HeaderPanelStyled>
    );
  }
}

export default Header;
