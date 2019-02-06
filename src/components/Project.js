import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { InView } from 'react-intersection-observer';
import ProjectPreviewStyled from './styles/ProjectPreviewStyled';
import ProjectMainStyled from './styles/ProjectMainStyled';
import ArrowStyled from './styles/elements/ArrowStyled';
import {
  RSCBanner,
  IOTGABanner,
  WKMPGBanner,
  IOTGARegisterForm,
  RSCOurStory,
  RSCPaymentForm,
  AboutBanner,
} from './images/images';

class Project extends React.Component {
  static propTypes = {
    PreviewData: PropTypes.object.isRequired,
    MainData: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ),
    previewRef1: PropTypes.object,
    previewRef2: PropTypes.object,
    previewRef3: PropTypes.object,
    aboutPreviewRef: PropTypes.object,
    allowHoverPreviewRef1: PropTypes.bool,
    allowHoverPreviewRef2: PropTypes.bool,
    allowHoverPreviewRef3: PropTypes.bool,
    allowHoverAboutPreviewRef: PropTypes.bool,
    mainRef: PropTypes.object,
    animateExit: PropTypes.func,
    animateProjectIntro: PropTypes.func,
    animateProjectPreview: PropTypes.func,
    animateProjectMain: PropTypes.func,
  };

  state = {
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
  };

  // Play/pause video
  toggleVideo = action => {
    const { playVideo } = this.state;
    const video = document.getElementById('wkm-gateway-video');

    this.setState({ playVideo: !playVideo });

    // Add video controls and start the video
    if (action === 'play') {
      video.setAttribute('controls', 'controls');
      return video.play();
    }

    // Remove video controls and pause the video
    video.removeAttribute('controls');
    return video.pause();
  };

  render() {
    const {
      PreviewData,
      MainData,
      previewRef1,
      previewRef2,
      previewRef3,
      aboutPreviewRef,
      allowHoverPreviewRef1,
      allowHoverPreviewRef2,
      allowHoverPreviewRef3,
      allowHoverAboutPreviewRef,
      mainRef,
      animateExit,
      animateProjectIntro,
      animateProjectPreview,
      animateProjectMain,
    } = this.props;

    const { playVideo } = this.state;

    // Add previewRefs and allowHoverPreviewRefs to arrays - will cycle through in .map below
    const previewRef = [previewRef1, previewRef2, previewRef3, aboutPreviewRef];
    const allowHoverPreviewRef = [
      allowHoverPreviewRef1,
      allowHoverPreviewRef2,
      allowHoverPreviewRef3,
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
                    inView ? animateProjectIntro(previewRef[i]) : null
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
                        inView ? animateProjectPreview(previewRef[i]) : null
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

    return (
      <div className="hide-panel" ref={mainRef}>
        <InView
          tag="div"
          className="panel"
          triggerOnce
          threshold={0}
          onChange={inView => (inView ? animateProjectMain() : null)}
        >
          {/* Preview content for currently viewed project */}
          <ProjectPreviewStyled>
            <div className={`project ${PreviewData.class}`}>
              {/* Link to project preview on index.js used for close button */}
              <a
                className="close-project"
                href={`/#${PreviewData.class}`}
                onClick={e => {
                  e.preventDefault();
                  animateExit();
                  setTimeout(() => navigate(`/#${PreviewData.class}`), 1000);
                }}
              >
                <span />
                <span />
              </a>
              <div className="project-bg project-page-bg">
                <p>{PreviewData.year}</p>
                <p>{PreviewData.type}</p>
              </div>
              <MainBanner mainBannerClass="project-page-banner" />
            </div>
          </ProjectPreviewStyled>

          {/* Main content for currently viewed project */}
          <ProjectMainStyled>
            {MainData.map((item, i) => {
              // Headings
              if (item.type === 'heading') {
                return (
                  <div key={item.type + i} className="heading">
                    <h1>{item.content}</h1>
                    <span />
                  </div>
                );
              }

              // Paragraphs
              if (item.type === 'paragraph') {
                return <p key={item.type + i}>{item.content}</p>;
              }

              // Images
              if (item.type === 'image') {
                // Create component to display image dynamically
                const Img = this.components[item.content];
                return <Img key={item.type + i} />;
              }

              // Videos
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
                  <video
                    id="wkm-gateway-video"
                    loop
                    muted
                    onClick={() => this.toggleVideo('pause')}
                  >
                    <source
                      src={`/static/video/${item.content}`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              );
            })}
          </ProjectMainStyled>
        </InView>
      </div>
    );
  }
}

export default Project;
