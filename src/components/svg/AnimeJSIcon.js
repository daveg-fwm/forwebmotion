import SVGInline from 'react-svg-inline';

const AnimeJSIcon = () => (
  <SVGInline
    component="div"
    className="animejs-icon"
    classSuffix=""
    accessibilityLabel="Anime.js animation library"
    svg={`
      <svg viewBox="0 0 1000 240">
        <g id="anime-mini-logo" fill="none" fill-rule="evenodd" stroke-linecap="square">
          <path id="Path-18-Copy-66" stroke="#121415" stroke-width="40" d="M30 20h130c9.996 0 10 40 10 60v140H41c-11.004 0-11-40-11-60s-.004-60 10-60h110"/>
          <path id="Path-18-Copy-67" stroke="#121415" stroke-width="40" d="M850 140h110c10 0 10-40 10-60s0-60-10-60H840c-10 0-10 40-10 60v80c0 20 0 60 10 60h130"/>
          <path id="Path-18-Copy-68" stroke="#121415" stroke-width="40" d="M430 100v120"/>
          <path id="Path-18-Copy-69" stroke="#121415" stroke-width="40" d="M430 20.2v.6"/>
          <path id="Path-18-Copy-71" stroke="#121415" stroke-width="40" d="M370 220V80c0-20 0-60-10-60H240c-10 0-10 40-10 60v140"/>
          <path id="Path-18-Copy-74" stroke="#121415" stroke-width="40" d="M770 220V80c0-20 0-60-10-60H500c-10 0-10 40-10 60v140"/>
        </g>
      </svg>
      <span class="tooltip">Anime.js animation library</span>
    `}
  />
);

export default AnimeJSIcon;
