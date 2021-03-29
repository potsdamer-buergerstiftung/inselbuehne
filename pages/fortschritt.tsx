import { FC, useState } from "react";
import {
  Box,
  Container,
  Text,
  Heading,
  Flex,
  Square,
  useColorModeValue as mode,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Default } from "@components/layouts";
import { PageTitle } from "@components/core";
import { MotionPageTransition } from "@components/motion";
import { NextSeo } from "next-seo";
import { PostCard } from "@components/posts";
import { GetStaticProps } from "next";
import { getAllPosts } from "@lib/api/posts";

interface Milestone {
  title: string;
  date: string;
}

const milestones: Milestone[] = [
  {
    title: "Abschluss des Nutzervertrags",
    date: "KW 12",
  },
  {
    title: "Start der Sanierungsarbeiten",
    date: "KW 13",
  },
  {
    title: "Anmeldestart für Kulturschaffende",
    date: "KW 14",
  },
  {
    title: '"Sobotnik" - Aktionstag vor Ort',
    date: "KW 15",
  },
  {
    title: "Buchungsstart für das Publikum",
    date: "KW 16",
  },
  {
    title: "Bühne frei! (Eröffnung)",
    date: "1. Mai",
  },
];

const Section1: FC = () => {
  const [selMilestIndex, setSelMilestIndex] = useState<number>(1);

  return (
    <Box as="section" bg={mode("green.100", "purple.800")} pt="48">
      <Container maxW="6xl" zIndex="0" pos="relative">
        <Box
          bg={mode("white", "purple.900")}
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
                  transition="all 250ms"
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
                      transition="all 250ms"
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

interface Section2 {
  posts: any;
}

const Section2: FC<Section2> = ({ posts: { nodes } }) => {
  return (
    <Box as="section" bg={mode("gray.50", "purple.800")} pt="14rem" mt="-8rem" pb={20}>
      <Container maxW="6xl">
        <Heading mb={10}>Aktuelles</Heading>
        <Grid columnGap={8} rowGap={16} templateColumns="repeat(6, 1fr)">
          {nodes.map((post, index) => (
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }} key={index}>
              <PostCard post={post} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const ProgressPage = ({ posts = [] }) => {

  return (
    <MotionPageTransition>
      <NextSeo title="Fortschritt" />
      <PageTitle
        title="Fortschritt"
        heading="Ein langer Weg liegt vor uns"
        bg={mode("green.100", "purple.800")}
      >
        Hier erfährst Du, was wir schon alles geschaft haben und was noch
        gemacht werden muss.
      </PageTitle>
      <Section1 />
      <Section2 posts={posts} />
    </MotionPageTransition>
  );
};

ProgressPage.Layout = Default;

export default ProgressPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 300,
  };
};
