import Layout from "../components/Layout";
import Title from "../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";

export default function Progress() {
  return (
    <Layout title="Fortschritt" fluid>
      <Title
        title="Fortschritt"
        heading="Ein langer Weg liegt vor uns"
        color="gray.100"
      >
        Hier erfährst Du, was wir schon alles geschaft haben und was noch
        gemacht werden muss.
      </Title>
      <Box as="section" pt="20" pb="10">
        <Container centerContent textAlign="center">
          <Text mb="8">
            Das Projekt Inselbühne nimmt gerade erst Gestalt an. Klar ist, dass
            es noch sehr viel zu tun gibt. Ob wir die Inselbühne tatsächlich
            wiederbeleben können, steht noch in den Sternen. Es hängt zum Einen
            daran, ob wir die Finanzierung für Spielbetrieb und bauliche
            Ertüchtigung zusammen bekommen. Wir reden von ca. 50.000€ für den
            Veranstaltungsbetrieb von Mai bis Oktober und ca. 80.000€ knapp
            kalkuliert, für die provisorische Bespielbarkeit. Zum Anderen
            benötigen wir viele Mitstreiter*innen, um die vielfältigen Aufgaben
            dieses großen Projekts zu bewältigen.
          </Text>
          <Text mb="8">
            Ohne ein gemeinsames finanzielles und persönliches Engagement der
            Potsdamer Stadtgesellschaft wird eine Belebung der Inselbühne ein
            Traum bleiben. Packen wir’s an – Du bist herzlich willkommen,
            mitzumachen, mitzuwerben, mitzuspenden!
          </Text>
          <Text mb="8">
            Auf dieser Seite wollen wir Dich regelmäßig über die Fortschritte
            unseres Projekts informieren und Dich inspirieren, wo Du Dich
            einklinken kannst.
          </Text>
        </Container>
      </Box>
    </Layout>
  );
}
