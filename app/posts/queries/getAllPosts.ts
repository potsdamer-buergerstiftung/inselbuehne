import { Ctx } from "blitz"
import fs from "fs"
import matter from "gray-matter"
import path, { join } from "path"

interface GetAllPostsArgs {
    fields: string[]
}

const postsDirectory = path.join(process.cwd(), '_posts')

export function getPostSlugs(): string[] {
    let slugs: string[] = []
    try {
        slugs = fs.readdirSync(postsDirectory)
    } finally{
        return slugs
    }
}

export function getPostBySlug(slug: string, fields: any[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export default async function getAllPosts(
    { fields }: GetAllPostsArgs,
    _: Ctx,
) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    return posts
}
