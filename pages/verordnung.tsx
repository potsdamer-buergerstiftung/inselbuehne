import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Box, Container, Text, Link } from "@chakra-ui/layout";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { NextSeo } from "next-seo";

export default function Verordnung() {
  return (
    <>
      <NextSeo title="Teilnahmebedinungen" />
      <PageTitle
        title="Aktuelle Teilnahmebedingungen"
        heading="Aktualisiert am 23. August"
      >
        Wegen der aktuellen Eindämmungsverordnung der Landesregierung
        Brandenburgs sind wir verpflichtet, ein individuell entwickeltes
        Hygienekonzept umzusetzen.
      </PageTitle>
      <Box as="section" pb="10">
        <Container maxW="lg">
          <Heading size="lg" mb="5">
            3G-Regel
          </Heading>
          <Text mb="10" variant="light">
            Für das Besuchen der Veranstaltungen auf der Inselbühne ist das
            Vorlegen eines Impf- oder Genesenenausweises oder eines
            tagesaktuellen negativen Tests notwendig.
          </Text>
          <Heading size="lg" mb="5">
            Teilnehmerzahl
          </Heading>
          <Text mb="10" variant="light">
            Wir müssen sicherstellen, dass zwischen jeder teilnehmenden Gruppe
            ein Mindestabstand eingehalten wird. Dadurch sind wegen der
            Nichtbesetzung vieler Plätze aktuell nur <b>170</b> Teilnehmende
            möglich.
          </Text>
          <Heading size="lg" mb="5">
            Tickets
          </Heading>
          <Text mb="10" variant="light">
            Um die Kapazitätsgrenze nicht zu überschreiten, sind auch für
            kostenlose Veranstaltungen Tickets notwendig. Diese Tickets können
            über unser Ticket-Telefon oder direkt über die Website gebucht
            werden und sind, falls als E-Ticket gebucht, am Eingang vorzuzeigen.
            Wir bitten Euch, außerhalb Eures Sitzplatzes den Mindestabstand von
            1,5 Metern einzuhalten.
          </Text>
          <Heading size="lg" mb="5">
            Kontaktnachverfolgung
          </Heading>
          <Text mb="10" variant="light">
            Die Eindämmungsverordnung sieht die Angabe von Vor- und Nachname
            sowie die Angabe einer Telefonnummer oder E-Mail-Adresse zum Zwecke
            der Kontaktnachverfolgung beim Betreten der Veranstaltungsstätte
            vor. Aus diesem Grund bieten wir das einfache Verfahren durch die
            Luca-App oder Corona-Warn-App an. Wer nicht die Möglichkeit zur
            Nutzung dieser Anwendungen hat, muss seine Kontaktdaten in
            Papierform hinterlegen. Um den Eintrittsprozess zu beschleunigen
            bitten wir Sie,{" "}
            <Link href="/Kontaktnachverfolgung.pdf" download color="green.500">
              <ExternalLinkIcon /> dieses Formular
            </Link>{" "}
            auszudrucken und ausgefüllt zur Veranstaltung mitzubringen.
          </Text>
          <Heading size="lg" mb="5">
            Maskenpflicht
          </Heading>
          <Text mb="10" variant="light">
            Der medizinische Mundnasenschutz muss auf dem Veranstaltungsgelände
            getragen werden und darf erst am Platz abgenommen werden.
          </Text>
        </Container>
      </Box>
    </>
  );
}

Verordnung.Layout = Default;
