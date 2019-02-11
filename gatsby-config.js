module.exports = {
  siteMetadata: {
    title: 'forwebmotion',
    description: "A Web Developer's portfolio - Cape Town, South Africa.",
    author: '@forwebmotion',
    menuLinks: [
      {
        name: 'Red Sofa Cafe',
        link: '/red-sofa-cafe',
      },
      {
        name: 'IoT Global Awards',
        link: '/iot-global-awards',
      },
      {
        name: 'WKM Payment Gateway',
        link: '/wkm-payment-gateway',
      },
      {
        name: 'About forwebmotion',
        link: '/about',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'forwebmotion',
        short_name: 'fwm',
        start_url: '/',
        background_color: '#40afe9',
        theme_color: '#40afe9',
        display: 'browser',
        icon: 'src/images/forwebmotion-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    // this (optional) plugin enables Progressive Web App  Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
};
