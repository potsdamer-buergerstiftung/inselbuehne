import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function AboutUst() {
  return (
    <Layout title="Über uns" fluid>
      <Title title="Über uns" heading="Unsere Mission" color="gray.100"></Title>
    </Layout>
  );
}
