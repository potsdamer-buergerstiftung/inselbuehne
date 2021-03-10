import { Box, Container, Text } from "@chakra-ui/react"
import { BlitzPage } from "blitz"
import Title from "app/core/components/Title"
import Layout from "app/core/layouts/Layout"

const ImpressPage: BlitzPage = () => {
  return (
    <>
      <Title title="Impressum"></Title>
      <Box as="section" py="20">
        <Container centerContent textAlign="center">
          <Text>
            Angaben gemäß § 5 TMG und § 2 DL-InfoV: Die Bürgerstiftung Potsdam ist eine rechtsfähige
            Stiftung und ist als solche eingetragen bei der Stiftungsaufsicht Brandenburg unter der
            Registernumme Reg 186. Die Stiftung ist nach ihrer Satzung gemeinnützig. Vorstand Felix
            Müller-Stüler & Marie-Luise Glahr (Vorsitzende des Vorstands) Bürgerstiftung Potsdam
            Eisenhartstraße 18 14469 Potsdam Tel.: 0331-273 14 46 info@potsdamer-buergerstiftung.com
            www.potsdamer-buergerstiftung.com
          </Text>
        </Container>
      </Box>
    </>
  )
}

ImpressPage.getLayout = (page) => <Layout title="Impressum">{page}</Layout>

export default ImpressPage
