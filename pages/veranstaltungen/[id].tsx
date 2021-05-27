import {
  AspectRatio,
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Stack,
  useColorModeValue as mode,
  Text,
  Badge,
  Wrap,
  Tag,
  Button,
  useClipboard,
} from "@chakra-ui/react";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import PageNotFound from "pages/404";
import { NextSeo } from "next-seo";
import { getEvent, getEvents } from "@lib/api";
import Image from "next/image";
import { TicketButton } from "@components/events";
import Hashids from "hashids";
import { CheckIcon, LinkIcon } from "@chakra-ui/icons";

const hashids = new Hashids();

export default function EventPage({ event }) {
  const router = useRouter();

  if (!router.isFallback && !event?.id) {
    return <PageNotFound />;
  }

  if (router.isFallback) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  const eventSlug = hashids.encode(event.id);
  const { hasCopied, onCopy } = useClipboard(
    `inselbuehne-potsdam.de/e/${eventSlug}`
  );

  return (
    <MotionPageTransition>
      <NextSeo title={event.name.text} />
      <Box as="section" py="32" bg={mode("white", "purple.900")}>
        <Container maxW="container.lg">
          <Box
            rounded="lg"
            bg={mode("gray.100", "purple.800")}
            overflow="hidden"
            shadow="xl"
          >
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem colSpan={3}>
                <Box position="relative" height="full">
                  <Image
                    src={event.logo.original.url}
                    objectFit="cover"
                    layout="fill"
                    sizes="400px"
                    quality="90"
                  />
                </Box>
              </GridItem>
              <GridItem colSpan={3} p="8">
                <Stack
                  justify="space-between"
                  height="full"
                  align="start"
                  spacing="12"
                >
                  <Stack direction="row" spacing="5" align="center">
                    <Box shadow="xl" p="4" bg={mode("white", "purple.900")}>
                      <Stack align="center" spacing="0">
                        <Text variant="light">
                          {new Date(
                            event.start.local
                          ).toLocaleDateString("de-DE", { month: "long" })}
                        </Text>
                        <Heading>
                          {new Date(event.start.local).getDate()}
                        </Heading>
                      </Stack>
                    </Box>
                    <Stack>
                      <Heading size="lg">{event.name.text}</Heading>
                      {event.category && (
                        <Wrap>
                          <Tag variant="solid" colorScheme="green">{event.category.name}</Tag>
                          {event.subcategory && (
                            <Tag colorScheme="green">{event.subcategory.name}</Tag>
                          )}
                        </Wrap>
                      )}
                    </Stack>
                  </Stack>
                  <Stack width="full" align="start">
                    {event.is_free && (
                      <Badge colorScheme="green">Kostenlos</Badge>
                    )}
                    <TicketButton eventId={event.id} isFullWidth />
                  </Stack>
                </Stack>
              </GridItem>
            </Grid>
            <Box
              bg={mode("white", "purple.900")}
              py="4"
              px="5"
              borderBottomColor={mode("gray.300", "transparent")}
              borderBottomWidth="1px"
            >
              <Wrap>
                <Button
                  size="sm"
                  colorScheme="green"
                  variant="ghost"
                  onClick={onCopy}
                  rightIcon={hasCopied ? <CheckIcon /> : <LinkIcon />}
                >
                  {hasCopied
                    ? "Link in Zwischenablage kopiert"
                    : "Link zum Teilen aufrufen"}
                </Button>
              </Wrap>
            </Box>
            <Box p="8" bg={mode("white", "purple.800")}>
              {event.description?.text}
            </Box>
          </Box>
        </Container>
      </Box>
    </MotionPageTransition>
  );
}

EventPage.Layout = Default;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = await getEvent(params?.id as string);

  return {
    props: {
      event,
    },
    revalidate: 300,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allEvents = await getEvents();

  return {
    paths:
      allEvents.map((event) => {
        return {
          params: {
            id: event.id,
          },
        };
      }) || [],
    fallback: true,
  };
};
