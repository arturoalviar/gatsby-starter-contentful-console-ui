import React from 'react'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { Container, Divider, SimpleGrid, Heading } from '@chakra-ui/react'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import { BlogPostCard } from '@components/BlogPost'
import PagePagination from '@components/PagePagination'

import { stackVariants } from '@styles/motion'

const MotionSimpleGrid = motion.custom(SimpleGrid)

const BlogPage = ({
  data: { posts },
  pageContext: { currentPage, numberOfPages },
}) => (
  <Layout>
    <SEO title="Blog" />
    <Container pt={{ base: 28, lg: 24 }} maxWidth="8xl">
      <Heading
        as="h1"
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontWeight="extrabold"
        mb={5}
      >
        Blog
      </Heading>
      <Divider />
      <MotionSimpleGrid
        variants={stackVariants}
        initial="hidden"
        animate="show"
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        gridAutoRows="1fr"
        mt={10}
      >
        {posts.edges.map(({ node }) => (
          <BlogPostCard post={node} key={node.id} />
        ))}
      </MotionSimpleGrid>
      <PagePagination
        baseURL="blog"
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </Container>
  </Layout>
)

export const blogQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      sort: { fields: publishedOn, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      ...BlogPosts
    }
  }
`

export default BlogPage
