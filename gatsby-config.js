const config = require('./config')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
    authorHandle: config.authorHandle,
    authorWebsite: config.authorWebsite,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: '@chakra-ui/gatsby-plugin',
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.appName,
        short_name: config.shortName,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: config.display,
        icon: config.icon,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about`],
      },
    },
  ],
}
