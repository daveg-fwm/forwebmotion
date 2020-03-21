import SVGInline from 'react-svg-inline';

const VWOIcon = () => (
  <SVGInline
    component="div"
    className="vwo-icon"
    classSuffix=""
    accessibilityLabel="VWO Platform"
    fill="#121415"
    svg={`
      <svg x="0px" y="0px" viewBox="0 0 300 100" style="enable-background:new 0 0 300 100;" xml:space="preserve">
        <path d="M250.498,0c-1.842,0-4.052,0-5.894,0.367l-10.683,18.7c4.789-2.934,10.683-4.4,16.577-4.4
          c19.15599,0,34.99599,15.766,34.99599,34.833s-15.84,34.833-34.996,34.833s-34.62799-15.4-34.996-34.466l-11.05099,18.7
          C211.81799,86.533,229.869,99,250.13,99c27.26001,0,49.73099-22.367,49.73099-49.5C300.23001,22.367,277.758,0,250.498,0z
            M100.2,51.7l8.472-14.667l19.156,32.634l22.102-37.767L172.032,69.667L209.976,5.5c1.842-3.3,5.526-5.5,9.578-5.5h10.683
          L172.033,99L149.931,61.233L127.828,99l-27.629-47.3H100.2z M116.04,0L57.836,99L0,0h10.683c4.052,0,7.736,2.2,9.578,5.5
          l37.575,64.533L95.779,5.5c1.842-3.3,5.525-5.5,9.578-5.5H116.04z"/>
      </svg>
      <span class="tooltip">VWO Platform</span>
    `}
  />
);

export default VWOIcon;
