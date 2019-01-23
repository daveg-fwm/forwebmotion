import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed, { PoseGroup } from 'react-pose';
import { RSCBanner, IOTGABanner, WKMPGBanner } from './images/images';
import {
  ProjectPreviewStyled,
  ArrowStyled,
} from './styles/ProjectPreviewStyled';

class ProjectPreview extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      class: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      link: PropTypes.string,
      bannerImg: PropTypes.string.isRequired,
      intro: PropTypes.string,
    }).isRequired,
  };

  components = {
    RSCBanner,
    IOTGABanner,
    WKMPGBanner,
  };

  render() {
    const { data } = this.props;
    // Create component to display banner image dynamically
    const Banner = this.components[data.bannerImg];

    const ProjectPreviewPosed = posed(ProjectPreviewStyled)({
      // enter: {
      //   opacity: 1,
      //   transition: {
      //     duration: 500,
      //   },
      //   // beforeChildren: true,
      // },
      // exit: {
      //   opacity: 0,
      //   transition: {
      //     duration: 500,
      //   },
      // },
    });

    // Intro paragraphs and link container to page are only needed on index.js
    if ('intro' in data) {
      return (
        <PoseGroup>
          <ProjectPreviewPosed key={data.class}>
            <p className="intro">{data.intro}</p>
            <Link to={data.link} className={`project ${data.class}`}>
              <div className="project-arrow">
                <ArrowStyled className="arrow">
                  <span />
                  <span />
                </ArrowStyled>
                <h1>{data.name}</h1>
              </div>
              <div className="project-bg">
                <p>{data.year}</p>
                <p>{data.type}</p>
              </div>
              <Banner />
            </Link>
          </ProjectPreviewPosed>
        </PoseGroup>
      );
    }

    // Link to project preview on index.js used for close button
    return (
      <PoseGroup>
        <ProjectPreviewPosed key={data.class}>
          <div className={`project ${data.class}`}>
            <Link to={`/#${data.class}`}>x</Link>
            <div className="project-bg">
              <p>{data.year}</p>
              <p>{data.type}</p>
            </div>
            <Banner />
          </div>
        </ProjectPreviewPosed>
      </PoseGroup>
    );
  }
}

export default ProjectPreview;
