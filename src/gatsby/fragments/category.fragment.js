import { graphql } from 'gatsby'

export const categoryPageFragment = graphql`
  fragment CategoryPage on ContentfulCategory {
    name
    slug
  }
`

export const categoryPostsFragment = graphql`
  fragment CategoryPosts on ContentfulPostConnection {
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
        author {
          name
          slug
        }
      }
    }
  }
`

export const categoriesFragment = graphql`
  fragment CategoriesCollection on ContentfulCategoryConnection {
    edges {
      node {
        id
        name
        slug
        posts: post {
          id
        }
      }
    }
  }
`
