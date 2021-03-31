import { FC } from "react";
import {
  Box,
  Text,
  Heading,
  AspectRatio,
  Wrap,
  WrapItem,
  Avatar,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@lib/time";
import { MotionBox } from "@components/motion";

interface PostCardArgs {
  title: string;
  author?: string;
  date: Date;
  link: string;
  excerpt?: string;
  imageUrl?: string;
  avatar?: "name" | "default";
}

const PostCard: FC<PostCardArgs> = (props) => {
  const { title, author, date, link, excerpt, imageUrl, avatar } = props;

  const bg = useColorModeValue("white", "purple.900");

  return (
    <LinkBox as="article">
      <MotionBox
        shadow="lg"
        rounded="lg"
        position="relative"
        overflow="hidden"
        bg={bg}
        whileHover={{ y: -5 }}
      >
        {imageUrl && (
          <AspectRatio ratio={3 / 2}>
            <Image
              sizes="400px"
              src={imageUrl}
              alt="Band auf der Inselbühne"
              layout="fill"
              objectFit="cover"
              quality={50}
            />
          </AspectRatio>
        )}
        <Box p={{ base: 5, md: 8 }}>
          <Link href={link} passHref>
            <LinkOverlay isExternal={link.includes("http")}>
              <Heading size="lg" mb={3}>
                {title}
              </Heading>
            </LinkOverlay>
          </Link>
          { excerpt && <Box dangerouslySetInnerHTML={{ __html: excerpt }} />}
          <Wrap align="center" mt={5} spacing={3}>
            {avatar && (
              <WrapItem>
                <Avatar name={avatar == "name" ? author : undefined} />
              </WrapItem>
            )}
            <WrapItem>
              <Box>
                <Text lineHeight="normal">{author}</Text>
                <Text variant="light">{formatDate(date)}</Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </MotionBox>
    </LinkBox>
  );
};

export default PostCard;
