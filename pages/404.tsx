import Layout from "../components/Layout";
import Title from "../components/Title";
import { Box, Container, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

export default function PageNotFound() {
  return (
    <>
      <NextSeo title="Seite nicht gefunden" />
      <Title title="Seite nicht gefunden" heading="404" color="red.50">
        Es tut uns leid, aber Deine gesuchte Seite konnte nicht gefunden werden.
      </Title>
    </>
  );
}

PageNotFound.Layout = Layout;
