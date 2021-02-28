import Layout from "../components/Layout";
import Title from "../components/Title";
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

export default function PageNotFound() {
  const bg = useColorModeValue("red.100", "purple.800");

  return (
    <>
      <NextSeo title="Seite nicht gefunden" />
      <Title title="Seite nicht gefunden" bg={bg} heading="404">
        Es tut uns leid, aber Deine gesuchte Seite konnte nicht gefunden werden.
      </Title>
    </>
  );
}

PageNotFound.Layout = Layout;
