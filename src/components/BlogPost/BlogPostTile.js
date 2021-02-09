import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, useTheme } from '@chakra-ui/react'

import { tileBeforeStyles, tileBeforeActiveStyles } from '@styles/blogPost'

const MotionLink = motion.custom(Link)

const BlogPostTile = ({ post, variants, handleOnHover }) => {
  const theme = useTheme()
  const { id, title, slug, thumbnail } = post
  const { fluid } = thumbnail.localFile.childImageSharp

  return (
    <MotionLink
      variants={variants}
      as={GatsbyLink}
      to={`/blog/${slug}`}
      display="block"
      pos="relative"
      boxShadow="md"
      _before={tileBeforeStyles(theme)}
      _focus={tileBeforeActiveStyles}
      _hover={tileBeforeActiveStyles}
      onFocus={() => {
        handleOnHover(id)
      }}
      onMouseOver={() => {
        handleOnHover(id)
      }}
      onTouchStart={() => {
        handleOnHover(id)
      }}
      onBlur={() => {
        handleOnHover(null)
      }}
      onMouseLeave={() => {
        handleOnHover(null)
      }}
      onTouchEnd={() => {
        handleOnHover(null)
      }}
    >
      <Box w={{ base: '228px', lg: '512px' }}>
        <Img fluid={fluid} alt={`Go to blog post: ${title}`} />
      </Box>
    </MotionLink>
  )
}

BlogPostTile.propTypes = {
  post: PropTypes.object,
}

export default BlogPostTile
