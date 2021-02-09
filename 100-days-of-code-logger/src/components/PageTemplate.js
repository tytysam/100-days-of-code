import React from "react"
import Pagination from "./Pagination.js"
import Layout from "./layout.js"
import SEO from "./seo.js"
import GridLayout from "./GridLayout.js"

const PageTemplate = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <GridLayout
        data={data.allMarkdownRemark.nodes}
        siteTitle={data.site.siteMetadata.title}
      />
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/pages/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___day], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        html
        frontmatter {
          day
          title
          publishDate
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
