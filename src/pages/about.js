import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@chakra-ui/react'

import SEO from '@components/SEO'
import ContentfulContent from '@components/ContentfulContent'
import PageHeading from '@components/PageHeading'
import SingePageLayout from '@components/SingePageLayout'

const About = ({ data: { about } }) => {
  const { title } = about

  return (
    <SingePageLayout>
      <SEO title={title} />
      <Container maxWidth="5xl">
        <PageHeading title={title} />
        <ContentfulContent node={about} />
      </Container>
    </SingePageLayout>
  )
}

export const AboutPageQuery = graphql`
  query aboutQuery {
    about: contentfulPage(title: { eq: "About" }) {
      id
      title
      content {
        raw
      }
    }
  }
`

export default About
