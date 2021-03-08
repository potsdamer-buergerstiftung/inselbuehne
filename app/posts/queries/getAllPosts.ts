import getPostBySlug from "./getPostBySlug"
import getPostSlugs from "./getPostSlugs"

interface GetAllPostsArgs {
    fields: string[]
}

export default async function getAllPosts({ fields = [] }: GetAllPostsArgs) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    console.log(posts)
    return posts
}
