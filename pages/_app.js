import 'typeface-dm-sans'
import 'typeface-dm-serif-display'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import theme from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
