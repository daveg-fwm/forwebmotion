import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import anime from 'animejs';
import { HeaderPanel, NavButton } from './styles/HeaderPanel';
import FWMIcon from './svg/FWMIcon';

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
  };

  // create a ref for the element to be animated
  navRef = React.createRef();

  componentDidUpdate() {
    const { showMenu } = this.state;

    this.animeRef = anime({
      targets: this.navRef.current,
      translateY: () => {
        if (showMenu) {
          return ['-100%', '0%'];
        }
        // menu is closed
        return ['0%', '-100%'];
      },
      easing: 'easeOutCubic',
      duration: 500,
    });
  }

  toggleNav = () => {
    this.setState(state => ({
      // menu button toggles showMenu state to open/close nav menu
      showMenu: !state.showMenu,
    }));
  };

  render() {
    const { menuLinks } = this.props;
    const { showMenu } = this.state;

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
          <nav className={showMenu ? 'enter' : 'exit'} ref={this.navRef}>
            <ul>
              {/* menuLinks contains page link data - received from Layout component */}
              {menuLinks.map(item => (
                <li key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </HeaderPanel>
    );
  }
}

export default Header;
