import React from 'react'
import { Link as GatsbyLink, graphql } from 'gatsby'
import { Container, Link } from '@chakra-ui/react'

import SEO from '@components/SEO'
import PageHeading from '@components/PageHeading'
import SingePageLayout from '@components/SingePageLayout'
import PagePagination from '@components/PagePagination'
import { BlogPostCompactCard } from '@components/BlogPost'

const CategoryPage = ({
  data: { category, posts },
  pageContext: { currentPage, numberOfPages },
}) => {
  const { name, slug } = category

  return (
    <SingePageLayout>
      <SEO title={name} />
      <Container maxWidth="5xl">
        <PageHeading title={name} mb={10} />
        {posts.edges.map(({ node: post }) => (
          <BlogPostCompactCard key={post.id} post={post}>
            <>
              By{' '}
              <Link
                as={GatsbyLink}
                to={`/authors/${post.author.slug}`}
                variant="accent"
              >
                {post.author.name}
              </Link>{' '}
              |
            </>
          </BlogPostCompactCard>
        ))}
        <PagePagination
          baseURL={`categories/${slug}`}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </Container>
    </SingePageLayout>
  )
}

export const categoryQuery = graphql`
  query($id: String!, $skip: Int!, $limit: Int!) {
    category: contentfulCategory(id: { eq: $id }) {
      ...CategoryPage
    }
    posts: allContentfulPost(
      filter: { category: { id: { eq: $id } } }
      limit: $limit
      skip: $skip
    ) {
      ...CategoryPosts
    }
  }
`

export default CategoryPage
