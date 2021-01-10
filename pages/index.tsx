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
import MotionBox from "../components/MotionBox";

export default function AboutOurProject() {
  return (
    <Layout title="Unser Vorhaben" fluid>
      <Box as="section" background="green.50" pb="40" pt="60">
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
                Schau Dir gerne an, was wir vorhaben oder trag mit Deiner Spende
                einfach direkt zum Projekt bei.{" "}
              </Text>
              <NextLink passHref href="/beitragen">
                <Button colorScheme="green" size="lg" as="a">
                  Jetzt spenden
                </Button>
              </NextLink>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 5 }}>
              <Image width={500} height={300} src="/Babelsberg+Rock+2.jpg" />
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box as="section" pb="40" pt="20">
        <Container maxW="6xl" centerContent>
          <Grid gap={4} templateColumns="repeat(12, 1fr)" alignItems="center">
            <GridItem colSpan={{ base: 12, md: 5 }}>
              <Image width={400} height={300} src="/Kinder3.JPG" />
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 7 }}>
              <Heading as="h1" fontSize="4xl" mb="8">
                Was ist die Inselbühne?
              </Heading>
              <Grid gap={10} templateColumns="repeat(12, 1fr)">
                <GridItem colSpan={{ base: 12, md: 6 }}>
                  <Text>
                    Die Inselbühne auf der Freundschaftsinsel ist ein
                    wunderbarer Ort im Dornröschenschlaf, der früher lebendiger
                    Begegnungs- und Veranstaltungsort im Herzen der Stadt war.
                    Lasst ihn uns gemeinsam wiederbeleben - zunächst für die
                    nächste Saison 2021.{" "}
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 12, md: 6 }}>
                  <Text>
                    Einen nicht-kommerziellen Spielort für Menschen in Potsdam,
                    die singen, tanzen, musizieren, Theater spielen, vorlesen,
                    diskutieren gemein kreativ sein wollen und für die, die
                    gerne zuschauen und diesen schönen Ort genießen wollen.{" "}
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
