import React from 'react'
import { Link as GatsbyLink, graphql } from 'gatsby'
import { Container, Box, Link, Text } from '@chakra-ui/react'

import SEO from '@components/SEO'
import PageHeading from '@components/PageHeading'
import SingePageLayout from '@components/SingePageLayout'
import PagePagination from '@components/PagePagination'

const CategoriesPage = ({
  data: { categories },
  pageContext: { currentPage, numberOfPages },
}) => {
  return (
    <SingePageLayout>
      <SEO title="Categories" />
      <Container maxWidth="5xl">
        <PageHeading title="Categories" />
        {categories.edges.map(({ node: category }) => {
          const { id, name, slug, posts } = category
          return (
            <Box mb={4} key={id}>
              <Text as="h3">
                <Link as={GatsbyLink} to={`/categories/${slug}`}>
                  {name} ({posts.length})
                </Link>
              </Text>
            </Box>
          )
        })}
        <PagePagination
          baseURL="categories"
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </Container>
    </SingePageLayout>
  )
}

export const categoriesQuery = graphql`
  query CategoriesQuery($skip: Int!, $limit: Int!) {
    categories: allContentfulCategory(
      sort: { fields: name, order: ASC }
      limit: $limit
      skip: $skip
    ) {
      ...CategoriesCollection
    }
  }
`

export default CategoriesPage
