import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
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
  };

  toggleNav = () => {
    this.setState(state => ({
      // Menu button toggles showMenu state to open/close nav menu
      showMenu: !state.showMenu,
    }));
  };

  render() {
    const { menuLinks, data } = this.props;
    const { showMenu } = this.state;

    return (
      <HeaderPanelStyled>
        <div className="header-panel-inner">
          <div className="top-nav">
            <Link className="a-svg" to="/">
              <FWMIcon />
            </Link>
            <NavButtonStyled type="button" onClick={this.toggleNav}>
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
            <HeaderContent data={data} />

            <nav>
              <ul>
                {/* menuLinks contains page link data - received from Layout component */}
                {menuLinks.map(item => (
                  <li key={item.name}>
                    <Link to={item.link} activeClassName="active">
                      {item.name}
                    </Link>
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
