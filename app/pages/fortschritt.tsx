import { Box, Container, Text, Heading, Flex, Square, useColorModeValue, Grid, GridItem, AspectRatio, Wrap, WrapItem, Avatar } from "@chakra-ui/react"
import { FC, useState } from "react"
import { BlitzPage, Image, Link } from "blitz"
import Title from "app/core/components/Title"
import Layout from "app/core/layouts/Layout"

interface Milestone {
  title: string
  date: string
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

const posts = [0, 1, 2, 3, 4, 5]

const Section1: FC = () => {
  const bg = useColorModeValue("green.100", "purple.800")
  const boxBg = useColorModeValue("white", "purple.900")

  const [selMilestIndex, setSelMilestIndex] = useState<number>(0)

  return (
    <Box as="section" bg={bg} pt="48">
      <Container maxW="6xl" zIndex="1" pos="relative">
        <Box bg={boxBg} shadow="lg" rounded="xl" p={{ base: 5, md: 20 }} mt="-10rem">
          <Heading textAlign="center" size="xl" mb="5">
            Unsere Meilensteine
          </Heading>
          <Text textAlign="center" mb="10">
            Wir haben uns Meilensteine gesetzt, um Euch einen besseren Überblick über unseren
            Fortschritt geben zu können.
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
                <Flex align="center" justify="center" key={i} direction="column">
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
  )
}

const Section2: FC = () => {
  const bg = useColorModeValue("gray.50", "purple.800")

  return (
    <Box as="section" bg={bg} pt="14rem" mt="-8rem" pb={20}>
      <Container maxW="6xl">
        <Heading mb={10}>Aktuelles</Heading>
        <Grid columnGap={8} rowGap={16} templateColumns="repeat(6, 1fr)">
          {posts.map((_, index) => (
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }} key={index}>
              <Link href="/kontakt">
                <Box shadow="lg" rounded="lg" position="relative" overflow="hidden" bg="white" cursor="pointer">
                  <AspectRatio ratio={3 / 2}>
                    <Image
                      sizes="400px"
                      src="/Kinder3.JPG"
                      alt="Band auf der Inselbühne"
                      layout="fill"
                      objectFit="cover"
                      quality={50}
                    />
                  </AspectRatio>
                  <Box p={{ base: 5, md: 8 }}>
                    <Heading size="lg" mb={3}>Sed ut perspiciatis unde omnis</Heading>
                    <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...</Text>
                    <Wrap align="center" mt={5} spacing={3}>
                      <WrapItem>
                        <Avatar />
                      </WrapItem>
                      <WrapItem>
                        <Box>
                          <Text lineHeight="normal">Marie-Luise Glahr</Text>
                          <Text variant="light">5. März 2021</Text>
                        </Box>
                      </WrapItem>
                    </Wrap>
                  </Box>
                </Box>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

const ProgressPage: BlitzPage = () => {
  const bg = useColorModeValue("green.100", "purple.800")

  return (
    <>
      <Title title="Fortschritt" heading="Ein langer Weg liegt vor uns" bg={bg}>
        Hier erfährst Du, was wir schon alles geschaft haben und was noch gemacht werden muss.
      </Title>
      <Section1 />
      <Section2 />
    </>
  )
}

ProgressPage.getLayout = (page) => <Layout title="Fortschritt">{page}</Layout>

export default ProgressPage
