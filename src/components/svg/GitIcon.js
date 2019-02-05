import SVGInline from 'react-svg-inline';

const GitIcon = () => (
  <SVGInline
    component="div"
    className="git-icon"
    classSuffix=""
    accessibilityLabel="Git"
    fill="#121415"
    svg={`
      <svg x="0px" y="0px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
        <path d="M124.7,58.4L69.6,3.3c-3.2-3.2-8.3-3.2-11.5,0L46.7,14.7l14.5,14.5c3.4-1.1,7.2-0.4,9.9,2.3
          c2.7,2.7,3.5,6.6,2.3,10l14,14c3.4-1.2,7.3-0.4,10,2.3c3.8,3.8,3.8,9.9,0,13.7c-3.8,3.8-9.9,3.8-13.7,0c-2.8-2.8-3.5-7-2.1-10.5
          l-13-13l0,34.3c0.9,0.5,1.8,1.1,2.6,1.8c3.8,3.8,3.8,9.9,0,13.7c-3.8,3.8-9.9,3.8-13.7,0c-3.8-3.8-4.1-9.9-0.3-13.7
          c0.9-0.9,1.9-1.6,2.9-2.1V47.3c-1-0.5-1.9-1.2-2.9-2.1c-2.9-2.9-3.4-7.1-1.9-10.6L41,20.3L3.2,58.1c-3.2,3.2-3.2,8.3,0,11.5
          l55.1,55.1c3.2,3.2,8.3,3.2,11.5,0l54.9-54.9C127.9,66.7,127.9,61.6,124.7,58.4L124.7,58.4z"/>
      </svg>
      <span class="tooltip">Git</span>
    `}
  />
);

export default GitIcon;
