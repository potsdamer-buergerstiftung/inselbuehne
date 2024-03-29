import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
} from "@chakra-ui/layout";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { NextSeo } from "next-seo";
import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import { GetStaticProps } from "next";
import { getEventCategories, getEvents } from "@lib/api";
import { useState } from "react";
import EventCard from "@components/events/EventCard";
import RouterLink from "next/link";

export default function Events({ categories, events }) {
  const [categoryId, setCategoryId] = useState<string>("");

  return (
    <MotionPageTransition>
      <NextSeo title="Veranstaltungen" />
      <PageTitle
        title="Bühne frei"
        heading="Veranstaltungen"
        bg={mode("white", "purple.800")}
      >
        Wir bitten um Verständnis, aktuell maximal <b>170</b> Teilnehmende
        zulassen zu können. Informationen zu weiteren Teilnahmebedingungen und
        aktuellen Eindämmungsmaßnahmen{" "}
        <RouterLink href="/verordnung">
          <Link color="green.500">findest Du hier</Link>
        </RouterLink>
        .
      </PageTitle>
      <Box as="section" bg={mode("white", "purple.800")}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="5">
            <Input
              type="text"
              placeholder="Suchen..."
              variant="filled"
              size="lg"
              disabled
            />
            <Select variant="filled" placeholder="Monat" size="lg" disabled />
            <Select
              variant="filled"
              placeholder="Kategorie"
              size="lg"
              onChange={(event) => setCategoryId(event.target.value)}
              disabled
            >
              {categories.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name}
                </option>
              ))}
            </Select>
          </SimpleGrid>
        </Container>
      </Box>
      <Box as="section" py="20" bg={mode("white", "purple.800")}>
        <Container maxW="container.xl">
          <Stack spacing="10">
            {events.map((event, i) => {
              return (
                <EventCard
                  title={event.name.text}
                  imageUrl={event.logo?.url}
                  description={event.summary}
                  category={event.category?.name_localized}
                  subcategory={event.subcategory?.name_localized}
                  id={event.id}
                  start={new Date(event.start.utc)}
                  end={new Date(event.end.utc)}
                  isSoldOut={event.ticket_availability.is_sold_out}
                  key={i}
                />
              );
            })}
          </Stack>
        </Container>
      </Box>
    </MotionPageTransition>
  );
}

Events.Layout = Default;

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getEventCategories();
  const events = await getEvents();

  return {
    props: {
      categories,
      events,
    },
    revalidate: 300,
  };
};
