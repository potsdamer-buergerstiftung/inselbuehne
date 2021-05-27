import {
  Box,
  Center,
  Container,
  Spinner,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";
import PostTitle from "@components/posts/Title";
import { getAllPostsWithSlug, getPost } from "@lib/api/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import PageNotFound from "pages/404";
import { NextSeo } from "next-seo";
import ContentRenderer from "@components/core/ContentRenderer";

const PostPage = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <PageNotFound />;
  }

  if (router.isFallback) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <MotionPageTransition>
      <NextSeo title={post.title} />
      <PostTitle post={post} />
      <Box as="section" bg={mode("white", "purple.900")} py="20">
        <Container>
          <ContentRenderer blocks={post.blocks} />
        </Container>
      </Box>
    </MotionPageTransition>
  );
};

PostPage.Layout = Default;

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params?.slug as string);

  return {
    props: {
      post,
    },
    revalidate: 300,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths:
      allPosts.edges.map((edge) => {
        return {
          params: {
            slug: edge.node.slug,
          },
        };
      }) || [],
    fallback: true,
  };
};
