import {
  Box,
  Container,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";
import { NextSeo } from "next-seo";

const PerformPage = () => {
  const bg = useColorModeValue("gray.50", "purple.800");

  return (
    <MotionPageTransition>
      <NextSeo title="Bühne frei" />
      <PageTitle title="Bühne frei" heading="Auftreten">
        Melde Dich bei uns, wenn Du die Inselbühne bespielen willst!
      </PageTitle>
      <Box as="section" pt="20" pb="20" bg={bg}>
        <Container centerContent textAlign="center">
          <Text mb="8">
            Du bist Kulturschaffende/r in Potsdam und suchst nach einer
            Auftrittsmöglichkeit in Potsdam zwischen 1. Juni und 31. Oktober
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
          <Link href="/kontakt" passHref>
            <Button colorScheme="green" size="lg" as="a">
              Anfrage senden
            </Button>
          </Link>
        </Container>
      </Box>
    </MotionPageTransition>
  );
};

PerformPage.Layout = Default;

export default PerformPage;
