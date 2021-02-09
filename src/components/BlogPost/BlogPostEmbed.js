import React from 'react'
import { AspectRatio, Box, Link } from '@chakra-ui/react'

const BlogPostEmbed = ({ title = 'No title available', url }) => {
  if (url.includes('youtube')) {
    return (
      <AspectRatio ratio={16 / 9} my={10}>
        <iframe
          title={title}
          src={url}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    )
  } else {
    return (
      <Box>
        <Link href={url}>{title}</Link>
      </Box>
    )
  }
}

export default BlogPostEmbed
