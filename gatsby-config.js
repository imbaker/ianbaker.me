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
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography.js'
            }
        }
    ]
}