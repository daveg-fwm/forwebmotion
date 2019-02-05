import SVGInline from 'react-svg-inline';

const AmplifyIcon = () => (
  <SVGInline
    component="div"
    className="amplify-icon"
    classSuffix=""
    accessibilityLabel="AWS Amplify CLI"
    fill="#121415"
    svg={`
      <svg x="0px" y="0px" viewBox="0 0 126 94" style="enable-background:new 0 0 126 94;" xml:space="preserve">
        <path d="M25.3,50.2l10.6-18.3L45,47.6L27.2,78.3h35.4L71.7,94H0L25.3,50.2z M40.7,23.6l8.7-15.1L98.8,94
          H81.3L40.7,23.6z M54.2,0h17.5L126,94h-17.5L54.2,0z"/>
        <polygon points="0,94 72,94 62.9,78 27.3,78"/>
      </svg>
      <span class="tooltip">AWS Amplify CLI</span>
    `}
  />
);

export default AmplifyIcon;
