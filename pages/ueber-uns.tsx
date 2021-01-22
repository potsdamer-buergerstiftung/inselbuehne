import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  AspectRatio,
  Button,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Image from "next/image";
import NextLink from "next/link";

interface TeamMember {
  name: string;
  role: string;
  details?: string;
  image?: string;
}

const team: TeamMember[] = [
  {
    name: "Kaspar von Erffa",
    role: "Projektleitung, Finanzierung und Veranstaltungsbetrieb",
    details: "",
    image: "kaspar-von-erffa.jpg",
  },
  {
    name: "Marie-Luise Glahr",
    role: "Projektleitung, Finanzierung, Öffentlichkeitsarbeit",
    details: "",
    image: "marie-luise-glahr.jpg",
  },
  {
    name: "Gert Groppel",
    role: "Finanzierung, Rechtliches",
    details: "",
    image: "gert-groppel.jpg",
  },
  {
    name: "Stephan Heinlein",
    role: "Bauliche Ertüchtigung",
    details: "",
    image: "stephan-heinlein.jpg",
  },
  {
    name: "Steven O’Verna",
    role: "Programmgestaltung",
    details: "",
    image: "steven-overna.jpg",
  },
  {
    name: "Gabi Zimmermann",
    role: "Kommunikation & Künstleransprache",
    details: "",
    image: "gabi-zimmermann.jpg",
  },
  {
    name: "Mareike Schmidt",
    role: "Kommunikation & Organisation",
    details: "",
    image: "mareike-schmidt.jpg",
  },
  {
    name: "Johannes Götzke",
    role: "Veranstaltungsbetrieb",
    details: "",
  },
  {
    name: "Juliane Prokop",
    role: "Kommunikation & Organisation",
    details: "",
  },
  {
    name: "Martin Suchanek",
    role: "Bauliche Ertüchtigung",
    details: "",
    image: "martin-suchanek.jpg",
  },
  {
    name: "Jonas Neugebauer",
    role: "Kommunikation",
    details: "",
  },
];

function sortByName(a: TeamMember, b: TeamMember) {
  const fa = a.name.toUpperCase(),
    fb = b.name.toUpperCase();
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
}

export default function AboutUst() {
  return (
    <Layout title="Über uns" fluid>
      <Title
        title="Eine pandemie-taugliche, offene Bühne im Herzen Potsdams"
        heading="Unsere Mission"
        color="green.50"
      ></Title>
      <Box as="section" py="20" background="green.50">
        <Container maxW="6xl">
          <Heading as="h1" pb="16">
            Unser Team
          </Heading>
          <Grid columnGap={4} rowGap={12} templateColumns="repeat(12, 1fr)">
            {team.sort(sortByName).map((member) => (
              <GridItem
                colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}
                key={member.name}
              >
                <AspectRatio mb="5" ratio={1 / 1} rounded="lg">
                  {member.image ? (
                    <Box rounded="lg" background="teal.100">
                      <Image
                        src={`/team/${member.image}`}
                        alt={`Bild von ${member.name}`}
                        objectFit="cover"
                        layout="fill"
                        quality={50}
                        sizes="300px"
                      />
                    </Box>
                  ) : (
                    <Box background="teal.700" rounded="lg"></Box>
                  )}
                </AspectRatio>
                <Text align="center" fontWeight={500}>
                  {member.name}
                </Text>
                <Text align="center" color="gray.600">
                  {member.role}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box
        as="section"
        pt="20"
        pb="40"
        background="green.50"
        textAlign="center"
      >
        <Container maxW="3xl">
          <Heading
            as="h6"
            variant="uppercase"
            fontSize="sm"
            mb="5"
            color="green.500"
          >
            Werde Teil des Teams
          </Heading>
          <Heading as="h1" fontSize="6xl">
            Wir brauchen Dich
          </Heading>
          <Text mt="3" fontSize="xl" color="gray.700" mb="10">
            Ohne ein persönliches Engagement der Potsdamer Stadtgesellschaft
            wird eine Belebung der Inselbühne ein Traum bleiben. Packen wir’s an
            – Du bist herzlich willkommen, mitzumachen!
          </Text>
          <NextLink passHref href="/kontakt">
            <Button colorScheme="green" size="lg" as="a" shadow="base">
              Schreib uns
            </Button>
          </NextLink>
        </Container>
      </Box>
    </Layout>
  );
}
