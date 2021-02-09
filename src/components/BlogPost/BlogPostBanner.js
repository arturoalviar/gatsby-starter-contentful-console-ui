import React from 'react'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { Box, Container, Heading } from '@chakra-ui/react'

import { absoluteFullStyles, beforeAfterAbsoluteStyles } from '@styles/layout'

const BlogPostBanner = ({ post }) => {
  const { title, banner } = post

  return (
    <Box pos="relative" width="100%" height="100vh" overflow="hidden">
      <Box
        pos="absolute"
        width="100%"
        height="100vh"
        style={{ zIndex: '1' }}
        _before={{
          ...beforeAfterAbsoluteStyles,
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />
      <motion.div
        animate={{ filter: 'blur(0)', transform: 'scale(1)' }}
        transition={{ duration: 0.4 }}
        style={{
          ...absoluteFullStyles,
          filter: 'blur(5px)',
          transform: 'scale(1.1)',
        }}
      >
        <Img
          fluid={banner.localFile.childImageSharp.fluid}
          style={absoluteFullStyles}
        />
      </motion.div>

      <Box
        pos="absolute"
        left={0}
        bottom={0}
        width="100%"
        style={{ zIndex: '5' }}
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
}

export default BlogPostBanner
