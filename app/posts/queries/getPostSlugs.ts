import path from "path"
import fs from "fs"

const postsDirectory = path.join(process.cwd(), '_posts')

export default function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory)
}
