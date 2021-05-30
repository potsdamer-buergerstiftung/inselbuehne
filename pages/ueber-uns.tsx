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

import team from "@config/team.json";

interface TeamMember {
  name: string;
  role: string;
  details?: string;
  image?: string;
}

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
              quality={80}
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
      <Box as="section" pb="20" pt="10" bg={bg}>
        <Container maxW="container.xl">
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
