import { join } from "path"
import fs from "fs"

const postsDirectory = join(process.cwd(), '_posts')

export default function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}
