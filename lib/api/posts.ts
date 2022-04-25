import { fetchAPI } from "./fetcher";

export async function getAllPostsWithSlug() {
  return []
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
  isSticky: boolean;
}

export async function getAllPosts(): Promise<GetAllPostsResult[]> {
  return []
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC }, categoryName: "inselbuehne-aktuelles" }) {
        nodes {
          title
          excerpt
          slug
          date
          isSticky
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
    imageUrl: post.featuredImage?.node.sourceUrl || null,
    author: post.author.node.name,
    isSticky: post.isSticky,
  }));
}

interface GetPostResult {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  imageUrl: string | null;
  author: string;
  blocks: any[];
}

export async function getPost(slug: string) {
  return null
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
        blocks {
          type
          tagName
          id
          attributes {
            name
            value
          }
          innerHtml
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
