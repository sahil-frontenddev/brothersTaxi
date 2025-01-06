const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: node.fileAbsolutePath.includes("content/blog") ? "content/blog" : "content/vehicles",
    });
    
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      blogs: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      vehicles: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/vehicles/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error("Error loading Markdown files", result.errors);
  }

  // Create blog pages
  result.data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // Create vehicle pages
  result.data.vehicles.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/vehicle-page.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
