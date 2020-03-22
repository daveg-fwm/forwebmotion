import SVGInline from 'react-svg-inline';

const VueIcon = () => (
  <SVGInline
    component="div"
    className="vue-icon"
    classSuffix=""
    accessibilityLabel="Vue.js"
    fill="#fff"
    svg={`
      <svg x="0px" y="0px" viewBox="0 0 256 221" style="enable-background:new 0 0 256 221;" xml:space="preserve">
        <g>
          <path d="M204.8,0H256L128,220.8L0,0h50.56h47.36L128,51.2L157.44,0H204.8z"/>
          <path d="M0,0l128,220.8L256,0h-51.2L128,132.48L50.56,0H0z"/>
          <path stroke="#BC2224" stroke-miterlimit="10" stroke-width="4px" d="M50.56,0L128,133.12L204.8,0h-47.36L128,51.2L97.92,0H50.56z"/>
        </g>
      </svg>
      <span class="tooltip">Vue.js</span>
    `}
  />
);

export default VueIcon;
