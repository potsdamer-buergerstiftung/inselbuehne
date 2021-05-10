import { Box, Container, Heading, SimpleGrid, Stack } from "@chakra-ui/layout";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { NextSeo } from "next-seo";
import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import { GetStaticProps } from "next";
import { getEventCategories, getEvents } from "@lib/api";
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { TicketButton } from "@components/events";
import EventCard from "@components/events/EventCard";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Events({ categories }) {
  const [categoryId, setCategoryId] = useState<string>("");
  const { data, error } = useSWR("/api/events", fetcher);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <MotionPageTransition>
      <NextSeo title="Veranstaltungen" />
      <PageTitle
        title="Bühne frei"
        heading="Veranstaltungen"
        bg={mode("white", "purple.800")}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus,
        mattis non accumsan in, tempor dictum neque.
      </PageTitle>
      <Box as="section" pt="10" bg={mode("white", "purple.800")}>
        <Container maxW="container.lg">
          <SimpleGrid columns={3} gap="5">
            <Input
              type="text"
              placeholder="Suchen..."
              variant="filled"
              size="lg"
            />
            <Select variant="filled" placeholder="Monat" size="lg" />
            <Select
              variant="filled"
              placeholder="Kategorie"
              size="lg"
              onChange={(event) => setCategoryId(event.target.value)}
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
            {data &&
              data.events.map((event, i) => {
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
                    key={i}
                  />
                )
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

  return {
    props: {
      categories,
    },
    revalidate: 300,
  };
};
