import React from 'react';
import PropTypes from 'prop-types';
import video from '../../videos/wkm-payment-gateway.mp4';
import poster from '../../images/wkm-gateway-poster.jpg';

const WKMPGVideo = ({ toggleVideo }) => (
  <video
    id="wkm-gateway-video"
    loop
    playsInline
    muted
    preload="auto"
    poster={poster}
    onClick={() => toggleVideo('pause')}
  >
    <source src={video} type="video/mp4" />
  </video>
);

WKMPGVideo.propTypes = {
  toggleVideo: PropTypes.func,
};

export default WKMPGVideo;
