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

interface EventCardProps {
  id: string;
  title: string;
  imageUrl?: string;
  description: string;
  category?: string;
  subcategory?: string;
  start: Date;
  end: Date;
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
            <GridItem colSpan={1}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  sizes="400px"
                  src={imageUrl}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  quality={50}
                />
              </AspectRatio>
            </GridItem>
          )}
          <GridItem colSpan={2}>
            <Stack
              direction="row"
              align="center"
              px="8"
              py="5"
              justify="space-between"
            >
              <Stack direction="row" align="center" spacing="8">
                <Box shadow="xl" p="4">
                  <Stack align="center">
                    <Text variant="light">
                      {start.toLocaleDateString("de-DE", { month: "long" })}
                    </Text>
                    <Heading>{start.getDate()}</Heading>
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
              <TicketButton eventId={id} />
            </Stack>
          </GridItem>
        </Grid>
      </MotionBox>
    </LinkBox>
  );
};

export default EventCard;
