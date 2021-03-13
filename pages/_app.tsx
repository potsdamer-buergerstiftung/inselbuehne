import { FC } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Head } from "@components/core";

import theme from "../styles/theme";

import "typeface-dm-sans";
import "typeface-dm-serif-display";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const Layout: FC = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <ChakraProvider theme={theme}>
        <Layout>
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
