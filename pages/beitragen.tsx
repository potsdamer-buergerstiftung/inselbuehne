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
          <Text>
            Auch ein kleiner Geldbeutel sorgt später für viele tolle und
            kostenlose Konzerte. Nach Deinem Beitrag kannst Du dir auch eine
            unserer Belohnungen abholen.
          </Text>
        </Container>
      </Box>
    </Layout>
  );
}
