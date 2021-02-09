import React from 'react'
import { Link as GatsbyLink, graphql } from 'gatsby'
import { Container, Box, Link, Text } from '@chakra-ui/react'

import SEO from '@components/SEO'
import PageHeading from '@components/PageHeading'
import SingePageLayout from '@components/SingePageLayout'
import PagePagination from '@components/PagePagination'

const AuthorsPage = ({
  data: { authors },
  pageContext: { currentPage, numberOfPages },
}) => {
  return (
    <SingePageLayout>
      <SEO title="Authors" />
      <Container maxWidth="5xl">
        <PageHeading title="Authors" />
        {authors.edges.map(({ node: author }) => {
          const { id, name, slug, twitterUrl, twitterHandle, posts } = author
          return (
            <Box mb={4} key={id}>
              <Text as="h3">
                <Link as={GatsbyLink} to={`/authors/${slug}`}>
                  {name} ({posts.length})
                </Link>
              </Text>
              <Link href={twitterUrl} isExternal>
                @{twitterHandle}
              </Link>
            </Box>
          )
        })}
        <PagePagination
          baseURL="authors"
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </Container>
    </SingePageLayout>
  )
}

export const authorsQuery = graphql`
  query AuthorsQuery($skip: Int!, $limit: Int!) {
    authors: allContentfulAuthor(
      sort: { fields: name, order: ASC }
      limit: $limit
      skip: $skip
    ) {
      ...AuthorsCollection
    }
  }
`

export default AuthorsPage
