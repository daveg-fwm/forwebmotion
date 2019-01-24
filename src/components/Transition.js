import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import Layout from './layout';

const timeout = 0;

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: { delay: timeout, delayChildren: timeout },
    });

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>
          <Layout location={location} pathname={location.pathname}>
            {children}
          </Layout>
        </RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;
