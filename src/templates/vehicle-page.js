import React from "react";
import { graphql } from "gatsby";

const VehiclePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <div>
      <h1>{frontmatter.name}</h1>
      <p>Type: {frontmatter.type}</p>
      {frontmatter.image && <img src={frontmatter.image} alt={frontmatter.name} />}
      <div dangerouslySetInnerHTML={{ __html: frontmatter.description }} />
    </div>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        type
        image
        description
      }
    }
  }
`;

export default VehiclePage;
