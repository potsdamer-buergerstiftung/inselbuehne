import { Box, Container } from "@chakra-ui/react";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";
import PostTitle from "@components/posts/Title";
import { getAllPostsWithSlug, getPost } from "@lib/api/posts";
import { formatDate } from "@lib/time";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router"
import PageNotFound from "pages/404";

const PostPage = ({ post }) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <PageNotFound />
  }

  return (
    <MotionPageTransition>
      <PostTitle post={post} />
      <Box as="section" bg="white">
        <Container bg="white" dangerouslySetInnerHTML={{ __html: post.content }} pb={20} pt={40}></Container>
      </Box>
    </MotionPageTransition>
  );
};

PostPage.Layout = Default;

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params.slug)
  const post = await getPost(params.slug as string)
  console.log(post)

  return {
    props: {
      post
    },
    revalidate: 300,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/fortschritt/${node.slug}`) || [],
    fallback: true,
  }
}
