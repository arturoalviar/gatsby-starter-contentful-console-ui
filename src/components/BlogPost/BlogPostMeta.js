import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react'

const BlogPostMeta = ({ post }) => {
  const { author, category, publishedOn } = post

  return (
    <>
      {category && (
        <Flex direction="row" justify="center" mb={10}>
          <Box bg="primary.600" px={3} py={1}>
            <Text
              color="primary.50"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
            >
              <Link as={GatsbyLink} to={`/categories/${category.slug}`}>
                {category.name}
              </Link>
            </Text>
          </Box>
        </Flex>
      )}
      <Stack direction="row" mb={8} justify="center" align="center">
        {author && (
          <Text fontWeight="bold" fontSize="xs">
            <Link as={GatsbyLink} to={`/authors/${author.slug}`}>
              By {author.name}
            </Link>{' '}
            |
          </Text>
        )}
        {author && author.twitterHandle && author.twitterUrl && (
          <Text fontWeight="bold" fontSize="xs">
            <Link href={author.twitterUrl} isExternal>
              @{author.twitterHandle} |
            </Link>
          </Text>
        )}
        <Text fontWeight="bold" fontSize="xs">
          {publishedOn}
        </Text>
      </Stack>
    </>
  )
}

export default BlogPostMeta
