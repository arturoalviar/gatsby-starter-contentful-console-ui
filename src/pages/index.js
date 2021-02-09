import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Flex } from '@chakra-ui/react'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import BlogPosts from '@components/BlogPosts'
import HomePostBanner from '@components/HomePostBanner'

const IndexPage = ({ data: { posts } }) => {
  const [currentPostBanner, setCurrentPostBanner] = useState(null)

  const updateCurrentBanner = banner => {
    setCurrentPostBanner(banner)
  }

  return (
    <Layout hasFooter={false}>
      <SEO title="Home" />
      <Flex
        direction="column"
        justify="center"
        minHeight="100%"
        width="100%"
        overflowY="hidden"
        zIndex="docked"
      >
        <BlogPosts posts={posts} handleOnHover={updateCurrentBanner} />
      </Flex>
      {<HomePostBanner posts={posts} banner={currentPostBanner} />}
    </Layout>
  )
}

export const homepageQuery = graphql`
  query HomepageQuery {
    posts: allContentfulPost(
      limit: 7
      sort: { fields: publishedOn, order: DESC }
    ) {
      ...HomePosts
    }
  }
`

export default IndexPage
