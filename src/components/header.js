import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';
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

  componentDidMount = () => {
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

  closeNav = () => {
    // Nav links and logo set showMenu state to false to close nav menu
    this.setState({ showMenu: false });
  };

  render() {
    const { menuLinks, data } = this.props;
    const { showMenu, windowWidth, windowHeight } = this.state;

    return (
      <HeaderPanelStyled>
        <div className="header-panel-inner">
          <div className="top-nav">
            <Link className="a-svg" to="/" onClick={this.closeNav}>
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
                    <TransitionLink
                      activeClassName="active"
                      to={item.link}
                      exit={{
                        length: 1,
                      }}
                      entry={{
                        delay: 0.6,
                      }}
                      onClick={this.closeNav}
                    >
                      {item.name}
                    </TransitionLink>
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
