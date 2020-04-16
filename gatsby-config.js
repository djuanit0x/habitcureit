const netlifyInstance = "https://habitcureit.netlify.com"
if (netlifyInstance === "") {
  console.warn(`
**************************
https://www.netlify.com/docs/identity/
**************************
`)
}

// {
//   resolve: `gatsby-plugin-netlify-identity`,
//   options: {
//     url: netlifyInstance,
//   },
// },

module.exports = {
  siteMetadata: {
    title: "Habitcureit",
    description: `Good habits help to combat the spread of coronavirus one time at a time`,
    author: `@djuanit0x`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
