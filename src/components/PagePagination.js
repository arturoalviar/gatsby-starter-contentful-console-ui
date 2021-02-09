import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, HStack, Link, useTheme } from '@chakra-ui/react'

const PagePagination = ({ baseURL, currentPage, numberOfPages }) => {
  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1)
  const theme = useTheme()

  return (
    pages.length > 1 && (
      <Box width="100%" my={10}>
        <HStack align="center" justify="center">
          {pages.map(page => (
            <Link
              key={`page-pagination-${page}`}
              as={GatsbyLink}
              to={page === 1 ? `/${baseURL}` : `/${baseURL}/${page}`}
              bg={currentPage === page ? 'primary.900' : 'transparent'}
              borderBottom="2px solid transparent"
              color={currentPage === page ? 'primary.50' : 'currentColor'}
              fontWeight={currentPage === page ? 'bold' : 'normal'}
              lineHeight="1"
              py={2}
              px={4}
              mr={2}
              _hover={{
                borderBottom: `2px solid ${theme.colors.primary['900']}`,
              }}
            >
              {page}
            </Link>
          ))}
        </HStack>
      </Box>
    )
  )
}

export default PagePagination
