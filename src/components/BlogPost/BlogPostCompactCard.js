import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'
import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

const BlogPostCompactCard = ({ post, children }) => {
  const { title, slug, thumbnail, publishedOn } = post

  return (
    <Box mb={5}>
      <Flex>
        <Box width="128px" mr={4}>
          <Link display="block" as={GatsbyLink} to={`/blog/${slug}`}>
            <Img
              fluid={thumbnail.localFile.childImageSharp.fluid}
              alt={`Go to blog post: ${title}`}
            />
          </Link>
        </Box>
        <Box flex="1">
          <Heading
            as="h2"
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            fontWeight="bold"
            noOfLines={2}
          >
            <Link as={GatsbyLink} to={`/blog/${slug}`}>
              {title}
            </Link>
          </Heading>
          <Stack direction="row" mt={2} align="center">
            <Text fontWeight="medium" fontSize="sm">
              {children}
            </Text>
            <Text fontWeight="medium" fontSize="xs">
              {publishedOn}
            </Text>
          </Stack>
        </Box>
      </Flex>
      <Divider pt={5} />
    </Box>
  )
}

export default BlogPostCompactCard
