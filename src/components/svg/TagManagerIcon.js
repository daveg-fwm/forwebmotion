import SVGInline from 'react-svg-inline';

const TagManagerIcon = () => (
  <SVGInline
    component="div"
    className="tag-manager-icon"
    classSuffix=""
    accessibilityLabel="Google Tag Manager"
    fill="#121415"
    svg={`
      <svg x="0px" y="0px" viewBox="0 0 175.9975 177.0025" style="enable-background:new 0 0 175.9975 177.0025;" xml:space="preserve">
        <polygon points="103.305,168.7925 72.755,139.0025 138.36499,72.00249 169.995,103.00249 "/>
        <path d="M103.43501,37.0825l-30.44-31.08L6.435,71.9325c-8.58,8.58-8.58,22.49,0,31.08L71.995,169.0025l31-29L53.045,87.4725
          L103.43501,37.0825z"/>
        <path d="M169.55499,72.4425l-65.99999-66c-8.59-8.59-22.52-8.59-31.11,0s-8.59,22.52,0,31.11l65.99999,66
          c8.59,8.59,22.52,8.59,31.11,0S178.14499,81.03249,169.55499,72.4425z"/>
        <circle fill="#FFFFFF" stroke="#121415" stroke-width="2" stroke-miterlimit="10" cx="87.495" cy="154.5025" r="21.5"/>
      </svg>
      <span class="tooltip">Google Tag Manager</span>
    `}
  />
);

export default TagManagerIcon;
