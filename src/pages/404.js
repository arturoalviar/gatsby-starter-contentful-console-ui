import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'

import SEO from '@components/SEO'
import PageHeading from '@components/PageHeading'
import SingePageLayout from '@components/SingePageLayout'

const NotFoundPage = () => (
  <SingePageLayout>
    <SEO title="404: Not found" />
    <Container maxWidth="5xl">
      <PageHeading title="404: Not Found" />
      <Box mt={2}>
        <Text fontSize="xl">Nothing to see here...</Text>
      </Box>
    </Container>
  </SingePageLayout>
)

export default NotFoundPage
