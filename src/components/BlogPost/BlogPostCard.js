import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react'

import { tileVariants } from '@styles/motion'

const MotionBox = motion.custom(Box)

const BlogPostCard = ({ post }) => {
  const cardBg = useColorModeValue('gray.200', 'gray.800')
  const { title, slug, author, category } = post
  const { fluid } = post.thumbnail.localFile.childImageSharp

  return (
    <MotionBox variants={tileVariants} bg={cardBg}>
      <Box pos="relative" overflow="hidden">
        <Box
          bg="primary.600"
          pos="absolute"
          top="0"
          left="0"
          p={2}
          zIndex="docked"
        >
          <Text fontWeight="bold" fontSize="xs">
            <Link
              as={GatsbyLink}
              to={`/categories/${category.slug}`}
              color="primary.50"
            >
              {category.name}
            </Link>
          </Text>
        </Box>
        <Link display="block" as={GatsbyLink} to={`/blog/${slug}`}>
          <Img fluid={fluid} alt={`Go to blog post: ${title}`} />
        </Link>
      </Box>
      <Box py={6} px={4}>
        <Text fontSize="lg" fontWeight="medium" noOfLines={1} mb={2}>
          <Link display="block" as={GatsbyLink} to={`/blog/${slug}`}>
            {title}
          </Link>
        </Text>
        <Text fontWeight="medium" fontSize="sm">
          By{' '}
          <Link as={GatsbyLink} to={`/authors/${author.slug}`} variant="accent">
            {author.name}
          </Link>
        </Text>
      </Box>
    </MotionBox>
  )
}

export default BlogPostCard
