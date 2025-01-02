module.exports = {
  siteMetadata: {
    title: 'Brothers taxi service.',
    description: 'pathankot to Himachal and Kashmir Taxi Service.',
    author: 'ThemesCamp'
  },
  plugins: [
    'gatsby-plugin-resolve-src',"gatsby-plugin-decap-cms",{
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "src/images"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "src/_posts/post/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "vehicleList",
        "path": "src/_vehicles/vehicle/"
      },
      __key: "vehicleList"
    }
  ],
  trailingSlash: "always"
}