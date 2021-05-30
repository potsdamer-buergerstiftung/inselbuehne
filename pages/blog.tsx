import {
  Box,
  Container,
  useColorModeValue as mode,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Default } from "@components/layouts";
import { PageTitle } from "@components/core";
import { MotionPageTransition } from "@components/motion";
import { NextSeo } from "next-seo";
import { PostCard } from "@components/posts";
import { GetStaticProps } from "next";
import { getAllPosts } from "@lib/api/posts";

const Blog = ({ posts }) => {
  return (
    <MotionPageTransition>
      <NextSeo title="Aktuelles" />
      <PageTitle
        title="Was bei uns so passiert"
        heading="Unser Blog"
        bg={mode("white", "purple.800")}
      >
        Hier erfährst Du, was wir schon alles geschaft haben und was noch
        gemacht werden muss.
      </PageTitle>
      <Box as="section" bg={mode("white", "purple.800")} pt="10" pb="20">
        <Container maxW="container.xl">
          <Grid columnGap={8} rowGap={16} templateColumns="repeat(6, 1fr)">
            {posts.map((post, index) => (
              <GridItem colSpan={{ base: 6, md: 3, lg: 2 }} key={index}>
                <PostCard
                  imageUrl={post.imageUrl}
                  title={post.title}
                  author={post.author}
                  date={new Date(post.date)}
                  excerpt={post.excerpt}
                  link={`/beitrag/${post.slug}`}
                  avatar="default"
                />
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
    </MotionPageTransition>
  );
};

Blog.Layout = Default;

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 300,
  };
};
