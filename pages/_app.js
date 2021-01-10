import "typeface-dm-sans";
import "typeface-dm-serif-display";
import { ChakraProvider } from "@chakra-ui/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import theme from "../styles/theme";

function Inselbuehne({ Component, pageProps }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        "currency": "EUR",
        "locale": "de_DE",
      }}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PayPalScriptProvider>
  );
}

export default Inselbuehne;
