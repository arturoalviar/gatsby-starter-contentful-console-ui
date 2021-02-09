import React from 'react'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'

function ThemeToggle({ ...rest }) {
  const { toggleColorMode } = useColorMode()
  const nextMode = useColorModeValue('dark', 'light')
  const displayIcon = useColorModeValue(<FiMoon />, <FiSun />)

  return (
    <Button
      bg="transparent"
      onClick={toggleColorMode}
      aria-label={`Toggle theme to ${nextMode} mode`}
      {...rest}
    >
      {displayIcon}
    </Button>
  )
}

export default ThemeToggle
