import Image from "next/image";
import Link from "next/link";
import { Default } from "@components/layouts";
import { FC } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Container,
  Button,
  AspectRatio,
  useColorModeValue,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { MotionPageTransition, MotionHeading } from "@components/motion";
import { PostCard } from "@components/posts";
import { getAllPosts } from "@lib/api/posts";
import { GetStaticProps } from "next";

const Section1: FC = () => {
  const bg = useColorModeValue("green.100", "purple.900");

  return (
    <Box
      as="section"
      bg={bg}
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
              mb="5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Lasst uns{" "}
              <Box as="span" color="green.500">
                gemeinsam
              </Box>{" "}
              die Inselbühne beleben.
            </MotionHeading>
            <Text mb="8" fontSize="lg">
              Eine pandemie-taugliche, offene Bühne im Herzen Potsdams: das ist
              die Idee hinter der neuen, alten Inselbühne auf der
              Freundschaftsinsel. Wie wir das umsetzen wollen, wie Du uns dabei
              unterstützen und wie Du die Bühne nutzen kannst, all das findest
              Du hier.{" "}
            </Text>
            <Link href="/unterstuetzen" passHref>
              <Button colorScheme="green" size="lg" as="a">
                Jetzt spenden
              </Button>
            </Link>
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 2 }}>
            <AspectRatio ratio={3 / 2}>
              <Box shadow="xl">
                <Image
                  sizes="400px"
                  src="/Babelsberg+Rock+2.jpg"
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
  );
};

const Section2: FC<{ posts }> = ({ posts = [] }) => {
  const bg = useColorModeValue("gray.50", "purple.800");

  return (
    <Box as="section" pb={{ base: "20", md: "40" }} pt="24" bg={bg}>
      <Container maxW="container.xl">
        <Wrap align="center" justify="space-between" mb="12" spacing="16">
          <Box>
            <Box w="20" bg="green.500" h="1" mb="6" />
            <Heading size="xl" mb="1">
              Was bei uns gerade so los ist
            </Heading>
            <Text size="2xl" maxW="25rem" fontSize="xl" variant="light">
              Und wofür wir Dich brauchen
            </Text>
          </Box>
          <Box>
            <Link href="/fortschritt" passHref>
              <Button colorScheme="green" as="a" size="lg">
                Alle Beiträge
              </Button>
            </Link>
          </Box>
        </Wrap>
        <Grid columnGap={8} rowGap={16} templateColumns="repeat(6, 1fr)">
          {posts.map((post, index) => (
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }} key={index}>
              <PostCard
                imageUrl={post.imageUrl}
                title={post.title}
                author={post.author}
                date={new Date(post.date)}
                excerpt={post.excerpt}
                link={`/beitrag/${post.slug}`}
                avatar="default"
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Section3: FC = () => {
  const bg = useColorModeValue("gray.50", "purple.800");

  return (
    <Box as="section" pb={{ base: "20", md: "40" }} bg={bg}>
      <Container maxW="container.xl" centerContent>
        <Grid
          columnGap={16}
          rowGap={8}
          templateColumns="repeat(2, 1fr)"
          alignItems="center"
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
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
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Heading as="h1" fontSize="4xl" mb="8">
              Was ist die Inselbühne?
            </Heading>
            <Text>
              Inselbühne haben wir die 1974 errichtete Freilichtbühne auf der
              Freundschaftsinsel neu benannt. Seit 2012 wird sie nicht mehr
              genutzt und es gibt Pläne, sie abzureißen. Das wollen wir
              verhindern, denn es gibt keine geeignetere Open-Air-Bühne in der
              Stadt. Wir meinen, Potsdam braucht eine Freilichtbühne, vor allem
              in Zeiten einer Pandemie.{" "}
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

const Section4: FC = () => {
  const bg = useColorModeValue("gray.50", "purple.800");

  return (
    <Box as="section" pb={{ base: "20", md: "40" }} textAlign="center" bg={bg}>
      <Container maxW="3xl">
        <Heading
          as="h6"
          variant="uppercase"
          fontSize="sm"
          mb="5"
          color="green.500"
        >
          Los geht's
        </Heading>
        <Heading as="h1" fontSize="4xl">
          Lass uns die Inselbühne gemeinsam wiederbeleben
        </Heading>
        <Text mt="5" mb="10" variant="light">
          Zunächst provisorisch im Sommer 2021, als nicht-kommerzielle
          Spielstätte für Kulturschaffende und Laien aus Potsdam, die eine
          pandemie-taugliche Auftrittsmöglichkeit dringend benötigen. Und wenn
          die Reaktionen positiv genug sind, machen wir auch nach 2021 weiter.{" "}
        </Text>
        <Link href="/fortschritt" passHref>
          <Button colorScheme="green" size="lg" shadow="base" as="a">
            Schau Dir den Fortschritt an
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

const HomePage = ({ posts }) => {
  return (
    <MotionPageTransition>
      <Section1 />
      <Section2 posts={posts} />
      <Section3 />
      <Section4 />
    </MotionPageTransition>
  );
};

HomePage.Layout = Default;

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPosts())
    .filter((_, i) => i < 3)
    .filter((p) => p.isSticky);

  return {
    props: {
      posts,
    },
    revalidate: 300,
  };
};
