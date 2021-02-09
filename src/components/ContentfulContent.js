import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Heading, List, ListItem, Link, Text } from '@chakra-ui/react'

import { BlogPostEmbed, BlogPostImage } from './BlogPost'

const ContentfulContent = ({ node }) => {
  const { content } = node
  const { references } = content

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (_, children) => (
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
          mb={2}
        >
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (_, children) => (
        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }} mb={2}>
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <Text
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          lineHeight="1.8"
          mb={4}
        >
          {children}
        </Text>
      ),
      [BLOCKS.LIST_ITEM]: node => (
        <ListItem fontSize="xl" lineHeight="2">
          {node.content[0].content[0].value}
        </ListItem>
      ),
      [BLOCKS.UL_LIST]: (_, children) => (
        <List styleType="ul" pl={5} mb={4}>
          {children}
        </List>
      ),
      [BLOCKS.OL_LIST]: (_, children) => (
        <List styleType="ol" pl={5} mb={4}>
          {children}
        </List>
      ),
      [INLINES.ENTRY_HYPERLINK]: node => {
        const { id } = node.data.target.sys
        const { slug, internal } = references.find(
          ({ contentful_id }) => contentful_id === id
        )
        if (internal.type === 'ContentfulPost') {
          return (
            <Link
              as={GatsbyLink}
              to={`/blog/${slug}`}
              variant="primary"
              borderBottom="2px solid currentColor"
            >
              {node.content[0].value}
            </Link>
          )
        }
      },
      [INLINES.HYPERLINK]: node => {
        const location = typeof window !== 'undefined' ? window.location : ''
        const isExternal = location && !node.data.uri.startsWith(location.host)

        return (
          <Link
            href={node.data.uri}
            variant="primary"
            borderBottom="2px solid currentColor"
            isExternal={isExternal}
          >
            {node.content[0].value}
          </Link>
        )
      },
      [BLOCKS.QUOTE]: (_, children) => {
        return (
          <Box
            as="blockquote"
            borderLeft="3px solid currentcolor"
            pl={4}
            fontSize="xl"
            mb={4}
            fontStyle="italic"
          >
            {children}
          </Box>
        )
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const { id } = node.data.target.sys
        const { url, title } = references.find(
          ({ contentful_id }) => contentful_id === id
        )
        return url && <BlogPostEmbed url={url} title={title} />
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { id } = node.data.target.sys
        const { fluid } = references.find(
          ({ contentful_id }) => contentful_id === id
        )

        return fluid && <BlogPostImage fluid={fluid} />
      },
    },
  }

  return (
    <div>{documentToReactComponents(JSON.parse(content.raw), options)}</div>
  )
}
export default ContentfulContent
