import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => {
    const bg = mode('gray.100', 'gray.900')(props)
    const color = mode('gray.900', 'gray.100')(props)

    return {
      'html, body': {
        background: bg,
        color,
        height: '100%',
      },
      '#___gatsby': {
        height: '100%',
      },
      '#gatsby-focus-wrapper': {
        height: '100%',
      },
    }
  },
}

export default styles
