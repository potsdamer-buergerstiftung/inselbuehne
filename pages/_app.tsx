import "typeface-dm-sans";
import "typeface-dm-serif-display";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

function Inselbuehne({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Inselbuehne;
