import Layout from "../components/Layout";
import Title from "../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";

export default function Contribute() {
  return (
    <Layout title="Beitragen" fluid>
      <Title
        title="Beitragen"
        heading="Das Projekt unterstützen"
        color="green.100"
      >
        Um die Bühne wieder veranstaltungsfähig zu machen, benötigen wir Eure
        Hilfe.
      </Title>
      <Box as="section" py="20">
        <Container centerContent textAlign="center">
          <Text mb="10">
            Auch ein kleiner Geldbeutel sorgt später für viele tolle und
            kostenlose Konzerte. Nach Deinem Beitrag kannst Du dir auch eine
            unserer Belohnungen abholen.
          </Text>
          <Box
            as="div"
            background="green.500"
            p="5"
            boxShadow="base"
            rounded="lg"
            color="white"
          >
            <Text align="center" mb="5" fontSize="md">
              Da sich unser Spendenmodul aktuell noch in der Entwicklung
              befindet, bitten wir Dich, Deinen Beitrag zu überweisen.
            </Text>

            <Text align="center">
              IBAN: DE93 1207 0000 0010 6633 00
              <br />
              BIC: DEUTDEBB160
              <br />
              Deutsche Bank Potsdam
            </Text>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
