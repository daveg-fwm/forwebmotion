import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';
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
  };

  // Create a ref for the header-panel-inner div
  headerRef = React.createRef();

  componentDidMount = () => {
    // Point to HeaderContent component
    const headerContentRef = this.headerRef.current.children[1].children[0];

    // Show HeaderContent component
    anime({
      targets: headerContentRef,
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

  toggleNav = () => {
    this.setState(state => ({
      // Menu button toggles showMenu state to open/close nav menu
      showMenu: !state.showMenu,
    }));
  };

  hideContent = () => {
    // Point to HeaderContent component
    const headerContentRef = this.headerRef.current.children[1].children[0];

    // Close nav menu
    this.setState({ showMenu: false });

    // Hide HeaderContent component
    anime({
      targets: headerContentRef,
      translateY: () => ['0%', '-100%'],
      easing: 'easeOutCubic',
      duration: 500,
      delay: 500,
    });
  };

  render() {
    const { menuLinks, data } = this.props;
    const { showMenu, windowWidth, windowHeight } = this.state;

    return (
      <HeaderPanelStyled>
        <div className="header-panel-inner" ref={this.headerRef}>
          <div className="top-nav">
            <Link className="a-svg" to="/">
              <FWMIcon />
            </Link>
            <NavButtonStyled
              type="button"
              className={showMenu ? 'open' : 'close'}
              onClick={this.toggleNav}
            >
              <span />
              <span />
              <span />
            </NavButtonStyled>
          </div>

          <div
            className={`header-content-container ${
              showMenu ? 'enter' : 'exit'
            }`}
          >
            {/*
              Send data from layout to populate content for this component - no data for index page as content structure for header is different to other pages so edit directly in component
            */}
            <HeaderContent
              data={data}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
            />

            <nav>
              <ul>
                {/* menuLinks contains page link data - received from Layout component */}
                {menuLinks.map(item => (
                  <li key={item.name}>
                    <a
                      onClick={() => {
                        this.hideContent();
                        setTimeout(() => navigate(`${item.link}`), 1000);
                      }}
                      onKeyUp={() => {
                        this.hideContent();
                        setTimeout(() => navigate(`${item.link}`), 1000);
                      }}
                      role="link"
                      tabIndex="0"
                      className={
                        window.location.pathname === item.link ? 'active' : null
                      }
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
