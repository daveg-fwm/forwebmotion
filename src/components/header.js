import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { HeaderPanel, NavButton } from './styles/HeaderPanel';
import { FWMIcon } from './svg/InlineSVG';
import AnimateRaf from './AnimateRaf';

class Header extends React.Component {
  static propTypes = {
    menuLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  state = {
    showMenu: false,
    active: false,
  };

  toggleNav = () => {
    this.setState(state => ({
      // menu button toggles showMenu state to open/close nav menu and sets animated element to active
      showMenu: !state.showMenu,
      active: true,
    }));
  };

  render() {
    const { menuLinks } = this.props;
    const { showMenu, active } = this.state;
    // give AnimateRaf the enter class to open menu and exit class to close menu
    const menuClass = showMenu ? 'enter' : 'exit';

    return (
      <HeaderPanel>
        <div>
          <div className="top-nav">
            <Link className="a-svg" to="/">
              <FWMIcon />
            </Link>
            <NavButton type="button" onClick={this.toggleNav}>
              <span />
              <span />
              <span />
            </NavButton>
          </div>
          <AnimateRaf
            El="nav"
            // prevent animation until NavButton is clicked by assigning inactive class
            elClass={active ? menuClass : 'inactive'}
            // always leave out parentheses if a property is used!!!
            enter={{
              animation: 'transform',
              animProperty: 'translateY',
              start: -100,
              stop: 0,
              unit: '%',
              timing: 3,
            }}
            exit={{
              animation: 'transform',
              animProperty: 'translateY',
              start: 0,
              stop: -100,
              unit: '%',
              timing: 3,
            }}
          >
            <ul>
              {/* menuLinks contains page link data - received from Layout component */}
              {menuLinks.map(item => (
                <li key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </AnimateRaf>
        </div>
      </HeaderPanel>
    );
  }
}

export default Header;
