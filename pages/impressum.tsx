import Layout from "../components/Layout";
import Title from "../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

export default function Impress() {
  return (
    <>
      <NextSeo title="Impressum" />
      <Title title="Impressum" color="gray.100"></Title>
      <Box as="section" py="20">
        <Container centerContent textAlign="center">
          <Text>
            Angaben gemäß § 5 TMG und § 2 DL-InfoV: Die Bürgerstiftung Potsdam
            ist eine rechtsfähige Stiftung und ist als solche eingetragen bei
            der Stiftungsaufsicht Brandenburg unter der Registernumme Reg 186.
            Die Stiftung ist nach ihrer Satzung gemeinnützig. Vorstand Felix
            Müller-Stüler & Marie-Luise Glahr (Vorsitzende des Vorstands)
            Bürgerstiftung Potsdam Eisenhartstraße 18 14469 Potsdam Tel.:
            0331-273 14 46 info@potsdamer-buergerstiftung.com
            www.potsdamer-buergerstiftung.com
          </Text>
        </Container>
      </Box>
    </>
  );
}

Impress.Layout = Layout;
