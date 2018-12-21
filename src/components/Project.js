import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data }) => (
  <div>
    <p>{data.name}</p>
  </div>
);

Project.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    year: PropTypes.string,
    type: PropTypes.string,
    link: PropTypes.string,
    bannerImg: PropTypes.string,
    preview: PropTypes.string,
  }),
};

export default Project;
