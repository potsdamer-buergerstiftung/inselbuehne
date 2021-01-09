import Layout from "../components/Layout";
import Title from "../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";

export default function PageNotFound() {
  return (
    <Layout title="Seite nicht gefunden" fluid>
      <Title title="Seite nicht gefunden" heading="404" color="red.100">
        Es tut uns leid, aber Deine gesuchte Seite konnte nicht gefunden werden.
      </Title>
    </Layout>
  );
}
