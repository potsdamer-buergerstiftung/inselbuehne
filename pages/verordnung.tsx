import { Heading, Box, Container, Text } from "@chakra-ui/layout";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { NextSeo } from "next-seo";

export default function Verordnung() {
  return (
    <>
      <NextSeo title="Teilnahmebedinungen" />
      <PageTitle
        title="Aktuelle Teilnahmebedingungen"
        heading="Aktualisiert am 5. Juni"
      >Wegen der aktuellen Eindämmungsverordnung der Landesregierung Brandenburgs sind wir verpflichtet, ein individuell entwickeltes Hygienekonzept umzusetzen.</PageTitle>
      <Box as="section" pb="10">
        <Container maxW="lg">
          <Heading size="lg" mb="5">Testpflicht</Heading>
          <Text mb="10" variant="light">
            Zur Veranstaltung wird aktuell nur zugelassen, wer einen tagesaktuellen Negativtest, eine Genesung oder eine Impfung im Sinne der Schutzmaßnahmen-Ausnahmenverordnung vorweisen kann.
          </Text>
          <Heading size="lg" mb="5">Teilnehmerzahl</Heading>
          <Text mb="10" variant="light">
            Wir müssen sicherstellen, dass zwischen jeder teilnehmenden Gruppe 1,5 Meter Abstand eingehalten wird. Dadurch sind wegen der Nichtbesetzung vieler Plätze aktuell nur 100 Teilnehmende möglich. Wegen des Abstandes ist 
            das Tragen einer Maske am Platz nicht notwendig.
          </Text>
          <Heading size="lg" mb="5">Tickets</Heading>
          <Text mb="10" variant="light">
            Um die Kapazitätsgrenze nicht zu überschreiten, sind auch für kostenlose Veranstaltungen Tickets notwendig. Diese Tickets können über unser Ticket-Telefon oder direkt über die Website gebucht werden und sind, falls als E-Ticket gebucht, am Eingang vorzuzeigen.
          </Text>
          <Heading size="lg" mb="5">Kontaktnachverfolgung</Heading>
          <Text mb="10" variant="light">
            Die Eindämmungsverordnung sieht die Angabe von Vor- und Nachname sowie die Angabe einer Telefonnummer oder E-Mail-Adresse zum Zwecke der Kontaktnachverfolgung beim Betreten der Veranstaltungsstätte vor. Aus diesem Grund bieten wir das einfache Verfahren durch die Luca-App oder Corona-Warn-App an. Wer nicht die Möglichkeit zur Nutzung dieser Anwendungen hat, muss seine Kontaktdaten in Papierform hinterlegen. Um den Eintrittsprozess zu beschleunigen bitten wir Sie, dieses Formular auszudrucken und ausgefüllt zur Veranstaltung mitzubringen.
          </Text>
        </Container>
      </Box>
    </>
  );
}

Verordnung.Layout = Default;
