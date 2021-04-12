import {
  useColorModeValue,
  Box,
  Grid,
  Container,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";
import { DonationForm } from "@components/donation";
import { NextSeo } from "next-seo";

const ContributePage = () => {
  const bg = useColorModeValue("white", "purple.800");
  const boxBg = useColorModeValue("gray.50", "purple.900");

  return (
    <MotionPageTransition>
      <NextSeo title="Unterstützen" />
      <PageTitle title="Unterstützen" heading="Das Projekt fördern" bg={bg}>
        Hilf uns, die Inselbühne wieder veranstaltungsfähig zu machen.
      </PageTitle>
      <Box as="section" py="20" bg={bg}>
        <Container centerContent maxW="container.xl">
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={16}
            justifyItems="center"
            alignItems="center"
          >
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <Box
                as="div"
                shadow="lg"
                px={{ base: 5, md: 10 }}
                py={{ base: 10, md: 14 }}
                rounded="xl"
                width={{ base: "auto", sm: "md" }}
                bg={boxBg}
              >
                <DonationForm />
              </Box>
            </GridItem>
            <GridItem
              colSpan={{ base: 2, lg: 1 }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Text mb="10">
                Wir benötigen Deine Hilfe, um die Inselbühne zu realisieren. Die
                positive Resonanz der öffentlichen Hand freut uns, das wird uns
                sicher helfen. Als Bürgerstiftung setzen wir aber darauf, dass
                auch die breite Stadtgemeinschaft so eine Idee unterstützt.
              </Text>
              <Text mb="10">
                Für den provisorischen Spielbetrieb im 2021 benötigen wir rund
                €50.000. Weitere €80.000 werden wir brauchen, um die derzeit
                ungenutze Freilichtbühne so zu ertüchtigen, dass sie wieder eine
                Betriebsgenehmigung erhält.
              </Text>
              <Text>
                Hier setzen wir auf DICH: Hilf uns mit Deiner Spende! Ermögliche
                eine pandemie-konforme Bühne für Livemusik, Theaterstücke,
                Tanzshows, Chorkonzerte. Jeder Euro zählt und kommt zu 100 % dem
                Projekt Inselbühne zugute!
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </MotionPageTransition>
  );
};

ContributePage.Layout = Default;

export default ContributePage;
