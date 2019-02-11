import React from "react"
import PropTypes from "prop-types"

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
        <body {...this.props.bodyAttributes} className="fixed-loading">
          {this.props.preBodyComponents}

          <style
            dangerouslySetInnerHTML={{
              __html: `
                    @font-face {
                      font-family: 'Open Sans';
                      font-style: normal;
                      font-weight: 300;
                      font-display: swap;
                      src: local('Open Sans Light'), local('OpenSans-Light'),
                        /* Chrome 26+, Opera 23+, Firefox 39+ */
                          url('../../../static/fonts/open-sans-v15-latin-300.woff2')
                          format('woff2'),
                        /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                          url('../../../static/fonts/open-sans-v15-latin-300.woff')
                          format('woff');
                    }

                    body.fixed-loading {
                      position: fixed;
                      margin: 0;
                      padding: 0;
                      box-sizing: border-box;
                    }

                    @-webkit-keyframes animate-out {
                      0% {opacity: 1;}
                      100% {opacity: 0;}
                    }

                    @keyframes animate-out {
                      0% {opacity: 1;}
                      100% {opacity: 0;}
                    }

                    .loading {
                      position: fixed;
                      background-color: #fff;
                      z-index: 100;
                      width: 100%;
                      height: 100%;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      font-size: 2.2rem;
                      line-height: 1.5;
                      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                      font-weight: 300;
                      color: #121415;
                      padding: 0 20px;
                      box-sizing: border-box;
                      opacity: 1;
                      -webkit-animation: animate-out 1s 12s forwards;
                      animation: animate-out 1s 12s forwards;
                    }

                    .loading p {
                      text-align: center;
                      opacity: 0;
                    }

                    @-webkit-keyframes animate-in-out-p {
                      0% {opacity: 0;}
                      25% {opacity: 1;}
                      70% {opacity: 1;}
                      100% {opacity: 0;}
                    }

                    @keyframes animate-in-out-p {
                      0% {opacity: 0;}
                      25% {opacity: 1;}
                      70% {opacity: 1;}
                      100% {opacity: 0;}
                    }

                    .loading p:first-of-type {
                      width: calc(100% - 40px);
                      position: absolute;
                      margin-top: -20px;
                      -webkit-animation: animate-in-out-p 5s 1s forwards;
                      animation: animate-in-out-p 5s 1s forwards;
                    }

                    @-webkit-keyframes animate-in-out-svg-p {
                      0% {opacity: 0;}
                      25% {opacity: 1;}
                      80% {opacity: 1;}
                      100% {opacity: 0;}
                    }

                    @keyframes animate-in-out-svg-p {
                      0% {opacity: 0;}
                      25% {opacity: 1;}
                      80% {opacity: 1;}
                      100% {opacity: 0;}
                    }

                    .loading p:last-of-type {
                      font-size: 1.2em;
                      -webkit-animation: animate-in-out-svg-p 3.5s 7s forwards;
                      animation: animate-in-out-svg-p 3.5s 7s forwards;
                    }

                    .loading svg {
                      width: 100%;
                      height: auto;
                      max-width: 370px;
                      max-height: 45.8px;
                      fill: #40AFE9;
                      margin: -20px 0 12px;
                      opacity: 0;
                      -webkit-animation: animate-in-out-svg-p 4s 6s forwards;
                      animation: animate-in-out-svg-p 4s 6s forwards;
                    }
                  `,
            }}
          />

          <div
            key={`loading`}
            className={`loading`}
            dangerouslySetInnerHTML={{ __html:
              `<p>Everything we learn today is but a stepping stone to what we will learn tomorrow.</p>
              <svg x="0px" y="0px" viewBox="0 0 571.5 70.75" style="enable-background:new 0 0 571.5 70.75;" xml:space="preserve">
                <path d="M59.16666,25.83331c-11.73334,0-21.33334,9.90938-21.33334,22.02084S47.43332,69.875,59.16666,69.875
                S80.5,59.96562,80.5,47.85416S70.89999,25.83331,59.16666,25.83331z M69.15338,47.85416
                c0,5.66971-4.49403,10.30856-9.98672,10.30856s-9.98672-4.63885-9.98672-10.30856s4.49403-10.30856,9.98672-10.30856
                S69.15338,42.18445,69.15338,47.85416z"/>
                <path d="M391.33334,25.83333C379.60001,25.83333,370,35.74271,370,47.85417S379.60001,69.875,391.33334,69.875
                s21.33331-9.90937,21.33331-22.02083S403.06668,25.83333,391.33334,25.83333z M401.32004,47.85417
                c0,5.6697-4.49402,10.30855-9.98669,10.30855c-5.49271,0-9.98672-4.63885-9.98672-10.30855s4.49402-10.30855,9.98672-10.30855
                C396.82602,37.54562,401.32004,42.18446,401.32004,47.85417z"/>
                <path d="M501.16666,25.83333c-11.73334,0-21.33331,9.90938-21.33331,22.02083S489.43332,69.875,501.16666,69.875
                c11.73337,0,21.33334-9.90937,21.33334-22.02083S512.90002,25.83333,501.16666,25.83333z M511.15338,47.85417
                c0,5.6697-4.49402,10.30855-9.98672,10.30855c-5.49268,0-9.98669-4.63885-9.98669-10.30855s4.49402-10.30855,9.98669-10.30855
                C506.65936,37.54562,511.15338,42.18446,511.15338,47.85417z"/>
                <path d="M6.50156,68.5L6.5,39.20833H1.04167V28h5.4599L6.5,19.06363C6.50207,0.4447,24.16491-2.61301,38,4.57672
                l-4.5,12.03937c-7.55755-3.5075-13.5-2.68455-13.5,4.50735L20.00196,28l13.4996,0.00156L33.5,39.20833H19.99982L20,68.5H6.50156z
                M101.56249,30.81033l0.00156-2.81719l-13.5-0.00156L88,45.51512l0.06406,22.97646h13.5l-0.00156-20.63605
                c0-8.58331,7.62515-12.10553,14.00001-8.65484l1.93906-11.19757C114.3353,24.41765,105.6875,25.28125,101.56249,30.81033z
                M190.5,28l-13.49844,0.00156L170,50.50312l-8.99844-22.50156h-9l-9,22.49844L136.5,28.00156L123,28l15.50156,40.50153
                L147.5,68.50292l9-22.50136L165.50156,68.5l9,0.00015L190.5,28z M234.49956,50.50078l-29.00078,0.00078
                c0.40132,6.87276,7.17035,9.83915,13.61996,9.07232c4.77155-0.56731,9.11829-3.13021,11.12547-4.37455L233,64.74901
                c-3.82887,2.34219-17.62497,9.47943-30.60358,1.31289c-17.31122-12.72857-9.61978-42.9369,15.22858-40.05096
                C238.71692,28.52618,234.49956,50.50078,234.49956,50.50078z M224.32036,42.71193c0,0,0.00806-8.12714-9.57036-8.12714
                s-9.25122,8.12714-9.25122,8.12714H224.32036z M268.78134,25.83333c11.45895,0,18.09366,8.16667,18.09366,22.02083
                c0,10.95834-7.00113,22.02083-19.75027,22.02083c-5.24966,0-10.12473-4.25-10.12473-4.25v2.87521l-13.5,0.00136V5.5H257v25.22075
                C257,30.72075,260.15622,25.83333,268.78134,25.83333z M257,41.50156v13.5c2.26907,3.97725,17.34045,9.08718,17.25-8.06406
                C274.12311,31.3528,258.32278,37.41212,257,41.50156z M349.00156,68.5H362.5c0,0,0-23.90637,0-27
                c-0.00046-15.51801-17.48468-20.14676-26.77283-10.90796c-0.05792,0.05762-1.25458,1.10883-2.40131,2.38666
                c-5.01819-8.44577-17.55838-9.66629-24.82587-2.19589V28L295,28.00156v17.48031V68.5h13.5V39.20856
                c0,0,2.54071-4.56274,7.54169-4.56274c6.5,0,5.98956,6.85503,5.98956,6.85503L322.00156,68.5h13.5
                c0,0-0.00156-23.90481-0.00156-26.99844c0-0.80518-0.05093-1.54708-0.14114-2.29323
                c0.61237-0.94318,3.40811-4.56251,7.71408-4.56251c6.5,0,5.98956,6.85503,5.98956,6.85503L349.00156,68.5z M422.4538,16.83491
                l0.00043,11.16666L418,28.00056v11.20777h4.4538l0.00198,15.91519c0.00854,13.39256,10.89774,17.5537,27.73117,12.94084
                l-1.92026-11.60003c-6.65945,2.5459-12.31247,2.56918-12.31247-4.02682l0.00031-13.22918h12.31064V28l-12.30939,0l-0.00125-11.1651
                H422.4538z M458.5,28.00156V68.5H472V28L458.5,28.00156z M465.25,5.5c-3.96155,0-7.173,3.21147-7.173,7.17302
                s3.21146,7.17302,7.173,7.17302s7.173-3.21147,7.173-7.17302S469.21155,5.5,465.25,5.5z M543.53125,30.78087L543.53284,28
                l-13.5,0.00156L530,45.48187L530.03284,68.5h13.49841l0.00092-29.29145c0,0,2.50854-4.56272,7.50952-4.56272
                c6.5,0,5.98956,6.85503,5.98956,6.85503V68.5h13.5c0,0,0-23.94817,0-27.04179
                C570.54498,25.81567,552.79559,21.25201,543.53125,30.78087z"/>
              </svg>
              <p>A Web Developer's journey.</p>`
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                    if (window.location.pathname !== '/' || window.location.search !== '' || window.location.hash !== '') {
                      document.body.removeAttribute('class');
                      document.body.removeChild(document.getElementsByClassName('loading')[0]);
                    } else {
                      setTimeout(() => {
                        document.body.removeAttribute('class');
                      }, 11000);
                      setTimeout(() => {
                        document.body.removeChild(document.getElementsByClassName('loading')[0]);
                      }, 13000);
                    }
                  `,
            }}
          />

          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}