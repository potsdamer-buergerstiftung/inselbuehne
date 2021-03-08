import { Heading } from "@chakra-ui/react";
import getAllPosts from "app/posts/queries/getAllPosts";
import getPostBySlug from "app/posts/queries/getPostBySlug";
import { BlitzPage, Head } from "blitz";
import Layout from "app/core/layouts/Layout"
import Title from "app/core/components/Title";
import { stringDateToFormatted } from "app/helper/dateFormat";

const PostPage: BlitzPage<{ post: any }> = ({ post }) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <Title title={post.title} heading={`Ein Beitrag von ${post.author.name}`}>
                {stringDateToFormatted(post.date)}
            </Title>

        </>
    )
}

PostPage.getLayout = (page) => <Layout>{page}</Layout>

export default PostPage

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])

    return {
        props: {
            post: {
                ...post,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts({ fields: ['slug'] })

    return {
        paths: posts.map((posts) => {
            return {
                params: {
                    slug: posts.slug,
                },
            }
        }),
        fallback: false,
    }
}
