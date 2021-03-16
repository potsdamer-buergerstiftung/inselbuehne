import { ReactNode, FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { Header, Footer } from "@components/core";
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
} from "@chakra-ui/react";

const DonateHintSection: FC = () => {
  return (
    <DarkMode>
      <Box as="section" bg="purple.900">
        <Container maxW="6xl">
          <Box h="10" w="100%" />
          <Wrap justify="space-between" spacing={8} align="center">
            <WrapItem>
              <Box>
                <Heading as="h2" mb="2" color="white">
                  Lasst uns{" "}
                  <Box color="green.500" as="span">
                    gemeinsam
                  </Box>{" "}
                  die Bühne beleben.
                </Heading>
                <Text variant="light">
                  Auch ein kleiner Geldbeutel kann zu tollen Kulturerlebnissen
                  auf der Inselbühne beitragen.
                </Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <DarkMode>
                <Link href="/unterstuetzen" passHref>
                  <Button colorScheme="green" size="lg" as="a">
                    Jetzt spenden
                  </Button>
                </Link>
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
