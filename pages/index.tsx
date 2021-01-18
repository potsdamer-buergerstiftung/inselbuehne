import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Image from "next/image";
import NextLink from "next/link";

export default function AboutOurProject() {
  return (
    <Layout title="Unser Vorhaben" fluid>
      <Box
        as="section"
        background="green.50"
        pb={{ base: "20", md: "40" }}
        pt={{ base: "40", md: "60" }}
      >
        <Container maxW="6xl">
          <Grid gap={6} templateColumns="repeat(12, 1fr)" alignItems="center">
            <GridItem colSpan={{ base: 12, md: 7 }}>
              <Heading as="h1" fontSize="5xl" mb="5">
                Lasst uns{" "}
                <Box as="span" color="green.300">
                  gemeinsam
                </Box>{" "}
                die Inselbühne beleben.
              </Heading>
              <Text mb="8" fontSize="lg">
                Eine pandemie-taugliche, offene Bühne im Herzen Potsdams: das
                ist die Idee hinter der neuen, alten Inselbühne auf der
                Freundschaftsinsel. Wie wir das umsetzen wollen, wie Du uns
                dabei unterstützen und wie Du die Bühne nutzen kannst, all das
                findest Du hier.{" "}
              </Text>
              <NextLink passHref href="/unterstuetzen">
                <Button colorScheme="green" size="lg" as="a">
                  Jetzt spenden
                </Button>
              </NextLink>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 5 }}>
              <Image width={500} height={300} src="/Babelsberg+Rock+2.jpg" alt="Band auf der Inselbühne" />
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box as="section" pb={{ base: "20", md: "40" }} pt="20">
        <Container maxW="6xl" centerContent>
          <Grid
            columnGap={4}
            rowGap={6}
            templateColumns="repeat(24, 1fr)"
            alignItems="center"
          >
            <GridItem colSpan={{ base: 24, md: 9 }}>
              <Image width={400} height={300} src="/Kinder3.JPG" alt="Kinder auf der Inselbühne"/>
            </GridItem>
            <GridItem colSpan={{ base: 24, md: 15 }}>
              <Heading as="h1" fontSize="4xl" mb="8">
                Was ist die Inselbühne?
              </Heading>
              <Grid columnGap={6} rowGap={12} templateColumns="repeat(12, 1fr)">
                <GridItem colSpan={{ base: 12, md: 6 }}>
                  <Text>
                    Inselbühne haben wir die 1974 errichtete Freilichtbühne auf
                    der Freundschaftsinsel neu benannt. Seit 2012 wird sie nicht
                    mehr genutzt und es gibt Pläne, sie abzureißen. Das wollen
                    wir verhindern, denn es gibt keine geeignetere
                    Open-Air-Bühne in der Stadt. Wir meinen, Potsdam braucht
                    eine Freilichtbühne, vor allem in Zeiten einer Pandemie.{" "}
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 12, md: 6 }}>
                  <Text>
                    Lass uns die Inselbühne gemeinsam wiederbeleben, zunächst
                    provisorisch im Sommer 2021, als nicht-kommerzielle
                    Spielstätte für Kulturschaffende und Laien aus Potsdam, die
                    eine pandemie-taugliche Auftrittsmöglichkeit dringend
                    benötigen. Und wenn die Reaktionen positiv genug sind,
                    machen wir auch nach 2021 weiter.{" "}
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
