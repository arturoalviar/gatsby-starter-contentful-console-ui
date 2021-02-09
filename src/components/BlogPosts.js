import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { motion } from 'framer-motion'
import {
  Link,
  Container,
  Flex,
  Icon,
  Stack,
  Text,
  useTheme,
  useColorModeValue,
} from '@chakra-ui/react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { FiGrid } from 'react-icons/fi'

import { BlogPostTile } from './BlogPost'

import { tileBeforeStyles, tileBeforeActiveStyles } from '@styles/blogPost'
import { stackVariants, tileVariants } from '@styles/motion'

const MotionStack = motion.custom(Stack)

const BlogPosts = ({ posts, handleOnHover }) => {
  const theme = useTheme()
  const bg = useColorModeValue('gray.200', 'gray.700')

  return (
    <ScrollContainer
      vertical={false}
      style={{
        overflow: 'scroll',
      }}
    >
      <Flex width="100%" height="100vh" align="center">
        <Container width="1920px" px={{ base: 4, lg: 12 }} maxWidth="auto">
          <MotionStack
            variants={stackVariants}
            initial="hidden"
            animate="show"
            direction={['column', 'row']}
            spacing={14}
            justify="flex-start"
            width="100%"
            mr={14}
          >
            {posts.edges.map(({ node }) => (
              <BlogPostTile
                key={node.id}
                post={node}
                variants={tileVariants}
                handleOnHover={handleOnHover}
              />
            ))}
            <Link as={GatsbyLink} to="blog">
              <Stack
                align="center"
                justify="center"
                w={{ base: '228px', lg: '512px' }}
                h={{ base: '228px', lg: '512px' }}
              >
                <Text
                  fontSize={{ base: 'lg', lg: '2xl' }}
                  fontWeight="bold"
                  mb={{ base: 2, lg: 4 }}
                >
                  All Posts
                </Text>
                <Stack
                  bg={bg}
                  borderRadius="50%"
                  align="center"
                  justify="center"
                  pos="relative"
                  w={{ base: '128px', md: '228px', lg: '320px' }}
                  h={{ base: '128px', md: '228px', lg: '320px' }}
                  _before={{
                    ...tileBeforeStyles(theme),
                    borderRadius: '50%',
                  }}
                  _focus={tileBeforeActiveStyles}
                  _hover={tileBeforeActiveStyles}
                >
                  <Icon
                    as={FiGrid}
                    w={{ base: '48px', md: '64px', lg: '164px' }}
                    h={{ base: '48px', md: '64px', lg: '164px' }}
                  ></Icon>
                </Stack>
              </Stack>
            </Link>
          </MotionStack>
        </Container>
      </Flex>
    </ScrollContainer>
  )
}

export default BlogPosts
