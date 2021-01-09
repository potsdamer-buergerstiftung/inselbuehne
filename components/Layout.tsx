import Head from "next/head";
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
  Flex,
} from "@chakra-ui/react";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title} - Inselbühne Potsdam</title>
        <meta
          name="description"
          content="Die Inselbühne auf der Freundschaftsinsel ist ein wunderbarer Ort im Dornröschenschlaf, der früher lebendiger Begegnungs- und Veranstaltungsort im Herzen der Stadt war."
        />
      </Head>
      <Header fluid={props.fluid} />
      {props.children}
      <Box as="section" background="dark" color="gray.400">
        <Container maxW="7xl">
          <Box h="8" w="100%" />
          <Flex align="center" justify="space-between">
            <GridItem colSpan={8}>
              <Heading as="h2" color="white" mb="2">
                Lasst uns{" "}
                <Box color="green.500" as="span">
                  zusammen
                </Box>{" "}
                die Bühne beleben.
              </Heading>
              <Text>
                Auch ein kleiner Beitrag sorgt später für viele kostenlose
                Veranstaltungen.
              </Text>
            </GridItem>
            <GridItem colSpan={4}>
              <NextLink passHref href="/beitragen">
                <Button colorScheme="green" size="lg" as="a">
                  Jetzt spenden
                </Button>
              </NextLink>
            </GridItem>
          </Flex>
          <Box h="8" w="100%" />
          <Divider colorScheme="dark" />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
