import { graphql } from 'gatsby'

export const blogFragment = graphql`
  fragment BlogPosts on ContentfulPostConnection {
    edges {
      node {
        id
        title
        slug
        publishedOn(formatString: "MMMM Do, YYYY")
        author {
          name
          slug
          twitterUrl
          twitterHandle
        }
        category {
          name
          slug
        }
        thumbnail {
          localFile {
            childImageSharp {
              fluid(maxWidth: 512, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
