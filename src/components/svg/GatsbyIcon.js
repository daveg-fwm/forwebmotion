import SVGInline from 'react-svg-inline';

const GatsbyIcon = () => (
  <SVGInline
    component="div"
    className="gatsby-icon"
    classSuffix=""
    accessibilityLabel="Gatsby V2"
    svg={`
      <svg x="0px" y="0px" viewBox="0 0 28 28" style="enable-background:new 0 0 28 28;" xml:space="preserve">
        <path fill="#FFFFFF" d="M25,14h-7v2h4.8c-0.7,3-2.9,5.5-5.8,6.5L5.5,11c1.2-3.5,4.6-6,8.5-6c3,0,5.7,1.5,7.4,3.8l1.5-1.3
        C20.9,4.8,17.7,3,14,3C8.8,3,4.4,6.7,3.3,11.6l13.2,13.2C21.3,23.6,25,19.2,25,14z M3,14.1c0,2.8,1.1,5.5,3.2,7.6s4.9,3.2,7.6,3.2
        L3,14.1z"/>
        <path fill="#121415" d="M14,0C6.3,0,0,6.3,0,14s6.3,14,14,14s14-6.3,14-14S21.7,0,14,0z M6.2,21.8C4.1,19.7,3,16.9,3,14.2L13.9,25
        C11.1,24.9,8.3,23.9,6.2,21.8z M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5l-1.5,1.3C19.7,6.5,17,5,14,5
        c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z"/>
      </svg>
      <span class="tooltip">Gatsby V2</span>
    `}
  />
);

export default GatsbyIcon;
