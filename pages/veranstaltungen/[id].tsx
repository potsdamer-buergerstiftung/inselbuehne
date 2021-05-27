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
import dayjs from "dayjs";

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

  const start = dayjs(event.start.utc);
  const end = dayjs(event.end.utc);

  return (
    <MotionPageTransition>
      <NextSeo title={event.name.text} />
      <Box
        as="section"
        pb="20"
        bg={mode("white", "purple.900")}
        pt={{ base: "32", lg: "48" }}
      >
        <Container maxW="container.lg">
          <Box
            rounded="lg"
            bg={mode("gray.100", "purple.800")}
            overflow="hidden"
            shadow="xl"
          >
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem colSpan={{ base: 6, lg: 3 }}>
                <Box
                  position="relative"
                  height={{ base: "60", lg: "full" }}
                  width="full"
                >
                  <Image
                    src={event.logo.original.url}
                    objectFit="cover"
                    layout="fill"
                    sizes="400px"
                    quality="90"
                  />
                </Box>
              </GridItem>
              <GridItem
                colSpan={{ base: 6, lg: 3 }}
                px={{ base: 6, sm: 8 }}
                py="8"
              >
                <Stack
                  justify="space-between"
                  height="full"
                  align="start"
                  spacing="12"
                >
                  <Heading size="lg">{event.name.text}</Heading>
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
              px={{ base: 6, sm: 8 }}
              borderBottomColor={mode("gray.300", "transparent")}
              borderBottomWidth="1px"
            >
              <Stack
                direction={{ base: "column", md: "row" }}
                align={{ base: "start", md: "center" }}
                justify="space-between"
              >
                <Button
                  size="sm"
                  colorScheme="green"
                  variant="ghost"
                  onClick={onCopy}
                  rightIcon={hasCopied ? <CheckIcon /> : <LinkIcon />}
                  ml="-3"
                >
                  {hasCopied
                    ? "Link in Zwischenablage kopiert"
                    : "Link zum Teilen aufrufen"}
                </Button>
                <Text>
                  <Text as="b">{start.format("dddd, D. MMMM YYYY")}</Text>{" "}
                  {start.format("HH:mm")} Uhr - {end.format("HH:mm")} Uhr
                </Text>
              </Stack>
            </Box>
            <Box
              px={{ base: 6, sm: 8 }}
              py="8"
              bg={mode("white", "purple.800")}
            >
              <Container
                maxW="container.md"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
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
