module.exports = {
  siteMetadata: {
    title: 'Brothers taxi service.',
    description: 'pathankot to Himachal and Kashmir Taxi Service.',
    author: 'Sahil Lalotra'
  },
  plugins: [
    'gatsby-plugin-resolve-src',"gatsby-plugin-decap-cms",{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/_posts/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'vehicles',
        path: `${__dirname}/src/_vehicles/vehicle`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images/uploads`,
      },
    },
    'gatsby-transformer-remark'
  ],
  trailingSlash: "always"
}

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Generate slug based on file path
    const slug = createFilePath({ node, getNode, basePath: `src/_posts/blog` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
