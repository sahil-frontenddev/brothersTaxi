const slugify = require('slugify');

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
  
    if (node.internal.type === "MarkdownRemark") {
      const slug = node.frontmatter.slug || slugify(node.frontmatter.title, { lower: true });
      createNodeField({
        node,
        name: "slug",
        value: slug,
      });
    }
  };
  