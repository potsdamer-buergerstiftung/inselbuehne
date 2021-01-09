import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Image from "next/image";
import NextLink from "next/link"

export default function AboutOurProject() {
  return (
    <Layout title="Unser Vorhaben" fluid>
      <Box as="section" background="green.50" pb="40" pt="60">
        <Container maxW="6xl">
          <Flex align="center">
            <Box w={[1, 1, 1 / 2]}>
              <Heading as="h1" fontSize="5xl" mb="5">
                Lasst uns{" "}
                <Box as="span" color="green.300">
                  zusammen
                </Box>{" "}
                die Inselbühne beleben.
              </Heading>
              <Text mb="8">
                Die Inselbühne auf der Freundschaftsinsel ist ein wunderbarer
                Ort im Dornröschenschlaf, der früher lebendiger Begegnungs- und
                Veranstaltungsort im Herzen der Stadt war. Lasst ihn uns
                gemeinsam wiederbeleben - zunächst für die nächste Saison 2021.{" "}
              </Text>
              <NextLink passHref href="/beitragen">
                <Button colorScheme="green" size="lg" as="a">
                  Jetzt spenden
                </Button>
              </NextLink>
            </Box>
            <Box w={[1, 1, 1 / 2]} ml={{ md: 6 }}>
              <Image width={500} height={300} src="/Babelsberg+Rock+2.jpg" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box as="section" pb="40" pt="20">
        <Container maxW="7xl" centerContent>
          <Flex align="center">
            <Box>
              <Image width={400} height={300} src="/Kinder3.JPG" />
            </Box>
            <Box maxW="2xl">
              <Heading as="h1" fontSize="5xl" mb="5">
                Was ist die Inselbühne?
              </Heading>
              <Text mb="8">
                Die Inselbühne auf der Freundschaftsinsel ist ein wunderbarer
                Ort im Dornröschenschlaf, der früher lebendiger Begegnungs- und
                Veranstaltungsort im Herzen der Stadt war. Lasst ihn uns
                gemeinsam wiederbeleben - zunächst für die nächste Saison 2021.{" "}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}
