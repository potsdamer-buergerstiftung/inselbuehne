import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Square,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/layout";
import { MotionBox } from "@components/motion";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { FC } from "react";
import Image from "next/image";
import { TicketButton } from "..";
import { Tag } from "@chakra-ui/tag";
import RouterLink from "next/link";
import dayjs from "dayjs";

interface EventCardProps {
  id: string;
  title: string;
  imageUrl?: string;
  description: string;
  category?: string;
  subcategory?: string;
  start: Date;
  end: Date;
  isSoldOut?: boolean;
}

const EventCard: FC<EventCardProps> = (props) => {
  const {
    id,
    imageUrl,
    title,
    description,
    category,
    subcategory,
    start,
    end,
    isSoldOut = false,
  } = props;
  return (
    <LinkBox as="article">
      <MotionBox
        shadow="lg"
        rounded="lg"
        position="relative"
        overflow="hidden"
        bg={mode("white", "purple.900")}
        whileHover={{ y: -5 }}
      >
        <Grid templateColumns="repeat(3, 1fr)" alignItems="center">
          {imageUrl && (
            <GridItem colSpan={{ base: 3, lg: 1 }}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  sizes="400px"
                  src={imageUrl}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                />
              </AspectRatio>
            </GridItem>
          )}
          <GridItem colSpan={{ base: 3, lg: 2 }}>
            <Stack
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
              px="6"
              py="5"
              justify="space-between"
              spacing={{ base: 5, md: 4 }}
            >
              <Stack
                direction={{ base: "column", md: "row" }}
                align={{ base: "start", md: "center" }}
                spacing="6"
              >
                <Box shadow="xl" p="4" bg={mode("white", "purple.800")}>
                  <Stack align="center">
                    <Text variant="light">{dayjs(start).format("MMM")}</Text>
                    <Heading>{dayjs(start).format("D")}</Heading>
                  </Stack>
                </Box>
                <Stack>
                  <RouterLink href={`/veranstaltungen/${id}`} passHref>
                    <LinkOverlay>
                      <Heading size="lg">{title}</Heading>
                    </LinkOverlay>
                  </RouterLink>
                  <Text>{description}</Text>
                  {category && (
                    <Wrap>
                      <Tag colorScheme="green">{category}</Tag>
                      {subcategory && <Tag>{subcategory}</Tag>}
                    </Wrap>
                  )}
                </Stack>
              </Stack>
              <Box>
                <TicketButton
                  eventId={id}
                  type={isSoldOut ? "SOLD_OUT" : "TICKET"}
                  size="md"
                />
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </MotionBox>
    </LinkBox>
  );
};

export default EventCard;
