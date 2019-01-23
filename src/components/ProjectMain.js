import React from 'react';
import PropTypes from 'prop-types';
import ProjectMainStyled from './styles/ProjectMainStyled';
import {
  IOTGAEntryForm,
  IOTGARegisterForm,
  RSCOurStory,
  RSCPaymentForm,
} from './images/images';

class ProjectMain extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  components = {
    IOTGAEntryForm,
    IOTGARegisterForm,
    RSCOurStory,
    RSCPaymentForm,
  };

  render() {
    const { data } = this.props;

    return (
      <ProjectMainStyled>
        {data.map((item, i) => {
          // paragraphs
          if (item.type === 'text') {
            return <p key={item.type + i}>{item.content}</p>;
          }

          // images
          if (item.type === 'image') {
            // Create component to display image dynamically
            const Img = this.components[item.content];
            return <Img key={item.type + i} />;
          }

          // videos
          return (
            <video key={item.type + i} autoPlay loop muted>
              <source src={`/static/video/${item.content}`} type="video/mp4" />
            </video>
          );
        })}
      </ProjectMainStyled>
    );
  }
}

export default ProjectMain;
