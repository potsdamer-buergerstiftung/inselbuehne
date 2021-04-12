import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  AspectRatio,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionBox, MotionPageTransition } from "@components/motion";
import { NextSeo } from "next-seo";

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
    details:
      "Kaspar von Erffa, freier Theaterregisseur, u.a. Leiter des Integrationstheaters „Sanssouci avec Shakespeare“. Er hat die Fäden des Projekts in der Hand und kümmert sich insbesondere um die Planung des zukünftigen Veranstaltungsbetriebs, Programmgestaltung, und die dafür notwendigen Förderanträge/Finanzierung.",
    image: "kaspar-von-erffa.jpg",
  },
  {
    name: "Marie-Luise Glahr",
    role: "Projektleitung, Finanzierung, Öffentlichkeitsarbeit",
    details:
      "Marie-Luise Glahr ist Vorsitzende des Vorstands der Potsdamer Bürgerstiftung und schon seit Jahren ein Fan der Freilichtbühne als offene Spielstätte für Potsdams Bürgerinnen und Bürger. Seit 2014 wirbt die Bürgerstiftung beharrlich hinter den Kulissen dafür, zuerst beim KIS und dann bei der Stadt Potsdam, dass die Freilichtbühne als wertvoller Begegnungs- und Traditionsort wiederbelebt werden sollte…",
    image: "marie-luise-glahr.jpg",
  },
  {
    name: "Gert Groppel",
    role: "Finanzierung, Rechtliches",
    image: "gert-groppel.jpg",
  },
  {
    name: "Stephan Heinlein",
    role: "Bauliche Ertüchtigung",
    details:
      "Stephan Heinlein, Architekt, ist derjenige, der die bauliche Instandsetzung plant. Dabei geht es um die Fragen von baulichen und betrieblichen Genehmigungen, Herstellung der Verkehrssicherheit, konkrete Maßnahmen vor Ort…",
    image: "stephan-heinlein.jpg",
  },
  {
    name: "Steven O’Fearna",
    role: "Programmgestaltung",
    details:
      "Steven O’Fearna, organisiert mit seinem Team von „tanguito“ Tangokultur in Potsdam. Seit März 2020 ist  kaum noch was möglich. Die Inselbühne ist eine großartige Chance, einen Ort mit zu schaffen, wo  auch getanzt werden kann. „Tanguito“ bringt eine Tanzfläche mit, Tango-DJs und Erfahrung bei der Organisation von Tanzveranstaltungen. Mit Tango wollen wir gerne dabei sein wenn die Inselbühne zum Leben erwacht.",
    image: "steven-ofearna.jpg",
  },
  {
    name: "Gabi Zimmermann",
    role: "Kommunikation & Künstleransprache",
    details:
      "Gabi Zimmermann, hatte viele Jahre eine Musikschule im Holländer Viertel, mit der sie heute in Werder ist. Als Betreiberin einer „Kulturgarage“ mit Live-Auftritten und gut vernetzt in Potsdams Kulturszene, trägt sie dazu bei, in Potsdam wieder einen öffentlichen Ort für Gesang und Musik herzustellen, indem sie für das Projekt wirbt und sowohl Menschen anspricht, die die Bühnen nutzen wollen und solche, die bereit sind, für deren Erhalt zu spenden.",
    image: "gabi-zimmermann.jpg",
  },
  {
    name: "Mareike Schmidt",
    role: "Kommunikation & Organisation",
    image: "mareike-schmidt.jpg",
  },
  {
    name: "Johannes Götzke",
    role: "Veranstaltungstechnik und Betrieb, Bauliche Ertüchtigung",
    details:
      "Johannes Götzke, Ingenieur für Veranstaltungstechnik, bringt sein geballtes Know-How im Bereich Technik, Sicherheit, Brand- und Lärmschutz, Auflagen, Konzeption von Events und Veranstaltungsorten mit ein.",
    image: "johannes-goetzke.jpg",
  },
  {
    name: "Juliane Prokop",
    role: "Kommunikation & Organisation",
    image: "juliane-prokop.jpg",
  },
  {
    name: "Martin Suchanek",
    role: "Bauliche Ertüchtigung",
    image: "martin-suchanek.jpg",
  },
  {
    name: "Jonas Neugebauer",
    role: "Kommunikation & Organisation",
    image: "jonas-neugebauer.jpg",
  },
  {
    name: "Pawel Prokop",
    role: "Junge Bühne",
    image: "pawel-prokop.jpg",
  },
  {
    name: "Felicitas Schober",
    role: "Junge Bühne",
    image: "felicitas-schober.jpg",
  },
  {
    name: "Lisa-Marie Riemer",
    role: "Projektkoordination",
    image: "lisa-marie-riemer.jpg",
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

interface TeamMemberItemProps {
  member: TeamMember;
}

function TeamMemberItem(props: TeamMemberItemProps) {
  const { member } = props;
  const hasDetails = member.details;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("green.200", "purple.900");

  return (
    <MotionBox
      _hover={{ cursor: hasDetails ? "pointer" : "auto" }}
      whileHover={{ y: hasDetails ? -5 : undefined }}
      onClick={hasDetails ? onOpen : undefined}
    >
      <AspectRatio mb="5" ratio={1 / 1} rounded="lg">
        {member.image ? (
          <Box rounded="lg" bg={bg}>
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
          <Box bg={bg} rounded="lg"></Box>
        )}
      </AspectRatio>
      <Text align="center" fontWeight={500}>
        {member.name}
      </Text>
      <Text align="center" variant="light">
        {member.role}
      </Text>
      {member.details && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{member.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb="6">{member.details}</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </MotionBox>
  );
}

const AboutUsPage = () => {
  const bg = useColorModeValue("green.100", "purple.800");

  return (
    <MotionPageTransition>
      <NextSeo title="Über uns" />
      <PageTitle
        title="Eine pandemie-taugliche, offene Bühne im Herzen Potsdams"
        heading="Unsere Mission"
      ></PageTitle>
      <Box as="section" py="20" bg={bg}>
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
                <TeamMemberItem member={member} />
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box as="section" pt="20" pb="40" bg={bg} textAlign="center">
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
          <Text mt="3" fontSize="xl" mb="10">
            Ohne ein persönliches Engagement der Potsdamer Stadtgesellschaft
            wird eine Belebung der Inselbühne ein Traum bleiben. Packen wir’s an
            – Du bist herzlich willkommen, mitzumachen!
          </Text>
          <Link href="/kontakt">
            <Button colorScheme="green" size="lg" shadow="base">
              Schreib uns
            </Button>
          </Link>
        </Container>
      </Box>
    </MotionPageTransition>
  );
};

AboutUsPage.Layout = Default;

export default AboutUsPage;
