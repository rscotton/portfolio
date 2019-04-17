// TODO: Visit https://github.com/sass/node-sass and configure sass properly!

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["/src/sass/"],
      },
    }
  ]
}