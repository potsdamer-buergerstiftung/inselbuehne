import { ReactNode, FC } from "react";
import RouterLink from "next/link";
import { Header, Footer, Banner } from "@components/core";
import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  Button,
  Wrap,
  WrapItem,
  DarkMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const DonateHintSection: FC = () => {
  return (
    <DarkMode>
      <Box as="section" bg="purple.900">
        <Container maxW="container.xl">
          <Box h="10" w="100%" />
          <Wrap justify="space-between" spacing={8} align="center">
            <WrapItem>
              <Box>
                <Heading as="h2" mb="2" color="white">
                  Ein Projekt der{" "}
                  <Link
                    color="green.500"
                    href="https://www.potsdamer-buergerstiftung.com"
                    isExternal
                  >
                    Potsdamer Bürgerstiftung
                  </Link>
                  .
                </Heading>
                <Text variant="light">
                  Wir fördern ehrenamtliches Engagement und gestalten als
                  Mitmach-Stiftung gemeinsam unsere schöne Stadt noch
                  l(i)ebenswerter.
                </Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <DarkMode>
                <Button
                  colorScheme="green"
                  size="lg"
                  as="a"
                  href="https://www.potsdamer-buergerstiftung.com"
                  target="_blank"
                >
                  Mehr über uns
                </Button>
              </DarkMode>
            </WrapItem>
          </Wrap>
          <Box h="10" w="100%" />
          <Divider colorScheme="dark" />
        </Container>
      </Box>
    </DarkMode>
  );
};

const Layout: FC = ({ children }) => {
  const bg = useColorModeValue("green.100", "purple.800");

  return (
    <>
      {/* <Banner /> */}
      <Header />
      <Box as="main" bg={bg}>
        {children}
      </Box>
      <DonateHintSection />
      <Footer />
    </>
  );
};

export default Layout;
