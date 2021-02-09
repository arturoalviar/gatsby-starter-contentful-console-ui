import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'
import {
  Box,
  Link,
  SimpleGrid,
  Text,
  useTheme,
  useColorModeValue,
} from '@chakra-ui/react'

import { beforeAfterAbsoluteStyles } from '@styles/layout'

const BlogPostPagination = ({ prevPost, nextPost }) => {
  const { slug: prevSlug, title: prevTitle } = prevPost
  const { slug: nextSlug, title: nextTitle } = nextPost

  const theme = useTheme()
  const textColor = useColorModeValue('black', 'white')
  const gradient = useColorModeValue(
    theme.colors.gray[100],
    theme.colors.gray[900]
  )

  const beforeStyles = (direction = 'left') => ({
    ...beforeAfterAbsoluteStyles,
    background: `linear-gradient(to ${direction}, transparent, ${gradient})`,
  })
  const afterStyles = (direction = 'bottom') => ({
    ...beforeAfterAbsoluteStyles,
    background: `linear-gradient(to ${direction}, transparent, ${gradient})`,
  })

  return (
    <Box width="100%" maxWidth="1280px" mx="auto" mb={10}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 0, lg: 4 }}
        gridAutoRows="1fr"
        width="100%"
      >
        <Box pos="relative">
          <Link
            pos="relative"
            display="block"
            as={GatsbyLink}
            to={`/blog/${prevSlug}`}
          >
            <Box
              pos="relative"
              overflow="hidden"
              pointerEvents="none"
              _before={beforeStyles()}
              _after={{
                base: afterStyles('top'),
                md: {
                  background: `linear-gradient(to bottom, transparent, ${gradient})`,
                },
              }}
            >
              <Img fluid={prevPost.banner.localFile.childImageSharp.fluid} />
            </Box>

            <Box
              color={textColor}
              pos="absolute"
              left="1rem"
              top={{ base: '1rem', lg: 'unset' }}
              bottom={{ lg: '1rem' }}
              zIndex="docked"
            >
              <Text fontSize="sm" fontWeight="extrabold" mb={2}>
                previous post
              </Text>
              <Text>{prevTitle}</Text>
            </Box>
          </Link>
        </Box>
        <Box pos="relative">
          <Link
            pos="relative"
            display="block"
            as={GatsbyLink}
            to={`/blog/${nextSlug}`}
          >
            <Box
              pos="relative"
              overflow="hidden"
              _before={beforeStyles('right')}
              _after={afterStyles()}
            >
              <Img fluid={nextPost.banner.localFile.childImageSharp.fluid} />
            </Box>
            <Box
              color={textColor}
              pos="absolute"
              right="1rem"
              bottom="1rem"
              textAlign="right"
              zIndex="docked"
            >
              <Text fontSize="sm" fontWeight="extrabold" mb={2}>
                next post
              </Text>
              <Text>{nextTitle}</Text>
            </Box>
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default BlogPostPagination
