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
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@lib/time";
import { MotionBox } from "@components/motion";

interface PostCardArgs {
  post: any;
}

const PostCard: FC<PostCardArgs> = ({ post }) => {
  const bg = useColorModeValue("white", "purple.900")

  return (
    <Link href={`/fortschritt/${post.slug}`}>
      <MotionBox
        shadow="lg"
        rounded="lg"
        position="relative"
        overflow="hidden"
        bg={bg}
        cursor="pointer"
        whileHover={{ y: -5 }}
      >
        {post.featuredImage && (
          <AspectRatio ratio={3 / 2}>
            <Image
              sizes="400px"
              src={post.featuredImage.node.sourceUrl}
              alt="Band auf der Inselbühne"
              layout="fill"
              objectFit="cover"
              quality={50}
            />
          </AspectRatio>
        )}
        <Box p={{ base: 5, md: 8 }}>
          <Heading size="lg" mb={3}>
            {post.title}
          </Heading>
          <Box dangerouslySetInnerHTML={{ __html: post.excerpt }}></Box>
          <Wrap align="center" mt={5} spacing={3}>
            <WrapItem>
              <Avatar name={post.author.node.name} />
            </WrapItem>
            <WrapItem>
              <Box>
                <Text lineHeight="normal">{post.author.node.name}</Text>
                <Text variant="light">{formatDate(post.date)}</Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </MotionBox>
    </Link>
  );
};

export default PostCard;
