import SVGInline from 'react-svg-inline';

const VSCodeIcon = () => (
  <SVGInline
    component="div"
    className="vscode-icon"
    classSuffix=""
    accessibilityLabel="Visual Studio Code IDE"
    fill="#121415"
    svg={`
      <svg viewBox="0 0 24 24">
        <path class="icon-white" d="M24,2.5V21.5L18,24,0,18.5v-.561l18,1.545V0ZM1,13.111,4.385,10,1,6.889l1.418-.827L5.853,8.65,12,3l3,1.456V15.544L12,17,5.853,11.35,2.419,13.939ZM7.644,10,12,13.283V6.717Z"/>
      </svg>
      <span class="tooltip">Visual Studio Code IDE</span>
    `}
  />
);

export default VSCodeIcon;
