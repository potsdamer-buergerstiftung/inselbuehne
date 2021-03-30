import { Box, Heading, SimpleGrid, useColorModeValue, Container, Text, AspectRatio } from "@chakra-ui/react";
import { formatDate } from "@lib/time";
import { MotionBox } from "@components/motion"
import { FC } from "react";
import Image from "next/image"
import { parseISO } from "date-fns";

interface PostTitleArgs {
  post: any
}

const PostTitle: FC<PostTitleArgs> = ({ post }) => {
  const bg = useColorModeValue("green.100", "purple.900")

  return (
    <Box bg={bg} py={post.featuredImage ? { base: 15, lg: 28 } : { base: "10rem", lg: "20rem" }} mb={-40}>
      <Container maxW="6xl">
        <SimpleGrid columns={post.featuredImage ? 2 : 1} alignItems="center">
          <Box mt={-24} textAlign={post.featuredImage ? null : "center"}>
            <Heading
              as="h6"
              variant="uppercase"
              fontSize="sm"
              mb="5"
              color="green.500"
            >
              {formatDate(parseISO(post.date))}
            </Heading>
            <Heading size="3xl" mb={5}>{post.title}</Heading>
            <Text>Ein Beitrag von {post.author.node.name}</Text>
          </Box>
          {post.featuredImage && (
            <MotionBox>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={`Bild von ${post.title}`}
                  objectFit="cover"
                  layout="fill"
                  quality={30}
                  sizes="1000px"
                />
              </AspectRatio>
            </MotionBox>
          )}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default PostTitle
