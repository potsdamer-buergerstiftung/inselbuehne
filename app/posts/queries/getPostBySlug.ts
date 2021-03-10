import { Ctx } from "blitz"
import { getPostBySlug, getPostSlugs } from "./getAllPosts"

interface GetPostBySlugArgs {
  fields: string[]
  slug: string
}

export default async function (
  { fields, slug }: GetPostBySlugArgs
) {

  return getPostBySlug(slug, fields)
}
