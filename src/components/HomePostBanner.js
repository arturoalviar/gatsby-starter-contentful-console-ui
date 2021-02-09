import React from 'react'
import Img from 'gatsby-image'
import { Box, Container, Heading } from '@chakra-ui/react'

import { absoluteFullStyles, beforeAfterAbsoluteStyles } from '@styles/layout'

const HomePostBanner = ({ posts, banner }) => {
  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      bottom="100%"
      w="100%"
      h="100%"
      overflow="hidden"
      pointerEvents="none"
      transition="opacity .2s ease-in-out"
      style={{ zIndex: '1' }}
    >
      {posts.edges.map(({ node }) => {
        const { id, title, banner: bannerSharp } = node

        return (
          <Box
            className={`banner-${id}`}
            key={`banner-${id}`}
            overflow="hidden"
            opacity={banner === id ? '1' : 0}
            transition="opacity .2s ease-in-out"
            _before={{
              ...beforeAfterAbsoluteStyles,
              background: 'linear-gradient(to bottom, transparent, black)',
            }}
          >
            <Img
              fluid={bannerSharp.localFile.childImageSharp.fluid}
              style={{
                ...absoluteFullStyles,
                filter: 'blur(5px)',
                transform: 'scale(1.1)',
              }}
            />
            <Box
              pos="absolute"
              left={0}
              bottom={0}
              width="100%"
              zIndex="docked"
            >
              <Container
                width="100%"
                maxWidth="1920px"
                px={{ base: 4, lg: 12 }}
                pb={12}
              >
                <Heading
                  as="h1"
                  color="gray.100"
                  fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
                  fontWeight="extrabold"
                >
                  {title}
                </Heading>
              </Container>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default HomePostBanner
