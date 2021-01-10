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
  Grid,
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
          <Box h="10" w="100%" />
          <Grid
            alignItems="center"
            justifyContent="space-between"
            templateColumns="repeat(12, 1fr)"
            columnGap={12}
            rowGap={6}
          >
            <GridItem colSpan={{ base: 12, md: 6 }}>
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
            <GridItem colSpan={{ base: 12, md: 4 }}>
              <NextLink passHref href="/beitragen">
                <Button colorScheme="green" size="lg" as="a">
                  Jetzt spenden
                </Button>
              </NextLink>
            </GridItem>
          </Grid>
          <Box h="10" w="100%" />
          <Divider colorScheme="dark" />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
