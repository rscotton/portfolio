// TODO: Visit https://github.com/sass/node-sass and configure sass properly!

module.exports = {
  siteMetadata: {
    title: `Portfoliio`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src/sass/"],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ]
}