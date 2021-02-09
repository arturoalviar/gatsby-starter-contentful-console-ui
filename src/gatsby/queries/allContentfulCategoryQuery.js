const gql = String.raw

const allContentfulCategoryQuery = gql`
  query AllContentfulCategory {
    allContentfulCategory {
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

module.exports = allContentfulCategoryQuery
