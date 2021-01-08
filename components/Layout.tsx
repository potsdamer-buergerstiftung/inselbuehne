import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title} - Inselbühne Potsdam</title>
        <meta
          name="description"
          content="Die Inselbühne auf der Freundschaftsinsel ist ein wunderbarer Ort im Dornröschenschlaf, der früher lebendiger Begegnungs- und Veranstaltungsort im Herzen der Stadt war."
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
