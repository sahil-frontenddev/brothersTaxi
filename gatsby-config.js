module.exports = {
  siteMetadata: {
    title: 'DK Tour & Travel service.',
    description: 'pathankot to Himachal and Kashmir Taxi Service.',
    author: 'Sahil Lalotra',
    siteUrl: `https://www.dktourandtravel.in`,
  },
  plugins: [
    'gatsby-plugin-resolve-src',"gatsby-plugin-decap-cms",{
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/_posts/blog"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "vehicleList",
        "path": "./src/_vehicles/vehicle"
      },
      __key: "vehicleList"
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sitemap`
  ],
  trailingSlash: "always"
}

