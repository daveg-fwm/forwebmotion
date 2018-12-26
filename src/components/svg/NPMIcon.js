import SVGInline from 'react-svg-inline';

const NPMIcon = () => (
  <SVGInline
    className="npm-icon"
    classSuffix=""
    title="npm"
    fill="#121415"
    svg={`
      <svg viewBox="0 0 128 128">
        <path d="M2,38.5H126V82.21H64V89.5H36.44V82.21H2ZM8.89,74.93H22.67V53.07h6.89V74.93h6.89V45.79H8.89ZM43.33,45.79V82.21H57.11V74.93H70.89V45.79Zm13.78,7.29H64V67.64H57.11Zm20.67-7.29V74.93H91.56V53.07h6.89V74.93h6.89V53.07h6.89V74.93h6.89V45.79Z"/>
      </svg>
    `}
  />
);

export default NPMIcon;
