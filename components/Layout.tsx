import Header from "./Header";
import Footer from "./Footer";
import NextLink from "next/link";
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
} from "@chakra-ui/react";
import { FC } from "react";

interface Layout {}

const Layout: FC<Layout> = (props) => {
  return (
    <>
      <Header />
      {props.children}
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
                  <NextLink passHref href="/unterstuetzen">
                    <Button colorScheme="green" size="lg" as="a">
                      Jetzt spenden
                    </Button>
                  </NextLink>
                </DarkMode>
              </WrapItem>
            </Wrap>
            <Box h="10" w="100%" />
            <Divider colorScheme="dark" />
          </Container>
        </Box>
      </DarkMode>
      <Footer />
    </>
  );
};

export default Layout;
