import React from 'react';
import PropTypes from 'prop-types';
import Loading from './components/Loading';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body
          {...this.props.bodyAttributes}
          style={{
            position: 'fixed',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          }}
        >
          {this.props.preBodyComponents}

          {/* Intro animation when user first comes to the site */}
          <Loading />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                    if (window.location.pathname === '/404' || window.location.search !== '' || window.location.hash !== '') {
                      document.body.removeAttribute('style');
                      document.body.removeChild(document.getElementsByClassName('loading')[0]);
                    } else {
                      setTimeout(() => {
                        document.body.removeAttribute('style');
                      }, 11000);
                      setTimeout(() => {
                        document.body.removeChild(document.getElementsByClassName('loading')[0]);
                      }, 13000);
                    }
                  `,
            }}
          />

          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
