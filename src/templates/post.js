import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container } from '@chakra-ui/react'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import ContentfulContent from '@components/ContentfulContent'
import {
  BlogPostBanner,
  BlogPostMeta,
  BlogPostPagination,
} from '@components/BlogPost'

const PostTemplate = ({ data: { post, nextPost, prevPost } }) => {
  const { title } = post

  return (
    <Layout>
      <SEO title={title} />
      <Box width="100%">
        <BlogPostBanner post={post} />
        <Container maxWidth="80ch" py={12}>
          <BlogPostMeta post={post} />
          <ContentfulContent node={post}></ContentfulContent>
        </Container>
        <BlogPostPagination prevPost={prevPost} nextPost={nextPost} />
      </Box>
    </Layout>
  )
}

export const postQuery = graphql`
  query($id: String!, $prevID: String!, $nextID: String!) {
    post: contentfulPost(id: { eq: $id }) {
      ...BlogPost
    }
    prevPost: contentfulPost(id: { eq: $prevID }) {
      ...PaginationItem
    }
    nextPost: contentfulPost(id: { eq: $nextID }) {
      ...PaginationItem
    }
  }
`

export default PostTemplate
