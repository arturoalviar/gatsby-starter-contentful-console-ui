import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

import Layout from './Layout'

const MotionBox = motion.custom(Box)

const SinglePageLayout = ({ children }) => (
  <Layout>
    <MotionBox
      animate={{ opacity: 1 }}
      transition={{ duration: 0.425 }}
      style={{ opacity: 0 }}
      pt={{ base: 28, lg: 24 }}
      width="100%"
    >
      {children}
    </MotionBox>
  </Layout>
)

export default SinglePageLayout
