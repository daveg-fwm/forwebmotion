import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import ProjectPreviewStyled from './styles/ProjectPreviewStyled';
import ProjectMainStyled from './styles/ProjectMainStyled';
import ArrowStyled from './styles/elements/ArrowStyled';
import {
  RSCBanner,
  IOTGABanner,
  WKMPGBanner,
  IOTGAEntryForm,
  IOTGARegisterForm,
  RSCOurStory,
  RSCPaymentForm,
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
    hideHeaderContent: PropTypes.func,
  };

  components = {
    RSCBanner,
    IOTGABanner,
    WKMPGBanner,
    IOTGAEntryForm,
    IOTGARegisterForm,
    RSCOurStory,
    RSCPaymentForm,
  };

  render() {
    const { PreviewData, MainData, hideHeaderContent } = this.props;

    // MainData does not exist on index.js
    if (MainData === undefined) {
      return (
        <>
          {Object.keys(PreviewData).map(key => {
            // Create component to display banner image dynamically
            const Banner = this.components[PreviewData[key].bannerImg];

            return (
              <div className="hide-panel">
                <div key={key} id={PreviewData[key].class} className="panel">
                  {/* Preview content for all projects on homepage */}
                  <ProjectPreviewStyled>
                    <p className="intro">{PreviewData[key].intro}</p>
                    <a
                      href={PreviewData[key].link}
                      className={`project ${PreviewData[key].class}`}
                      onClick={e => {
                        e.preventDefault();

                        hideHeaderContent();
                        setTimeout(() => navigate(PreviewData[key].link), 1000);
                      }}
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
                    </a>
                  </ProjectPreviewStyled>
                </div>
              </div>
            );
          })}
        </>
      );
    }

    // Create component to display banner image dynamically
    const MainBanner = this.components[PreviewData.bannerImg];

    return (
      <div className="hide-panel">
        <div className="panel">
          {/* Preview content for currently viewed project */}
          <ProjectPreviewStyled>
            <div className={`project ${PreviewData.class}`}>
              {/* Link to project preview on index.js used for close button */}
              <a
                href={`/#${PreviewData.class}`}
                onClick={e => {
                  e.preventDefault();

                  hideHeaderContent();
                  setTimeout(() => navigate(`/#${PreviewData.class}`), 1000);
                }}
              >
                x
              </a>
              <div className="project-bg">
                <p>{PreviewData.year}</p>
                <p>{PreviewData.type}</p>
              </div>
              <MainBanner />
            </div>
          </ProjectPreviewStyled>

          {/* Main content for currently viewed project */}
          <ProjectMainStyled>
            {MainData.map((item, i) => {
              if (item.type === 'text') {
                return <p key={item.type + i}>{item.content}</p>;
              }
              if (item.type === 'image') {
                // Create component to display image dynamically
                const Img = this.components[item.content];
                return <Img key={item.type + i} />;
              }

              return (
                <video key={item.type + i} autoPlay loop muted>
                  <source
                    src={`/static/video/${item.content}`}
                    type="video/mp4"
                  />
                </video>
              );
            })}
          </ProjectMainStyled>
        </div>
      </div>
    );
  }
}

export default Project;
