import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex } from '@chakra-ui/react'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const Layout = ({ children, hasFooter }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <AppHeader siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Flex as="main" minHeight="100%">
        {children}
      </Flex>
      {hasFooter && <AppFooter />}
    </>
  )
}

Layout.defaultProps = {
  hasFooter: true,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasFooter: PropTypes.bool,
}

export default Layout
