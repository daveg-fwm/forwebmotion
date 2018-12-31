import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data }) => (
  <div className="panel">
    <p>{data.name}</p>
  </div>
);

Project.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    bannerImg: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
