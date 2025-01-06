import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      {frontmatter.thumbnail && <img src={frontmatter.thumbnail} alt={frontmatter.title} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        thumbnail
      }
      html
    }
  }
`;

export default BlogPost;
