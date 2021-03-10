import getAllPosts from "app/posts/queries/getAllPosts";
import { BlitzPage, Head } from "blitz";
import Layout from "app/core/layouts/Layout"
import Title from "app/core/components/Title";
import { stringDateToFormatted } from "app/helper/dateFormat";
import getPostBySlug from "app/posts/queries/getPostBySlug";

const PostPage: BlitzPage<{ post: any }> = ({ post }) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <Title title={post.title} heading={`Ein Beitrag von ${post.author}`}>
                {stringDateToFormatted(post.date)}
            </Title>

        </>
    )
}

PostPage.getLayout = (page) => <Layout>{page}</Layout>

export default PostPage

export async function getStaticProps({ params }) {
    const post = await getPostBySlug({
        fields: [
            'title',
            'date',
            'slug',
            'author',
            'content',
            'ogImage',
            'coverImage',
        ], slug: params.slug
    })

    return {
        props: {
            post: {
                ...post,
            },
        },
    }
}

export const getStaticPaths = async (context) => {
    const posts = await getAllPosts({ fields: ['slug'] }, context)

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
