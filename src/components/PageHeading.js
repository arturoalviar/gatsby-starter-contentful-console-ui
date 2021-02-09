import React from 'react'
import { Divider, Box, Heading } from '@chakra-ui/react'

const PageHeading = ({ children, title, ...rest }) => (
  <Box {...rest}>
    <Heading
      as="h1"
      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
      fontWeight="extrabold"
    >
      {title}
    </Heading>
    {children}
    <Divider pb={5} mb={5} />
  </Box>
)

export default PageHeading
