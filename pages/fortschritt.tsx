import Layout from "../components/Layout";
import Title from "../components/Title";
import {
  Box,
  Container,
  Text,
  Heading,
  Flex,
  Square,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { FC, useState } from "react";

interface Milestone {
  title: string;
  date: string;
}

const milestones: Milestone[] = [
  {
    title: "Abschluss des Nutzervertrags",
    date: "2021/04",
  },
  {
    title: "Start der Sanierungsarbeiten",
    date: "2021/04",
  },
  {
    title: "Anmeldestart für Kulturschaffende",
    date: "2021/05",
  },
  {
    title: '"Sobotnik" - Aktionstag vor Ort',
    date: "2021/06",
  },
  {
    title: "Buchungsstart für das Publikum",
    date: "2021/07",
  },
  {
    title: "Bühne frei! (Eröffnung)",
    date: "2021/07",
  },
];

const Section1: FC = () => {
  const bg = useColorModeValue("green.100", "purple.800");
  const boxBg = useColorModeValue("white", "purple.900");

  const [selMilestIndex, setSelMilestIndex] = useState<number>(0);

  return (
    <Box as="section" bg={bg} pt="48">
      <Container maxW="6xl" zIndex="1" pos="relative">
        <Box
          bg={boxBg}
          shadow="lg"
          rounded="xl"
          p={{ base: 5, md: 20 }}
          mt="-10rem"
        >
          <Heading textAlign="center" size="xl" mb="5">
            Unsere Meilensteine
          </Heading>
          <Text textAlign="center" mb="10">
            Wir haben uns Meilensteine gesetzt, um Euch einen besseren Überblick
            über unseren Fortschritt geben zu können.
          </Text>
          <Box pos="relative">
            <Box pos="absolute" w="full" py={4} px={7}>
              <Box pos="relative">
                <Box bg="green.100" pos="absolute" h="1" w="full"></Box>
                <Box
                  bg="green.500"
                  pos="absolute"
                  h="1"
                  w={`${selMilestIndex * (100 / (milestones.length - 1))}%`}
                ></Box>
              </Box>
            </Box>
            <Flex justify="space-between" mb="5" zIndex={1} pos="relative">
              {milestones.map((milestone, i) => (
                <Flex
                  align="center"
                  justify="center"
                  key={i}
                  direction="column"
                >
                  <Flex
                    w={8}
                    h={8}
                    align="center"
                    justify="center"
                    onClick={() => setSelMilestIndex(i)}
                    _hover={{ cursor: "pointer" }}
                  >
                    <Square
                      rounded="full"
                      size={selMilestIndex >= i ? 8 : 5}
                      bg={selMilestIndex >= i ? "green.500" : "green.100"}
                    />
                  </Flex>
                  <Text variant="light" mt="2">
                    {milestone.date}
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Text fontWeight="bold" fontSize="2xl">
              {milestones[selMilestIndex].title}
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const Section2: FC = () => {
  const bg = useColorModeValue("gray.50", "purple.800");

  return (
    <Box as="section" bg={bg} pt="16rem" mt="-8rem" pb={20}>
      <Container maxW="6xl">
        <Heading>Aktuelles</Heading>
      </Container>
    </Box>
  );
};

export default function Progress() {
  const bg = useColorModeValue("green.100", "purple.800");

  return (
    <>
      <NextSeo title="Fortschritt" />
      <Title title="Fortschritt" heading="Ein langer Weg liegt vor uns" bg={bg}>
        Hier erfährst Du, was wir schon alles geschaft haben und was noch
        gemacht werden muss.
      </Title>
      <Section1 />
      <Section2 />
    </>
  );
}

Progress.Layout = Layout;
