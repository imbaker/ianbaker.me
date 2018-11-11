require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
  systemvars: true
})

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
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'ian-bakers-website',
        accessToken: `${process.env.API_KEY}`
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
