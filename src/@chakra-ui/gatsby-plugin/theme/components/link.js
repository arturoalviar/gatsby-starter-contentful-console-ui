import { mode } from '@chakra-ui/theme-tools'

const primaryScheme = props => {
  const { theme } = props

  return {
    color: mode(
      theme.colors.primary['700'],
      theme.colors.primary['300']
    )(props),
  }
}

const accentScheme = props => {
  const { theme } = props

  return {
    color: mode(theme.colors.accent['700'], theme.colors.accent['300'])(props),
  }
}

const baseStyle = {
  _hover: {
    textDecoration: 'none',
  },
}

export default {
  baseStyle,
  variants: {
    primary: primaryScheme,
    accent: accentScheme,
  },
}
