const gql = String.raw

const allContentfulPostQuery = gql`
  query AllContentfulPost {
    allContentfulPost(sort: { fields: publishedOn, order: DESC }) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`

module.exports = allContentfulPostQuery
