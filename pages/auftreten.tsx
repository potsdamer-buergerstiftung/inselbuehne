import Layout from "../components/Layout";
import Title from "../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";

export default function Contribute() {
  return (
    <Layout title="Auftreten" fluid>
      <Title title="Auftreten" heading="Bühne frei" color="gray.100">
        Wenn Du selbst auf der Bühne etwas darbieten möchtest, kannst Du uns
        gerne schreiben.
      </Title>
    </Layout>
  );
}
