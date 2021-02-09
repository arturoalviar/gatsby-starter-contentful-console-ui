import { graphql } from 'gatsby'

export const authorPageFragment = graphql`
  fragment AuthorPage on ContentfulAuthor {
    name
    slug
    twitterUrl
    twitterHandle
  }
`

export const authorPostsFragment = graphql`
  fragment AuthorPosts on ContentfulPostConnection {
    edges {
      node {
        id
        title
        slug
        publishedOn(formatString: "MMMM Do, YYYY")
        thumbnail {
          localFile {
            childImageSharp {
              fluid(maxWidth: 320, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        category {
          name
          slug
        }
      }
    }
  }
`

export const authorsFragment = graphql`
  fragment AuthorsCollection on ContentfulAuthorConnection {
    edges {
      node {
        id
        name
        slug
        twitterUrl
        twitterHandle
        posts: post {
          id
        }
      }
    }
  }
`
