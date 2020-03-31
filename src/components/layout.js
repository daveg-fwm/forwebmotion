import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import anime from 'animejs';
import GlobalStyled from './styles/GlobalStyled';
import Header from './header';
import MainPanelStyled from './styles/MainPanelStyled';
import Footer from './Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    headerData: PropTypes.object.isRequired,
    footerClass: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  state = {
    showMenu: false,
    scrollMenu: false,
    scrollPos: 0,
    windowWidth: 0,
    windowHeight: 0,
    // Header and nav refs passed up from Header component via props
    headerContentContainerRef: React.createRef(),
    headerContentRef: React.createRef(),
    navRef: React.createRef(),
    navButtonRef: React.createRef(),
    // Home component
    homeRef: React.createRef(),
    // Project component - 1 for each project preview panel
    previewRef1: React.createRef(),
    previewRef2: React.createRef(),
    previewRef3: React.createRef(),
    previewRef4: React.createRef(),
    // Project component - single main panel
    mainRef: React.createRef(),
    // Footer component
    footerRef: React.createRef(),
  };

  targets = [];
  targetsChildren = [];

  menuLeft = false;
  menuCenter = false;

  // Enter animations
  componentDidMount = () => {
    const {
      headerContentRef,
      homeRef,
      previewRef1,
      previewRef2,
      previewRef3,
      previewRef4,
      mainRef,
      footerRef,
    } = this.state;

    const { headerData, location } = this.props;

    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });

    this.menuLeft = !(window.innerWidth < 1200 || window.innerHeight < 620);
    this.menuCenter = !(window.innerWidth >= 1200 && window.innerHeight >= 620);

    // Homepage and project pages use different values for animation - 404 page uses same values as homepage
    let from = 'calc(104.5% + 25px)';

    if (location.pathname === '/red-sofa-cafe') {
      from = 'calc(100.75% + 25px)';
    } else if (location.pathname === '/iot-global-awards') {
      from = 'calc(100.4% + 25px)';
    } else if (location.pathname === '/wkm-payment-gateway') {
      from = 'calc(100.6% + 25px)';
    } else if (location.pathname === '/expat-explore-travel') {
      from = 'calc(100.6% + 25px)';
    } else if (location.pathname === '/about') {
      from = 'calc(100.45% + 25px)';
    }

    if (location.pathname !== '/') {
      document.body.style.opacity = 1;
    }

    /*
      Homepage animates multiple preview panels.
      Project pages have a single main panel.
      404 page has a single main panel and uses mainRef as well.
    */
    this.targets =
      homeRef.current !== null
        ? [
            homeRef.current,
            previewRef1.current,
            previewRef2.current,
            previewRef3.current,
            previewRef4.current,
          ]
        : mainRef.current;

    this.targetsChildren =
      homeRef.current !== null
        ? [
            homeRef.current.children,
            previewRef1.current.children,
            previewRef2.current.children,
            previewRef3.current.children,
            previewRef4.current.children,
          ]
        : mainRef.current.children;

    /*
      Animate main panels
      If hash exists window only scrolls to correct place if main panels are not animated in
    */
    if (location.hash === undefined || location.hash === '') {
      anime
        .timeline({
          targets: this.targets,
          translateY: () => ['-100%', '0%'],
          easing: 'easeInCubic',
          duration: 500,
        })
        .add({
          targets: this.targetsChildren,
          translateY: () => [from, '0%'],
        });
    }

    // Animate header panel
    anime
      .timeline({
        targets: headerContentRef.current,
        translateY: () => ['-100%', '0%'],
        easing: 'easeInCubic',
        duration: 500,
      })
      .add({
        targets: headerContentRef.current.children,
        translateY: () => ['100%', '0%'],
      });

    // Animate project header with logo and app icon
    if (homeRef.current === null && headerData.page !== '404') {
      anime({
        targets: headerContentRef.current.children[0].children[0],
        translateX: () => ['-100%', '0%'],
        easing: 'easeInCubic',
        duration: 500,
      });
    }

    // Animate footer panel
    const animation = anime
      .timeline({
        targets: footerRef.current,
        translateY: () => ['-100%', '0%'],
        easing: 'easeInCubic',
        duration: 500,
      })
      .add({
        targets: footerRef.current.children,
        translateY: () => ['calc(135% + 25px)', '0%'],
      });

    if (homeRef.current !== null && headerData.page !== '404')
      animation.finished.then(this.homeScroll());

    window.addEventListener('resize', this.updateSize);
  };

  // Prevent memory leaks
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateSize);
  };

  // Save browser dimensions to state
  updateSize = () => {
    const { headerContentContainerRef, navRef } = this.state;

    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });

    /*
      Ensure menu remains the same when position of Header component changes.
      Remove styles for refs when position of Header component changes.
      Use menuLeft and menuCenter so that code is only run at the point it moves above or below the breakpoints.
    */
    if (
      this.menuLeft &&
      (window.innerWidth < 1200 || window.innerHeight < 620)
    ) {
      if (navRef.current.style.transform === 'translateY(0%)') {
        headerContentContainerRef.current.setAttribute(
          'style',
          'transform: translateY(calc(0% - 85px))'
        );

        this.setState({ scrollMenu: true });
      } else {
        headerContentContainerRef.current.setAttribute(
          'style',
          'transform: translateY(-100%)'
        );

        this.setState({ scrollMenu: false });
      }

      navRef.current.removeAttribute('style');

      this.menuLeft = false;
      this.menuCenter = true;
    } else if (
      this.menuCenter &&
      (window.innerWidth >= 1200 && window.innerHeight >= 620)
    ) {
      if (
        headerContentContainerRef.current.style.transform ===
        'translateY(calc(0% - 85px))'
      ) {
        navRef.current.setAttribute('style', 'transform: translateY(0%)');
      } else {
        navRef.current.setAttribute('style', 'transform: translateY(-100%)');
      }

      headerContentContainerRef.current.removeAttribute('style');

      // scrollMenu is always false - desktop header doesn't scroll
      this.setState({ scrollMenu: false });

      this.menuLeft = true;
      this.menuCenter = false;
    }
  };

  // Toggle showMenu state to open/close nav menu
  toggleNav = () => {
    const {
      showMenu,
      scrollMenu,
      scrollPos,
      windowWidth,
      windowHeight,
      headerContentContainerRef,
      navRef,
      navButtonRef,
    } = this.state;

    // Ref elements change when Header component is positioned top center or left
    const ref =
      windowWidth < 1200 || windowHeight < 620
        ? headerContentContainerRef
        : navRef;

    // Use calc because from value is percentage - mixing percentage and px breaks animation
    const to =
      windowWidth < 1200 || windowHeight < 620 ? 'calc(0% - 85px)' : '0%';

    /*
      If nav menu is top center, toggle state for scrollMenu.
      Main and footer will have fixed positioning and the nav header will change to absolute.
      This will preserve the smooth scroll experience on iOS.
    */
    if (windowWidth < 1200 || windowHeight < 620) {
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;

      /*
        If menu is about to be opened record the scroll position.
        If menu is about to be closed scroll to the saved position.
      */
      if (!scrollMenu) {
        this.setState({ scrollPos: window.pageYOffset });
      } else {
        anime({
          targets: scrollElement,
          scrollTop: scrollPos,
          easing: 'easeInOutQuad',
          duration: 10,
        });
      }

      this.setState({ scrollMenu: !scrollMenu });
    }

    this.setState({ showMenu: !showMenu });

    const rotate = !showMenu ? 45 : 0;
    const translateY0 = !showMenu ? '6px' : '0px';
    const translateX0 = !showMenu ? '8px' : '0px';
    const translateY2 = !showMenu ? '-5px' : '0px';
    const translateX2 = !showMenu ? '7px' : '0px';
    const opacity = !showMenu ? 0 : 1;

    // Animate nav menu button
    anime
      .timeline({
        easing: 'easeOutCubic',
        duration: 500,
      })
      .add({
        targets: navButtonRef.current.children[0],
        rotate,
        translateY: translateY0,
        translateX: translateX0,
      })
      .add(
        {
          targets: navButtonRef.current.children[2],
          rotate: -rotate,
          translateY: translateY2,
          translateX: translateX2,
        },
        '-=500'
      )
      .add(
        {
          targets: navButtonRef.current.children[1],
          opacity,
          duration: 100,
        },
        '-=500'
      );

    // Animate nav menu open/close
    anime({
      targets: ref.current,
      translateY: () => {
        if (!showMenu) {
          return ['-100%', to];
        }
        // Menu is closed
        return ['0%', '-100%'];
      },
      easing: 'easeOutCubic',
      duration: 500,
    });
  };

  // Hide HeaderContent component
  hideHeaderContent = () => {
    const { showMenu, headerContentRef } = this.state;
    const delay = showMenu ? 500 : 0;

    // Close nav menu if it's open
    if (showMenu) this.toggleNav();

    // Animate header content
    anime
      .timeline({
        targets: headerContentRef.current,
        translateY: () => ['0%', '-110%'],
        easing: 'easeOutCubic',
        duration: 500,
        delay,
      })
      .add({
        targets: headerContentRef.current.children,
        translateY: () => ['0%', '110%'],
      });
  };

  // Exit animations
  animateExit = () => {
    const {
      homeRef,
      previewRef1,
      previewRef2,
      previewRef3,
      previewRef4,
      mainRef,
      footerRef,
    } = this.state;

    // Close nav menu and slide header content out
    this.hideHeaderContent();

    /*
      Homepage animates multiple preview panels.
      Project pages have a single main panel.
    */
    this.targets =
      homeRef.current !== null
        ? [
            homeRef.current,
            previewRef1.current,
            previewRef2.current,
            previewRef3.current,
            previewRef4.current,
          ]
        : mainRef.current;

    this.targetsChildren =
      homeRef.current !== null
        ? [
            homeRef.current.children,
            previewRef1.current.children,
            previewRef2.current.children,
            previewRef3.current.children,
            previewRef4.current.children,
          ]
        : mainRef.current.children;

    // Animate main panels
    anime
      .timeline({
        targets: this.targets,
        translateY: () => ['0%', '-100%'],
        easing: 'easeOutCubic',
        duration: 500,
      })
      .add({
        targets: this.targetsChildren,
        translateY: () => ['0%', 'calc(100% + 25px)'],
      });

    // Animate footer panel
    anime
      .timeline({
        targets: footerRef.current,
        translateY: () => ['0%', '-100%'],
        easing: 'easeOutCubic',
        duration: 500,
      })
      .add({
        targets: footerRef.current.children,
        translateY: () => ['0%', 'calc(122% + 25px)'],
      });
  };

  /*
    Scroll to first project preview after clicking down arrow in Home component.
    Scroll to project preview that matches hash on homepage.
  */
  homeScroll = hashOnClick => {
    document.body.style.opacity = 1;

    const { previewRef1, previewRef2, previewRef3, previewRef4 } = this.state;

    const scrollElement =
      window.document.scrollingElement ||
      window.document.body ||
      window.document.documentElement;

    const { location } = this.props;

    // Check if home down arrow was clicked or hash exists in url
    const hash =
      hashOnClick === '#rsc-project' ? '#rsc-project' : location.hash;

    // Smooth scroll if arrow was clicked and scroll immediately to project if hash exists in url
    const duration = hashOnClick === '#rsc-project' ? 500 : 10;

    let projectRef = {};

    if (hash !== undefined && hash !== '') {
      // Pass ref with current hash so window scrolls to correct place
      switch (hash) {
        case '#rsc-project':
          projectRef = previewRef1;
          break;
        case '#iotga-project':
          projectRef = previewRef2;
          break;
        case '#wkmpg-project':
          projectRef = previewRef3;
          break;
        case '#expat-project':
          projectRef = previewRef4;
          break;
        default:
          projectRef = {};
      }

      // Get top position of first project preview (add 10 due to hide-panel padding)
      const projectPos = projectRef.current.offsetTop + 10;

      // Match scroll offset with main element padding-top
      let offset = 20;

      if (window.innerWidth < 1200 || window.innerHeight < 620) {
        offset = 125;
      } else if (window.innerHeight >= 660) {
        offset = 40;
      }

      anime({
        targets: scrollElement,
        scrollTop: projectPos - offset,
        easing: 'easeInOutQuad',
        duration,
      });
    }
  };

  render() {
    const { children, headerData, footerClass, location } = this.props;
    const {
      scrollMenu,
      headerContentContainerRef,
      headerContentRef,
      navRef,
      navButtonRef,
      homeRef,
      previewRef1,
      previewRef2,
      previewRef3,
      previewRef4,
      mainRef,
      footerRef,
    } = this.state;

    // Send custom props to children
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        homeRef,
        previewRef1,
        previewRef2,
        previewRef3,
        previewRef4,
        mainRef,
        homeScroll: this.homeScroll,
        animateExit: this.animateExit,
      })
    );

    return (
      // Fetch page link data from gatsby-config.js (centralized navigation)
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                menuLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <>
            {/* Styles used on every page */}
            <GlobalStyled />

            {/*
              Send page link, pathname and header content data to Header component.
              Page links are received from gatsby-config.js.
              Header content data and pathname is received from pages.
              Refs and functions are used for animations.
            */}
            <Header
              scrollMenu={scrollMenu}
              menuLinks={data.site.siteMetadata.menuLinks}
              data={headerData}
              locationPathname={location.pathname}
              headerContentContainerRef={headerContentContainerRef}
              headerContentRef={headerContentRef}
              navRef={navRef}
              navButtonRef={navButtonRef}
              toggleNav={this.toggleNav}
              animateExit={this.animateExit}
            />

            <MainPanelStyled className={scrollMenu ? 'scroll' : 'no-scroll'}>
              {childrenWithProps}
            </MainPanelStyled>
            <Footer
              footerClass={footerClass}
              scrollMenu={scrollMenu}
              footerRef={footerRef}
            />
          </>
        )}
      />
    );
  }
}

export default Layout;
