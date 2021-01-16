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
    name: "Kaspar von Erffa",
    role: "Projektleiter",
    details: "",
  },
  {
    name: "Marie-Luise Glahr",
    role: "Vorsitzende",
    details: "",
  },
  {
    name: "Johannes Götzke",
    role: "Vorsitzende",
    details: "",
  },
  {
    name: "Stephan Heinlein",
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
            {team.map((member) => (
              <GridItem colSpan={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                <Link>
                  <AspectRatio mb="5" ratio={1 / 1}>
                    <Box background="gray.100" rounded="lg"></Box>
                  </AspectRatio>
                </Link>
                <Text align="center" fontWeight={500}>
                  {member.name}
                </Text>
                <Text align="center">{member.role}</Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
