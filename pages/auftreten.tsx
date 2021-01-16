import Layout from "../components/Layout";
import Title from "../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Perform() {
  return (
    <Layout title="Auftreten" fluid>
      <Title title="Auftreten" heading="Bühne frei" color="gray.100">
        Melde Dich bei uns, wenn Du die Inselbühne bespielen willst!
      </Title>
      <Box as="section" pt="20" pb="10">
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
            Sende Deine Anfragen bitte an{" "}
            <Link href="mailto://kve@potsdamer-buergerstiftung.com">
              kve@potsdamer-buergerstiftung.com
            </Link>
            . Je exakter Du uns sagen kannst, was Du für Deine Veranstaltung
            benötigst, desto schneller können wir Dich bei der Umsetzung auf der
            Inselbühne unterstützen.
          </Text>
        </Container>
      </Box>
    </Layout>
  );
}
