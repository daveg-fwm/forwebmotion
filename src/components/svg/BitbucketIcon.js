import SVGInline from 'react-svg-inline';

const BitbucketIcon = () => (
  <SVGInline
    component="div"
    className="bitbucket-icon"
    classSuffix=""
    accessibilityLabel="Bitbucket"
    fill="#121415"
    svg={`
      <svg x="0px" y="0px" viewBox="0 0 62.42189 56.13034" style="enable-background:new 0 0 62.42189 56.13034;" xml:space="preserve">
        <path d="M2.02579,0.00017C0.92132-0.01408,0.01441,0.86973,0.00017,1.97421
          c-0.00149,0.11584,0.00708,0.2316,0.02563,0.34596l8.49,51.54c0.21835,1.3019,1.33997,2.25906,2.66,2.27h40.73
          c0.99079,0.01275,1.84155-0.70189,2-1.68l8.49-52.12c0.17682-1.09032-0.56372-2.11755-1.65404-2.29437
          c-0.11436-0.01855-0.23011-0.02712-0.34596-0.02563L2.02579,0.00017z M37.77579,37.25017h-13l-3.52-18.39h19.67L37.77579,37.25017z"
          />
      </svg>
      <span class="tooltip">Bitbucket</span>
    `}
  />
);

export default BitbucketIcon;
