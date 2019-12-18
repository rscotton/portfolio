module.exports = {
  siteMetadata: {
    title: `Portfolio`,
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
  ],
};
