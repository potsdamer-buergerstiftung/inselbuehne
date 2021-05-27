import Hashids from "hashids";

const hashids = new Hashids();

export default function ShortenedEvent() {
  return <h1></h1>;
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const id = hashids.decode(slug);

  return {
    redirect: {
      destination: `/veranstaltungen/${id}`,
      permanent: false,
    },
  };
}
