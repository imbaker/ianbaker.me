module.exports = {
  siteMetadata: {
    title: 'Ian Baker'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    'gatsby-transformer-json',
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'src/utils/typography.js'
    //   }
    // },
    // 'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WMMDJ3N',
        includeInDevelopment: true
      }
    }
  ]
}
