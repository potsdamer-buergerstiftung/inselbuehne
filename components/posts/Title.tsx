import { Box, Heading, SimpleGrid, useColorModeValue, Container, Text, AspectRatio } from "@chakra-ui/react";
import { formatDate } from "@lib/time";
import { MotionBox } from "@components/motion"
import { FC } from "react";
import Image from "next/image"

interface PostTitleArgs {
  post: any
}

const PostTitle: FC<PostTitleArgs> = ({ post }) => {
  const bg = useColorModeValue("green.100", "purple.900")

  return (
    <Box bg={bg} py={{ base: 15, lg: 28 }} mb={-40}>
      <Container maxW="6xl">
        <SimpleGrid columns={2} alignItems="center">
          <Box mt={-24}>
            <Heading
              as="h6"
              variant="uppercase"
              fontSize="sm"
              mb="5"
              color="green.500"
            >
              {formatDate(post.date)}
            </Heading>
            <Heading size="3xl" mb={5}>{post.title}</Heading>
            <Text>Ein Beitrag von {post.author.node.name}</Text>
          </Box>
          <MotionBox>
            <AspectRatio ratio={1 / 1}>
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={`Bild von ${post.title}`}
                objectFit="cover"
                layout="fill"
                quality={50}
                sizes="300px"
              />
            </AspectRatio>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default PostTitle
