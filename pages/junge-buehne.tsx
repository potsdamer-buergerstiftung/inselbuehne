import { FC } from "react";
import {
  Box,
  Container,
  Text,
  AspectRatio,
  GridItem,
  Grid,
  Button,
  Heading,
  Wrap,
} from "@chakra-ui/react";
import { PageTitle } from "@components/core";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { JungeBuehne as Layout } from "@components/layouts";
import { MotionPageTransition, MotionHeading } from "@components/motion";
import Image from "next/image";
import RouterLink from "next/link";

const SponsorsSection: FC = () => {
  return (
    <Box as="section" bg={mode("blue.50", "blue.800")} py="12">
      <Container maxW="container.xl">
        <Wrap
          align="center"
          justify={{ base: "center", md: "start" }}
          spacing="10"
          direction="row"
        >
          <div>
            <Image src="/bkm_2017_websvg_de.svg" width="220" height="100" />
          </div>
          <div>
            <Image
              src="/CDR_BKM_Neustart_Kultur_Wortmarke_neg_RGB_RZ.svg"
              width="100"
              height="100"
            />
          </div>
          <div>
            <Image src="/fs.svg" width="300" height="100" />
          </div>
        </Wrap>
      </Container>
    </Box>
  );
};

export default function JungeBuehne() {
  return (
    <MotionPageTransition>
      <Box
        as="section"
        bg={mode("blue.100", "blue.900")}
        pb={{ base: "20", md: "28" }}
        pt={{ base: "40", md: "60" }}
      >
        <Container maxW="container.xl">
          <Grid
            rowGap={8}
            columnGap={16}
            templateColumns="repeat(5, 1fr)"
            alignItems="center"
          >
            <GridItem colSpan={{ base: 5, md: 3 }}>
              <MotionHeading
                as="h1"
                fontSize="5xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.5, delay: 0.5 }}
                mb="5"
              >
                Dürfen wir vorstellen:
                <br />
                <Box as="span" color="blue.500">
                  Die Junge Bühne
                </Box>
              </MotionHeading>
              <Text mb="8" fontSize="lg">
                Die Temperaturen steigen, die Corona-Beschränkungen werden
                lockerer. Schöne Musik, Tanz, Performance von Kindern und
                Jugendlichen für alle unter dem freien Himmel, mit einem Getränk
                in der Hand und natürlich unter Beachtung aller Hygiene-Regeln
                den Sommer genießen - das bietet die Junge Bühne an.
              </Text>
              <RouterLink href="/junge-buehne/kontakt" passHref>
                <Button colorScheme="blue" size="lg" as="a">
                  Kontaktiere uns
                </Button>
              </RouterLink>
            </GridItem>
            <GridItem colSpan={{ base: 5, md: 2 }}>
              <AspectRatio ratio={3 / 2}>
                <Box shadow="xl">
                  <Image
                    sizes="400px"
                    src="/Kinder3.JPG"
                    alt="Band auf der Inselbühne"
                    layout="fill"
                    objectFit="cover"
                    quality={50}
                  />
                </Box>
              </AspectRatio>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <SponsorsSection />
      <Box
        as="section"
        pb={{ base: "20", md: "40" }}
        pt="16"
        bg={mode("blue.100", "blue.900")}
      >
        <Container maxW="container.xl" centerContent>
          <Grid
            columnGap={16}
            rowGap={8}
            templateColumns="repeat(5, 1fr)"
            alignItems="center"
          >
            <GridItem colSpan={{ base: 5, md: 2 }}>
              <AspectRatio ratio={3 / 2}>
                <Box shadow="xl">
                  <Image
                    sizes="400px"
                    src="/Kinder2.jpg"
                    alt="Band auf der Inselbühne"
                    layout="fill"
                    objectFit="cover"
                    quality={50}
                  />
                </Box>
              </AspectRatio>
            </GridItem>
            <GridItem colSpan={{ base: 5, md: 3 }}>
              <Heading as="h1" fontSize="4xl" mb="8">
                Was ist die Junge Bühne?
              </Heading>
              <Text>
                Bei diesem Projekt geht es darum, dass junge, kreative Köpfe ihr
                Können der Familie, Freunden und anderen Potsdamer:innen auf der
                Inselbühne im Herzen Potsdams vorstellen können. Der Ausführung
                sind dabei keine Grenzen gesetzt – es kann sich um ein
                künstlerisches, musikalisches, theatralisches oder sportliches
                Werk handeln, als Solo, in einer kleinen oder auch großen
                Gruppe. Es sind auch noch Termine frei - falls ihr selber eine
                Idee habt, die ihr gerne präsentieren wollt!
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box
        as="section"
        pb={{ base: "20", md: "40" }}
        textAlign="center"
        bg={mode("blue.100", "blue.900")}
      >
        <Container maxW="3xl">
          <Heading
            as="h6"
            variant="uppercase"
            fontSize="sm"
            mb="5"
            color="blue.500"
          >
            Los geht's
          </Heading>
          <Heading as="h1" fontSize="4xl">
            Registriere Dich für unsere Veranstaltungen
          </Heading>
          <Text mt="5" mb="10" variant="light">
            Unser Programm (einsehbar unter dem Menüpunkt "Veranstaltungen") ist
            vielfältig: Theaterschul-AGs führen ihr Stück auf, Musikschulen
            geben ein kleines Konzert, Jugendliche präsentieren ihr eigenes Werk
            und viel weiteres. Stöbert gerne in den Veranstaltungen, die Tickets
            sind mit wenigen Ausnahmen kostenlos.{" "}
          </Text>
          <RouterLink href="/veranstaltungen" passHref>
            <Button colorScheme="blue" size="lg" shadow="base" as="a">
              Zu den Veranstaltungen
            </Button>
          </RouterLink>
        </Container>
      </Box>
    </MotionPageTransition>
  );
}

JungeBuehne.Layout = Layout;
