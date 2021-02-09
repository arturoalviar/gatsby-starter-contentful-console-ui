import React from 'react'
import { Link as GatsbyLink, graphql } from 'gatsby'
import { Container, Box, Link, Text } from '@chakra-ui/react'

import SEO from '@components/SEO'
import PageHeading from '@components/PageHeading'
import SingePageLayout from '@components/SingePageLayout'
import PagePagination from '@components/PagePagination'
import { BlogPostCompactCard } from '@components/BlogPost'

const AuthorPage = ({
  data: { author, posts },
  pageContext: { currentPage, numberOfPages },
}) => {
  const { name, slug, twitterUrl, twitterHandle } = author
  const hasTwitter = twitterUrl && twitterHandle

  return (
    <SingePageLayout>
      <SEO title={name} />
      <Container maxWidth="5xl">
        <PageHeading title={name}>
          {hasTwitter && (
            <Box mt={2}>
              <Text fontWeight="medium">
                <Link variant="primary" href={twitterUrl} isExternal>
                  @{twitterHandle}
                </Link>
              </Text>
            </Box>
          )}
        </PageHeading>
        {posts.edges.map(({ node: post }) => {
          return (
            <BlogPostCompactCard key={post.id} post={post}>
              <Text fontWeight="medium" fontSize="sm">
                In{' '}
                <Link
                  as={GatsbyLink}
                  to={`/categories/${post.category.slug}`}
                  variant="accent"
                >
                  {post.category.name}
                </Link>{' '}
                |
              </Text>
            </BlogPostCompactCard>
          )
        })}
        <PagePagination
          baseURL={`authors/${slug}`}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </Container>
    </SingePageLayout>
  )
}

export const authorQuery = graphql`
  query($id: String!, $skip: Int!, $limit: Int!) {
    author: contentfulAuthor(id: { eq: $id }) {
      ...AuthorPage
    }
    posts: allContentfulPost(
      filter: { author: { id: { eq: $id } } }
      limit: $limit
      skip: $skip
    ) {
      ...AuthorPosts
    }
  }
`

export default AuthorPage
