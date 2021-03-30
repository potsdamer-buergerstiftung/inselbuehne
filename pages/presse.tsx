import { FC, useState } from "react";
import {
    Box,
    Container,
    Text,
    Heading,
    Flex,
    Square,
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
import { getAllPressPosts } from "@lib/api/press";
import { parseISO } from "date-fns";

interface Section2 {
    posts: any;
}

const Section2: FC<Section2> = ({ posts }) => {
    return (
        <Box as="section" bg={mode("white", "purple.900")} pt="14rem" mt="-8rem" pb={20}>
            <Container maxW="6xl">
                <Grid columnGap={8} rowGap={16} templateColumns="repeat(6, 1fr)">
                    {posts.map((post, index) => (
                        <GridItem colSpan={{ base: 6, md: 3, lg: 2 }} key={index}>
                            <PostCard title={post.title} link={post.link} author={post.author} date={parseISO(post.date)} />
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

const PressPage = ({ posts = [] }) => {

    return (
        <MotionPageTransition>
            <NextSeo title="Presse" />
            <PageTitle
                title="Was andere über uns erzählen"
                heading="Presse"
                bg={mode("white", "purple.900")}
            >
            </PageTitle>
            <Section2 posts={posts} />
        </MotionPageTransition>
    );
};

PressPage.Layout = Default;

export default PressPage;

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPressPosts()
    return {
        props: {
            posts,
        },
        revalidate: 300,
    };
};
