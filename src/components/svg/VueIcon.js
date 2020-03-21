import SVGInline from 'react-svg-inline';

const VueIcon = () => (
  <SVGInline
    component="div"
    className="vue-icon"
    classSuffix=""
    accessibilityLabel="Vue.js"
    fill="#fff"
    svg={`
      <svg x="0px" y="0px" viewBox="0 0 256 221.3" style="enable-background:new 0 0 256 221.3;" xml:space="preserve">
        <path class="st0" d="M204.8,0.5H256L128,221.3L0,0.5h50.6h47.4L128,51.7l29.4-51.2H204.8z M0,0.5l128,220.8L256,0.5h-51.2L128,133
          L50.6,0.5H0z"/>
        <path stroke="#BC2326" stroke-miterlimit="10" d="M50.6,0.5L128,133.6L204.8,0.5h-47.4L128,51.7L97.9,0.5H50.6z"/>
      </svg>
      <span class="tooltip">Vue.js</span>
    `}
  />
);

export default VueIcon;
