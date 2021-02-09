import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {
  Box,
  Link,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  VisuallyHidden,
  useDisclosure,
} from '@chakra-ui/react'

const renderImage = fluid => {
  return <Img fluid={fluid}></Img>
}

const BlogPostImage = ({ fluid, hasModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  if (hasModal) {
    return (
      <Box
        ml={{ base: 0, lg: '-8rem' }}
        py={10}
        width={{ base: '100%', lg: 'calc(100% + 16rem)' }}
      >
        <Link
          display="block"
          href="#"
          onClick={event => {
            event.preventDefault()
            onOpen()
          }}
        >
          <VisuallyHidden>Open image</VisuallyHidden>
          {renderImage(fluid)}
        </Link>
        <Modal isOpen={isOpen} onClose={onClose} zIndex="sticky" isCentered>
          <ModalOverlay />
          <ModalContent maxWidth="9xl">
            <ModalCloseButton
              bg="primary.600"
              borderRadius="none"
              top="0"
              right="0"
              zIndex="docked"
            />
            <ModalBody p={0}>{renderImage(fluid)}</ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    )
  }
  return renderImage(fluid)
}

BlogPostImage.defaultProps = {
  hasModal: true,
}

BlogPostImage.propTypes = {
  hasModal: PropTypes.bool,
}

export default BlogPostImage
