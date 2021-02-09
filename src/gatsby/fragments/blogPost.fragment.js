import { graphql } from 'gatsby'

export const blogPotFragment = graphql`
  fragment BlogPost on ContentfulPost {
    id
    slug
    title
    publishedOn(formatString: "MMMM Do, YYYY")
    banner {
      localFile {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
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
    content {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          fluid(maxWidth: 1080, quality: 80) {
            ...GatsbyContentfulFluid
          }
        }
        ... on ContentfulEmbed {
          contentful_id
          title
          url
        }
        ... on ContentfulPost {
          contentful_id
          slug
          internal {
            type
          }
        }
      }
    }
  }
`

export const paginationItemFragment = graphql`
  fragment PaginationItem on ContentfulPost {
    slug
    title
    banner {
      localFile {
        childImageSharp {
          fluid(maxWidth: 720, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
