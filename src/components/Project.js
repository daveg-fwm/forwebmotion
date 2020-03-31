import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';
import { InView } from 'react-intersection-observer';
import anime from 'animejs';
import ProjectPreviewStyled from './styles/ProjectPreviewStyled';
import ProjectMainStyled from './styles/ProjectMainStyled';
import ArrowStyled from './styles/elements/ArrowStyled';
import WKMPGVideo from './videos/WKMPGVideo';
import {
  RSCBanner,
  IOTGABanner,
  WKMPGBanner,
  IOTGARegisterForm,
  RSCOurStory,
  RSCPaymentForm,
  AboutBanner,
  ExpatBanner,
  ExpatElasticSearch,
} from './images/images';

class Project extends React.Component {
  static propTypes = {
    PreviewData: PropTypes.object.isRequired,
    MainData: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        content: PropTypes.array.isRequired,
      })
    ),
    previewRef1: PropTypes.object,
    previewRef2: PropTypes.object,
    previewRef3: PropTypes.object,
    previewRef4: PropTypes.object,
    aboutPreviewRef: PropTypes.object,
    mainRef: PropTypes.object,
    animateExit: PropTypes.func,
  };

  state = {
    // Project preview banners zoom out when hovering over link, but only allow after project preview has animated in
    allowHoverPreviewRef1: false,
    allowHoverPreviewRef2: false,
    allowHoverPreviewRef3: false,
    allowHoverPreviewRef4: false,
    allowHoverAboutPreviewRef: false,
    playVideo: false,
  };

  components = {
    RSCBanner,
    IOTGABanner,
    WKMPGBanner,
    IOTGARegisterForm,
    RSCOurStory,
    RSCPaymentForm,
    AboutBanner,
    WKMPGVideo,
    ExpatBanner,
    ExpatElasticSearch,
  };

  hoverTimeoutId = () => {};

  // Prevent memory leaks
  componentWillUnmount = () => {
    clearTimeout(this.hoverTimeoutId);
  };

  /*
    Use timeout to ensure transitions don't conflict.
    This function is called once animateProjectPreview animations complete.
  */
  hoverTimer = allowHover =>
    setTimeout(() => {
      this.setState({ [allowHover]: true });
    }, 2500);

  // Intersection Observer animations for intro text on homepage
  animateProjectIntro = ref => {
    /*
      Traversing object rather than creating a ref for each element:

      div.hide-panel {
        div.panel {
          div.ProjectPreviewStyled {
            p.intro
          }
        }
      }
    */
    const intro = ref.current.children[0].children[0].children[0];

    anime({
      targets: intro,
      translateY: () => ['-200%', '0%'],
      easing: 'easeOutQuart',
      duration: 500,
    });
  };

  // Intersection Observer animations for preview banners on homepage
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
      case 'wkmpg-project':
        allowHover = 'allowHoverPreviewRef3';
        break;
      case 'expat-project':
        allowHover = 'allowHoverPreviewRef4';
        break;
      default:
        allowHover = '';
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
    const arrow = ref.current.children[0].children[0].children[1].children[0];
    const bg = ref.current.children[0].children[0].children[1].children[1];
    const banner = ref.current.children[0].children[0].children[1].children[2];

    anime
      .timeline({
        easing: 'easeOutQuart',
        duration: 500,
      })
      .add({
        targets: bg,
        translateX: () => ['-115%', '0%'],
        easing: 'easeOutBack',
      })
      .add({
        targets: arrow,
        translateX: () => ['-100%', '0%'],
        duration: 300,
      })
      .add({
        targets: banner,
        translateY: () => ['120%', '0%'],
      })
      .finished.then(
        /*
          Use timeout to ensure transitions don't conflict.
          Cancel setTimeout using this.hoverTimeoutId in ComponentWillUnmount.
        */
        (this.hoverTimeoutId = this.hoverTimer(allowHover))
      );
  };

  // Intersection Observer animations on project pages preview
  animateProjectPreviewMain = () => {
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
    const { mainRef } = this.props;

    const closeLink =
      mainRef.current.children[0].children[0].children[0].children[0];
    const bg = mainRef.current.children[0].children[0].children[0].children[1];
    const banner =
      mainRef.current.children[0].children[0].children[0].children[2];

    anime
      .timeline({
        easing: 'easeOutQuart',
        duration: 500,
      })
      .add({
        targets: bg,
        translateX: () => ['-115%', '0%'],
        easing: 'easeOutBack',
        delay: 400,
      })
      .add({
        targets: banner,
        translateY: () => ['120%', '-4%'],
        scale: 1.05455,
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

  // Intersection Observer animations on project pages content
  animateProjectContentMain = (type, index) => {
    /*
      Traversing object rather than creating a ref for each element:

      div.hide-panel {
        div.panel {
          div.ProjectMainStyled {
            {children}
          }
        }
      }
    */
    const { mainRef } = this.props;
    const mainContent = mainRef.current.children[0].children[1].children[index];

    const from = type === 'heading' ? '100%' : '30%';

    anime({
      targets: mainContent,
      translateY: () => [from, '0%'],
      opacity: () => [0, 1],
      easing: 'easeOutQuart',
      duration: 1000,
    });
  };

  // Play/pause video
  toggleVideo = action => {
    const { playVideo } = this.state;
    const video = document.getElementById('wkm-gateway-video');

    this.setState({ playVideo: !playVideo });

    // Add video controls and start the video
    if (action === 'play') {
      video.setAttribute('controls', true);
      return video.play();
    }

    // Remove video controls and pause the video
    video.removeAttribute('controls');
    return video.pause();
  };

  // Show full image popup
  imgPopup = imgComponent => {
    let imgName = imgComponent;
    const camelCaseMatches = imgComponent.match(/.[A-Z][a-z]/g);
    const div = document.createElement('div');

    const closeFullImgPopup = event => {
      if (
        event.target.classList.contains('full-img-popup') ||
        event.target.classList.contains('full-img-popup-close-btn') ||
        event.target.parentElement.classList.contains(
          'full-img-popup-close-btn'
        )
      ) {
        div.style.opacity = 0;

        div.addEventListener('transitionend', () => {
          div.removeEventListener('click', closeFullImgPopup);
          div
            .querySelector('.full-img-popup-close-btn')
            .removeEventListener('click', closeFullImgPopup);

          div.remove();
        });
      }
    };

    camelCaseMatches.forEach(match => {
      imgName = imgName.replace(match.substr(1), `-${match.substr(1)}`);
    });

    div.classList.add('full-img-popup');
    div.innerHTML = `
      <div>
        <button class='full-img-popup-close-btn'>
          <span></span>
          <span></span>
        </button>
        <img src='/${imgName.toLowerCase()}.jpg'>
      </div>
    `;
    document.body.appendChild(div);

    const lookImg = setInterval(() => {
      if (div.querySelector('img').complete) {
        clearInterval(lookImg);
        div.style.opacity = 1;

        if (
          div.querySelector('img').clientHeight + 80 >
          div.querySelector('div').clientHeight
        ) {
          div.querySelector('div').style.overflowY = 'scroll';
        }

        div.addEventListener('click', closeFullImgPopup);
        div
          .querySelector('.full-img-popup-close-btn')
          .addEventListener('click', closeFullImgPopup);
      }
    }, 100);
  };

  render() {
    const {
      PreviewData,
      MainData,
      previewRef1,
      previewRef2,
      previewRef3,
      previewRef4,
      aboutPreviewRef,
      mainRef,
      animateExit,
    } = this.props;

    const {
      allowHoverPreviewRef1,
      allowHoverPreviewRef2,
      allowHoverPreviewRef3,
      allowHoverPreviewRef4,
      allowHoverAboutPreviewRef,
      playVideo,
    } = this.state;

    // Add previewRefs and allowHoverPreviewRefs to arrays - will cycle through in .map below
    const previewRef = [
      previewRef1,
      previewRef2,
      previewRef3,
      previewRef4,
      aboutPreviewRef,
    ];
    const allowHoverPreviewRef = [
      allowHoverPreviewRef1,
      allowHoverPreviewRef2,
      allowHoverPreviewRef3,
      allowHoverPreviewRef4,
      allowHoverAboutPreviewRef,
    ];

    // MainData does not exist on index.js
    if (MainData === undefined) {
      return (
        <>
          {Object.keys(PreviewData).map((key, i) => {
            // Create component to display banner image dynamically
            const Banner = this.components[PreviewData[key].bannerImg];

            return (
              <div key={key} className="hide-panel" ref={previewRef[i]}>
                <InView
                  tag="div"
                  id={PreviewData[key].class}
                  className="panel"
                  triggerOnce
                  threshold={0.2}
                  onChange={inView =>
                    inView ? this.animateProjectIntro(previewRef[i]) : null
                  }
                >
                  {/* Preview content for all projects on homepage */}
                  <ProjectPreviewStyled>
                    <div className="intro">
                      {PreviewData[key].intro.map((item, num) => (
                        <p key={`${key}-intro${num}`}>{item.paragraph}</p>
                      ))}
                    </div>
                    <InView
                      tag="a"
                      className={`project ${PreviewData[key].class}${
                        allowHoverPreviewRef[i] ? ' allow-hover' : ''
                      }`}
                      href={PreviewData[key].link}
                      onClick={e => {
                        e.preventDefault();
                        animateExit();
                        setTimeout(() => navigate(PreviewData[key].link), 1000);
                      }}
                      triggerOnce
                      threshold={0.8}
                      onChange={inView =>
                        inView
                          ? this.animateProjectPreview(previewRef[i])
                          : null
                      }
                    >
                      <div className="project-arrow">
                        <ArrowStyled className="arrow">
                          <span />
                          <span />
                        </ArrowStyled>
                        <h1>{PreviewData[key].name}</h1>
                      </div>
                      <div className="project-bg">
                        <p>{PreviewData[key].year}</p>
                        <p>{PreviewData[key].type}</p>
                      </div>
                      <Banner />
                    </InView>
                  </ProjectPreviewStyled>
                </InView>
              </div>
            );
          })}
        </>
      );
    }

    // Create component to display banner image dynamically
    const MainBanner = this.components[PreviewData.bannerImg];
    // Close button on about section should just go to top of homepage
    const projectHash =
      PreviewData.class !== 'forwebmotion-project'
        ? `#${PreviewData.class}`
        : '';

    return (
      <div className="hide-panel" ref={mainRef}>
        <div className="panel">
          {/* Preview content for currently viewed project */}
          <ProjectPreviewStyled>
            {/* <div className={`project ${PreviewData.class}`}> */}
            <InView
              tag="div"
              className={`project ${PreviewData.class}`}
              triggerOnce
              threshold={0.1}
              onChange={inView =>
                inView ? this.animateProjectPreviewMain() : null
              }
            >
              {/* Link to project preview on index.js used for close button */}
              <Link
                to={`/${projectHash}`}
                className="close-project"
                onClick={e => {
                  e.preventDefault();
                  animateExit();
                  setTimeout(() => navigate(`/${projectHash}`), 1000);
                }}
              >
                <span />
                <span />
              </Link>
              <div className="project-bg project-page-bg">
                <p>{PreviewData.year}</p>
                <p>{PreviewData.type}</p>
              </div>

              <MainBanner mainBannerClass="project-page-banner" />
            </InView>
          </ProjectPreviewStyled>

          {/* Main content for currently viewed project */}
          <ProjectMainStyled>
            {MainData.map((item, i) => {
              // Headings
              if (item.type === 'heading') {
                return (
                  <div key={item.type + i} className="heading">
                    {/* First heading gets h1 for project name - the rest are h2 */}
                    {i === 0 ? (
                      <h1>{item.content[0]}</h1>
                    ) : (
                      <h2>{item.content[0]}</h2>
                    )}
                    <span />
                  </div>
                );
              }

              // Paragraphs
              if (item.type === 'paragraph') {
                return <p key={item.type + i}>{item.content[0]}</p>;
              }

              // Lists
              if (item.type === 'list') {
                return (
                  <ul key={item.type + i}>
                    {item.content.map((listItem, listIndex) => (
                      <li key={item.type + i + listIndex}>{listItem}</li>
                    ))}
                  </ul>
                );
              }

              // Lists of links
              if (item.type === 'link list') {
                return (
                  <ul key={item.type + i}>
                    {item.content.map((listItem, listIndex) => {
                      /*
                        Don't display list item if the index is odd.
                        Odd index items are names while even index items are links.
                        You want to display both for a single list item.
                      */
                      if ((listIndex + 1) % 2 !== 0) return;

                      const name = item.content[listIndex - 1].split(',');
                      return (
                        <li key={item.type + i + listIndex}>
                          <span>{name[0]}, </span>
                          <a
                            style={{ display: 'block' }}
                            href={listItem}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {name[1]}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              // Images
              if (item.type === 'image') {
                // Create component to display image dynamically
                const Img = this.components[item.content[0]];

                return (
                  <div key={item.type + i} className="image-container">
                    <button
                      type="button"
                      onClick={() => this.imgPopup(item.content[0])}
                    >
                      <Img />
                    </button>
                  </div>
                );
              }

              // SVGs
              if (item.type === 'svg') {
                // Create component to display svg dynamically
                const Svg = this.components[item.content[0]];

                return (
                  <div key={item.type + i} className="image-container">
                    <Svg />
                  </div>
                );
              }

              // Videos
              if (item.type === 'video') {
                // Create component to display video dynamically
                const Video = this.components[item.content[0]];

                return (
                  <div key={item.type + i} className="video-container">
                    <button
                      type="button"
                      className={playVideo ? 'hide' : null}
                      onClick={() => this.toggleVideo('play')}
                    >
                      <span>
                        <span />
                      </span>
                    </button>
                    <Video toggleVideo={this.toggleVideo} />
                  </div>
                );
              }

              // Website link
              return (
                <a
                  key={item.type + i}
                  className="website-link right-arrow-link"
                  href={item.content[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowStyled className="right-arrow">
                    <span />
                    <span />
                  </ArrowStyled>
                  <span className="a-svg-txt">{item.content[0]}</span>
                </a>
              );
            })}

            {/* Link to project preview on index.js */}
            {PreviewData.class !== 'forwebmotion-project' &&
            PreviewData.class !== 'expat-project' ? (
              <Link
                to={`/#${PreviewData.class}`}
                className="continue-journey left-arrow-link"
                onClick={e => {
                  e.preventDefault();
                  animateExit();
                  setTimeout(() => navigate(`/#${PreviewData.class}`), 1000);
                }}
              >
                <ArrowStyled className="left-arrow">
                  <span />
                  <span />
                </ArrowStyled>
                <span className="a-svg-txt">Continue the journey</span>
              </Link>
            ) : null}
          </ProjectMainStyled>
        </div>
      </div>
    );
  }
}

export default Project;
