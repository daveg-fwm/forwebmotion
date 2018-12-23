import React from 'react';
import PropTypes from 'prop-types';

class AnimateRaf extends React.Component {
  static propTypes = {
    El: PropTypes.string.isRequired,
    elClass: PropTypes.string.isRequired,
    enter: PropTypes.shape({
      animation: PropTypes.string.isRequired,
      animProperty: PropTypes.string,
      start: PropTypes.number.isRequired,
      stop: PropTypes.number.isRequired,
      unit: PropTypes.string,
      timing: PropTypes.number.isRequired,
    }).isRequired,
    exit: PropTypes.shape({
      animation: PropTypes.string.isRequired,
      animProperty: PropTypes.string,
      start: PropTypes.number.isRequired,
      stop: PropTypes.number.isRequired,
      unit: PropTypes.string,
      timing: PropTypes.number.isRequired,
    }),
    children: PropTypes.node,
  };

  // create a ref for the element to be animated
  elRef = React.createRef();

  // class properties used in multiple methods
  animateId = null;
  animation = null;
  property = null;
  start = null;
  stop = null;
  unit = null;
  timing = null;
  startTime = null;

  componentDidUpdate() {
    const { elClass, enter, exit } = this.props;

    // store enter or exit animation in class properties
    if (elClass === 'enter') {
      this.animation = enter.animation;
      this.start = enter.start;
      this.stop = enter.stop;
      this.timing = enter.timing;

      // most css properties will only have a name and value, but transforms include an additional name as part of it's value
      if ('animProperty' in enter) this.property = enter.animProperty;

      // some css properties have no unit eg: opacity
      if ('unit' in enter) this.unit = enter.unit;
    } else {
      this.animation = exit.animation;
      this.start = exit.start;
      this.stop = exit.stop;
      this.timing = exit.timing;
      if ('animProperty' in exit) this.property = exit.animProperty;
      if ('unit' in enter) this.unit = exit.unit;
    }

    // get initial start time and deduct from current time to handle animation timing
    this.startTime = new Date().getTime();

    // initiate first call to requestAnimationFrame - id will be used to cancel the loop
    this.animateId = requestAnimationFrame(this.runAnimate);
  }

  runAnimate = () => {
    const timestamp = new Date().getTime();
    const progress = timestamp - this.startTime;
    // change Math function based on increase or decrease of animation value
    const end =
      this.start > this.stop
        ? Math.max(this.start - progress / this.timing, this.stop)
        : Math.min(this.start + progress / this.timing, this.stop);

    // if unit exists include it in the math value
    const math = this.unit !== null ? end + this.unit : end;

    // if property exists include it in the animation value
    const value = this.property !== null ? `${this.property}(${math})` : math;

    this.elRef.current.style[this.animation] = value;

    if (end !== this.stop) {
      this.animateId = requestAnimationFrame(this.runAnimate);
    } else {
      cancelAnimationFrame(this.animateId);
    }
  };

  render() {
    const { El, elClass, children } = this.props;

    return (
      // ref this node so it can be animated
      <El className={elClass} ref={this.elRef}>
        {children}
      </El>
    );
  }
}

export default AnimateRaf;
