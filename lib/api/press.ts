import { fetchAPI } from "./fetcher";

interface PressPost {
  title: string;
  link: string;
  date: string;
  author: string;
}

export async function getAllPressPosts() {
  const data = await fetchAPI(
    `
    query AllPressPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC }, categoryName: "inselbuehne-presse" }) {
        nodes {
          title
          excerpt
          content
          date
        }
      }
    }
  `
  );

  return data?.posts.nodes.map((post) => ({
    title: post.title,
    link: post.content.replace(/(<([^>]+)>)/gi, ""),
    date: post.date,
    author: post.excerpt.replace(/(<([^>]+)>)/gi, ""),
  }));
}
