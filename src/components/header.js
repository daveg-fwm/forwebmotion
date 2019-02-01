import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
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
    locationPathname: PropTypes.string.isRequired,
    headerContentContainerRef: PropTypes.object.isRequired,
    headerContentRef: PropTypes.object.isRequired,
    navRef: PropTypes.object.isRequired,
    toggleNav: PropTypes.func.isRequired,
    animateExit: PropTypes.func.isRequired,
  };

  render() {
    const {
      menuLinks,
      data,
      locationPathname,
      headerContentContainerRef,
      headerContentRef,
      navRef,
      toggleNav,
      animateExit,
    } = this.props;

    return (
      <HeaderPanelStyled>
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
                  setTimeout(() => navigate('/'), 1000);
                }
              }}
            >
              <FWMIcon />
            </a>
            <NavButtonStyled type="button" onClick={() => toggleNav()}>
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
              <HeaderContent data={data} />
            </div>

            <nav ref={navRef}>
              <ul>
                {/* menuLinks contains page link data - received from Layout component */}
                {menuLinks.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className={
                        locationPathname === item.link ? 'active' : null
                      }
                      onClick={e => {
                        e.preventDefault();

                        // Only call functions if link does not match current page
                        if (locationPathname !== item.link) {
                          animateExit();
                          setTimeout(() => navigate(item.link), 1000);
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
