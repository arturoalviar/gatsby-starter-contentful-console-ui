import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Box,
  Container,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'

const AppFooter = () => {
  const bg = useColorModeValue('gray.100', 'gray.900')
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          authorWebsite
        }
      }
    }
  `)

  const { author, authorWebsite } = site.siteMetadata

  return (
    <Box as="footer" bg={bg} py={8}>
      <Container centerContent>
        <Text fontSize="sm" fontWeight="medium">
          Made with{' '}
          <Link href="https://www.gatsbyjs.com/" isExternal>
            GatsbyJS
          </Link>{' '}
          and <Icon color="primary.600" fill="primary.600" as={FiHeart} /> by{' '}
          <Link href={authorWebsite} isExternal>
            {author}
          </Link>
        </Text>
      </Container>
    </Box>
  )
}

export default AppFooter
