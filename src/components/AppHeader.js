import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

import ThemeToggle from './AppThemeToggle'
import useScrollSpy from '@hooks/useScrollSpy'

const AppHeader = ({ siteTitle }) => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "console-ui-icon" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const currentBg = useColorModeValue('gray.100', 'gray.900')
  const { hasScrolled } = useScrollSpy()
  const bg = hasScrolled ? currentBg : 'transparent'

  return (
    <Box
      as="header"
      bg={bg}
      boxShadow={hasScrolled ? 'lg' : 'none'}
      position="fixed"
      w="100%"
      zIndex="raised"
      transition="all .2s ease"
    >
      <Container maxWidth="1920px" py={4} px={{ base: 4, lg: 12 }}>
        <Flex align="center">
          <Box
            bg="primary.600"
            w="64px"
            height="64px"
            borderRadius="full"
            overflow="hidden"
          >
            <Link display="block" as={GatsbyLink} to="/">
              <Img
                fluid={logo.childImageSharp.fluid}
                alt={`${siteTitle} logo`}
              />
            </Link>
          </Box>
          <Box ml="auto">
            <HStack>
              <Link
                as={GatsbyLink}
                to="/about"
                px={{ base: 2, lg: 4 }}
                mr={2}
                fontWeight="bold"
              >
                About
              </Link>
              <Link
                as={GatsbyLink}
                to="/blog"
                px={{ base: 2, lg: 4 }}
                mr={2}
                fontWeight="bold"
              >
                Blog
              </Link>
              <ThemeToggle />
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

AppHeader.propTypes = {
  siteTitle: PropTypes.string,
}

AppHeader.defaultProps = {
  siteTitle: ``,
}

export default AppHeader
