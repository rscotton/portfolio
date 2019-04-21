module.exports = {
  siteMetadata: {
    title: `Portfolio`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
  ]
}