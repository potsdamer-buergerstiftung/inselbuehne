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
      <Header fluid />
      {props.children}
      <Box as="section" background="dark" color="gray.400">
        <Container maxW="6xl">
          <Box h="10" w="100%" />
          <Grid
            alignItems="center"
            templateColumns="repeat(12, 1fr)"
            columnGap={6}
            rowGap={6}
          >
            <GridItem colSpan={{ base: 12, md: 8 }}>
              <Heading as="h2" color="white" mb="2">
                Lasst uns{" "}
                <Box color="green.500" as="span">
                  gemeinsam
                </Box>{" "}
                die Bühne beleben.
              </Heading>
              <Text>
                Auch ein kleiner Geldbeutel kann zu tollen Kulturerlebnissen auf
                der Inselbühne beitragen.
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 4 }}>
              <NextLink passHref href="/unterstuetzen">
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
