import Layout from "../components/Layout";
import Title from "../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";

export default function Progress() {
  return (
    <Layout title="Fortschritt" fluid>
      <Title
        title="Fortschritt"
        heading="Was schon alles passiert ist"
        color="gray.100"
      >
        Hier erfährst Du, was wir schon alles geschaft haben und was noch
        gemacht werden muss.
      </Title>
      <Box as="section" py="20">
        <Container centerContent textAlign="center">
          <Text>
            Die aktuellen Blogbeiträge konnten leider nicht abgerufen werden.
          </Text>
        </Container>
      </Box>
    </Layout>
  );
}
