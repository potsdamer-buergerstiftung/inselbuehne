import { Box, Container, SimpleGrid } from "@chakra-ui/layout";
import { PageTitle } from "@components/core"
import { Default } from "@components/layouts"
import { MotionPageTransition } from "@components/motion";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { NextSeo } from "next-seo";
import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";

export default function Events() {
  return (
    <MotionPageTransition>
      <NextSeo title="Veranstaltungen" />
      <PageTitle title="Es geht los" heading="Veranstaltungen" bg={mode("white", "purple.800")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
      </PageTitle>
      <Box as="section" pt="10" bg="white">
        <Container maxW="container.lg">
          <SimpleGrid columns={3} gap="5">
            <Input type="text" placeholder="Suchen..." variant="filled" size="lg" />
            <Select variant="filled" placeholder="Monat" size="lg" />
            <Select variant="filled" placeholder="Kategorie" size="lg" />
          </SimpleGrid>
        </Container>
      </Box>
      <Box as="section" py="20" bg="white">
        <Container maxW="container.lg">
          
        </Container>
      </Box>
    </MotionPageTransition>
  )
}

Events.Layout = Default;
