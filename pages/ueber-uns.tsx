import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Title from "../components/Title";

interface TeamMember {
  name: string;
  role: string;
  details: string;
}

const team: TeamMember[] = [
  {
    name: "Marie-Luise Glahr",
    role: "Vorsitzende",
    details: "",
  },
];

export default function AboutUst() {
  return (
    <Layout title="Über uns" fluid>
      <Title title="Über uns" heading="Unsere Mission"></Title>
      <Box as="section" py="20">
        <Container maxW="6xl">
          <Heading as="h1" pb="10">
            Unser Team
          </Heading>
          <Grid
            columnGap={4}
            rowGap={6}
            templateColumns="repeat(12, 1fr)"
            alignItems="center"
          >
            <GridItem colSpan={{ base: 12, md: 3 }}>
              <Link>
                <AspectRatio mb="5" ratio={1 / 1}>
                  <Box background="gray.100"></Box>
                </AspectRatio>
              </Link>
              <Text align="center" fontWeight={500}>
                Marie-Luise Glahr
              </Text>
              <Text align="center">Vorsitzende</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
