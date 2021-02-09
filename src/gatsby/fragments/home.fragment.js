import { graphql } from 'gatsby'

export const homeFragment = graphql`
  fragment HomePosts on ContentfulPostConnection {
    edges {
      node {
        id
        title
        slug
        thumbnail {
          localFile {
            childImageSharp {
              fluid(maxWidth: 512, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        banner {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
