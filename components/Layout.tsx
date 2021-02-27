import Header from "./Header";
import Footer from "./Footer";
import NextLink from "next/link";
import {
  Box,
  Container,
  Divider,
  GridItem,
  Heading,
  Text,
  Button,
  Grid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FC } from "react";

interface Layout {}

const Layout: FC<Layout> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Box as="section" background="dark" color="gray.400">
        <Container maxW="6xl">
          <Box h="10" w="100%" />
          <Wrap justify="space-between" spacing={8} align="center">
            <WrapItem>
              <Box>
                <Heading as="h2" color="white" mb="2">
                  Lasst uns{" "}
                  <Box color="green.500" as="span">
                    gemeinsam
                  </Box>{" "}
                  die Bühne beleben.
                </Heading>
                <Text>
                  Auch ein kleiner Geldbeutel kann zu tollen Kulturerlebnissen
                  auf der Inselbühne beitragen.
                </Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <NextLink passHref href="/unterstuetzen">
                <Button colorScheme="green" size="lg" as="a">
                  Jetzt spenden
                </Button>
              </NextLink>
            </WrapItem>
          </Wrap>
          <Box h="10" w="100%" />
          <Divider colorScheme="dark" />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
