const gql = String.raw

const allContentfulAuthorQuery = gql`
  query AllContentfulAuthor {
    allContentfulAuthor {
      edges {
        node {
          id
          slug
          post {
            id
          }
        }
      }
    }
  }
`

module.exports = allContentfulAuthorQuery
