import SVGInline from 'react-svg-inline';

const AzureDevOpsIcon = () => (
  <SVGInline
    className="azuredevops-icon"
    classSuffix=""
    title="Azure DevOps"
    fill="#121415"
    svg={`
      <svg viewBox="0 0 64 64">
        <path d="M48,0V55L0,47.84l16.77,5.64,0,0,0,0L48,64l16-6.66V6.66ZM8,34,3,32.85V22.66l3.56-4.42L20,13.06V9.32l10.39,8.16L8,22Zm22,3V17.33l10-1.46V38.06l-9,7.26L17,40.79v4.55L7.63,34Z"/>
      </svg>
    `}
  />
);

export default AzureDevOpsIcon;
