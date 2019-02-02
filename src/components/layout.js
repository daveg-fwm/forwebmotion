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
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
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
    // Project preview banners zoom out when hovering over link, but only allow after project preview has animated in
    allowHoverPreviewRef1: false,
    allowHoverPreviewRef2: false,
    allowHoverPreviewRef3: false,
    // Project component - single main panel
    mainRef: React.createRef(),
    // Footer component
    footerRef: React.createRef(),
  };

  targets = [];
  targetsChildren = [];

  // Enter animations
  componentDidMount = () => {
    const {
      headerContentRef,
      homeRef,
      previewRef1,
      previewRef2,
      previewRef3,
      mainRef,
      footerRef,
    } = this.state;

    const { location } = this.props;

    // Homepage and project pages use different values for animation
    const from =
      homeRef.current !== null ? 'calc(102% + 12px)' : 'calc(100.6% + 12px)';

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
          ]
        : mainRef.current;

    this.targetsChildren =
      homeRef.current !== null
        ? [
            homeRef.current.children,
            previewRef1.current.children,
            previewRef2.current.children,
            previewRef3.current.children,
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
    if (homeRef.current === null) {
      anime({
        targets: headerContentRef.current.children[0].children[0],
        translateX: () => ['-100%', '0%'],
        easing: 'easeInCubic',
        duration: 500,
      });
    }

    // Animate footer panel
    anime
      .timeline({
        targets: footerRef.current,
        translateY: () => ['-100%', '0%'],
        easing: 'easeInCubic',
        duration: 500,
      })
      .add({
        targets: footerRef.current.children,
        translateY: () => ['calc(129% + 12px)', '0%'],
      });

    window.addEventListener('resize', this.updateSize);
  };

  // Prevent memory leaks
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateSize);
  };

  // Save browser dimensions to state
  updateSize = () => {
    const {
      windowWidth,
      windowHeight,
      headerContentContainerRef,
      navRef,
    } = this.state;

    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });

    // Remove styles for refs when position of Header component changes
    if (windowWidth < 1200 || windowHeight < 620) {
      navRef.current.removeAttribute('style');
    } else {
      headerContentContainerRef.current.removeAttribute('style');
    }
  };

  // Toggle showMenu state to open/close nav menu
  toggleNav = () => {
    const {
      showMenu,
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
          return ['-100%', '0%'];
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
          ]
        : mainRef.current;

    this.targetsChildren =
      homeRef.current !== null
        ? [
            homeRef.current.children,
            previewRef1.current.children,
            previewRef2.current.children,
            previewRef3.current.children,
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
        translateY: () => ['0%', 'calc(100% + 12px)'],
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
        translateY: () => ['0%', 'calc(122% + 12px)'],
      });
  };

  // Intersection Observer animations on homepage
  animateProjectPreview = ref => {
    // Determine which project preview should be allowed to change hover state to true
    let allowHover = '';

    switch (ref.current.children[0].id) {
      case 'rsc-project':
        allowHover = 'allowHoverPreviewRef1';
        break;
      case 'iotga-project':
        allowHover = 'allowHoverPreviewRef2';
        break;
      default:
        allowHover = 'allowHoverPreviewRef3';
    }

    /*
      Traversing object rather than creating a ref for each element:

      div.hide-panel {
        div.panel {
          div.ProjectPreviewStyled {
            p.intro
            a.project {
              div.project-arrow
              div.project-bg
              div.banner
            }
          }
        }
      }
    */
    const intro = ref.current.children[0].children[0].children[0];
    const arrow = ref.current.children[0].children[0].children[1].children[0];
    const bg = ref.current.children[0].children[0].children[1].children[1];
    const banner = ref.current.children[0].children[0].children[1].children[2];

    anime
      .timeline({
        easing: 'easeOutQuart',
        duration: 500,
      })
      .add({
        targets: intro,
        translateY: () => ['-200%', '0%'],
      })
      .add({
        targets: bg,
        translateX: () => ['-110%', '0%'],
        easing: 'easeOutBack',
      })
      .add({
        targets: arrow,
        translateX: () => ['-100%', '0%'],
        duration: 300,
      })
      .add({
        targets: banner,
        translateY: () => ['110%', '0%'],
      })
      .finished.then(
        // Use timeout to ensure transitions don't conflict
        setTimeout(() => {
          this.setState({ [allowHover]: true });
        }, 2500)
      );
  };

  // Intersection Observer animations on project pages
  animateProjectMain = () => {
    /*
      Traversing object rather than creating a ref for each element:

      div.hide-panel {
        div.panel {
          div.ProjectPreviewStyled {
            div.project {
              a
              div.project-bg
              div.banner
            }
          }
        }
      }
    */
    const { mainRef } = this.state;

    const closeLink =
      mainRef.current.children[0].children[0].children[0].children[0];
    const bg = mainRef.current.children[0].children[0].children[0].children[1];
    const banner =
      mainRef.current.children[0].children[0].children[0].children[2];
    const mainContent = mainRef.current.children[0].children[1];

    anime
      .timeline({
        easing: 'easeOutQuart',
        duration: 500,
      })
      .add({
        targets: bg,
        translateX: () => ['-110%', '0%'],
        easing: 'easeOutBack',
        delay: 500,
      })
      .add({
        targets: banner,
        translateY: () => ['110%', '-4%'],
        scale: 1.05455,
      })
      .add({
        targets: mainContent,
        translateY: () => ['10%', '0%'],
        opacity: () => [0, 1],
      })
      .add({
        targets: closeLink,
        translateX: () => ['-100%', '0%'],
        duration: 250,
      })
      .add({
        targets: closeLink.children[0],
        rotate: 45,
        duration: 250,
      })
      .add(
        {
          targets: closeLink.children[1],
          rotate: -45,
          duration: 250,
        },
        '-=250'
      );
  };

  // Scroll to first project preview after clicking down arrow in Home component
  homeScroll = () => {
    const { windowWidth, windowHeight, previewRef1 } = this.state;
    const scrollElement =
      window.document.scrollingElement ||
      window.document.body ||
      window.document.documentElement;

    // Get top position of first project preview (add 6 due to hide-panel padding)
    const projectPos = previewRef1.current.offsetTop + 6;

    // Match scroll offset with main element padding-top
    let offset = 20;

    if (windowWidth < 1200 || windowHeight < 620) {
      offset = 125;
    } else if (windowHeight >= 660) {
      offset = 40;
    }

    anime({
      targets: scrollElement,
      scrollTop: projectPos - offset,
      easing: 'easeInOutQuad',
      duration: 500,
    });
  };

  render() {
    const { children, headerData, footerClass, location } = this.props;
    const {
      headerContentContainerRef,
      headerContentRef,
      navRef,
      navButtonRef,
      homeRef,
      previewRef1,
      previewRef2,
      previewRef3,
      allowHoverPreviewRef1,
      allowHoverPreviewRef2,
      allowHoverPreviewRef3,
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
        allowHoverPreviewRef1,
        allowHoverPreviewRef2,
        allowHoverPreviewRef3,
        mainRef,
        homeScroll: this.homeScroll,
        animateExit: this.animateExit,
        animateProjectPreview: this.animateProjectPreview,
        animateProjectMain: this.animateProjectMain,
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

            <MainPanelStyled>{childrenWithProps}</MainPanelStyled>
            <Footer footerClass={footerClass} footerRef={footerRef} />
          </>
        )}
      />
    );
  }
}

export default Layout;
