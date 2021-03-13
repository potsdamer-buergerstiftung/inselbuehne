import {
  Box,
  Container,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";

const PerformPage = () => {
  const bg = useColorModeValue("gray.50", "purple.800");

  return (
    <MotionPageTransition>
      <PageTitle title="Bühne frei" heading="Auftreten">
        Melde Dich bei uns, wenn Du die Inselbühne bespielen willst!
      </PageTitle>
      <Box as="section" pt="20" pb="20" bg={bg}>
        <Container centerContent textAlign="center">
          <Text mb="8">
            Du bist Kulturschaffende/r in Potsdam und suchst nach einer
            Auftrittsmöglichkeit in Potsdam zwischen 1. Mai und 31. Oktober
            2021? Dann melde Dich bei uns und teile uns mit, was Du vorhast! Ob
            Profi oder Amateur, ob Solist*in oder Kollektiv – jede/r ist
            herzlich willkommen, die Inselbühne für seine/ihre Kunst zu nutzen!
          </Text>
          <Text mb="8">
            Wir planen, Dir eine pandemie-konforme Bühne inkl. technischer
            Grundausstattung (Stromanschlüsse, Grundlicht, ggf. Ton) gegen eine
            minimale Nutzungsgebühr zur Verfügung zu stellen. Technische
            Sonderleistungen musst Du selbst finanzieren.
          </Text>
          <Text mb="8">
            Wir planen auch, Dir eine (diese!) Website und
            Social-Media-Auftritte zur Verfügung zu stellen, über die Du Deine
            Veranstaltung zusätzlich bewerben kannst.
          </Text>
          <Text mb="8">
            Je exakter Du uns sagen kannst, was Du für Deine Veranstaltung
            benötigst, desto schneller können wir Dich bei der Umsetzung auf der
            Inselbühne unterstützen.
          </Text>
          <NextLink passHref href="/kontakt">
            <Button colorScheme="green" size="lg" as="a">
              Anfrage senden
            </Button>
          </NextLink>
        </Container>
      </Box>
    </MotionPageTransition>
  );
};

PerformPage.Layout = Default;

export default PerformPage;
