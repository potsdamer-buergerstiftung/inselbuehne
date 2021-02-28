import "typeface-dm-sans";
import "typeface-dm-serif-display";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { FC } from "react";
import Head from "@components/Head";
import Layout from "@components/Layout";

const Noop: FC = ({ children }) => <>{children}</>;

function Inselbuehne({ Component, pageProps }) {
  const Layout: FC<Layout> = (Component as any).Layout || Noop;
  return (
    <>
      <Head />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default Inselbuehne;
