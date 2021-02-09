import { extendTheme } from '@chakra-ui/react'
import styles from './global'
import components from './theme/components'
import foundations from './theme/foundations'

const mainFont =
  'Sora, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

const theme = {
  fonts: {
    body: mainFont,
    heading: mainFont,
  },
  styles,
  components,
  ...foundations,
}

export default extendTheme(theme)
