import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import {
  HeaderPanelStyled,
  NavButtonStyled,
  ArrowStyled,
} from './styles/HeaderPanelStyled';
import { FWMIcon } from './svg/InlineSVG';
import HeaderContent from './HeaderContent';

class Header extends React.Component {
  static propTypes = {
    scrollMenu: PropTypes.bool.isRequired,
    menuLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
    data: PropTypes.object.isRequired,
    locationPathname: PropTypes.string.isRequired,
    headerContentContainerRef: PropTypes.object.isRequired,
    headerContentRef: PropTypes.object.isRequired,
    navRef: PropTypes.object.isRequired,
    navButtonRef: PropTypes.object.isRequired,
    toggleNav: PropTypes.func.isRequired,
    animateExit: PropTypes.func.isRequired,
  };

  render() {
    const {
      scrollMenu,
      menuLinks,
      data,
      locationPathname,
      headerContentContainerRef,
      headerContentRef,
      navRef,
      navButtonRef,
      toggleNav,
      animateExit,
    } = this.props;

    return (
      <HeaderPanelStyled className={scrollMenu ? 'scroll' : 'no-scroll'}>
        <div className="header-panel-inner">
          <div className="top-nav">
            <a
              href="/"
              className="a-svg"
              onClick={e => {
                e.preventDefault();

                // Only call functions if link does not match current page
                if (locationPathname !== '/') {
                  animateExit();
                  setTimeout(() => navigate('/?cl=true'), 1000);
                }
              }}
            >
              <FWMIcon />
            </a>
            <NavButtonStyled
              type="button"
              aria-label="Toggle navigation menu"
              aria-labelledby="nav-menu"
              ref={navButtonRef}
              onClick={() => toggleNav()}
            >
              <span />
              <span />
              <span />
            </NavButtonStyled>
          </div>

          <div
            className="header-content-container"
            ref={headerContentContainerRef}
          >
            <div className="hide-panel" ref={headerContentRef}>
              {/* Send data from layout to populate content for this component */}
              <HeaderContent data={data} animateExit={animateExit} />
            </div>

            <nav id="nav-menu" ref={navRef}>
              <ul>
                {/* menuLinks contains page link data - received from Layout component */}
                {menuLinks.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className={`right-arrow-link ${
                        locationPathname === item.link ? 'active' : null
                      }`}
                      onClick={e => {
                        e.preventDefault();

                        // Only call functions if link does not match current page
                        if (locationPathname !== item.link) {
                          animateExit();
                          setTimeout(
                            () => navigate(`${item.link}?cl=true`),
                            1000
                          );
                        }
                      }}
                    >
                      <ArrowStyled className="right-arrow">
                        <span />
                        <span />
                      </ArrowStyled>
                      <span className="a-svg-txt">{item.name}</span>
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
