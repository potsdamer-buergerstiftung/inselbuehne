import { fetchAPI } from "./fetcher";
import { parseISO } from "date-fns";

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

interface GetAllPostsResult {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  imageUrl: string;
  author: string;
}

export async function getAllPosts(): Promise<GetAllPostsResult[]> {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC }, categoryName: "inselbuehne-aktuelles" }) {
        nodes {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `
  );

  return data?.posts.nodes.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    date: post.date,
    imageUrl: post.featuredImage.node.sourceUrl,
    author: post.author.node.name,
  }));
}

export async function getPost(slug: string) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: ID!) {
      post(idType: SLUG, id: $slug) {
        title
        excerpt
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    }
  );
  return data?.post;
}
