import Layout from "../components/Layout";
import Title from "../components/Title";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Link from "next/link";
import EmailIcon from "../components/icons/email";
import useSWR from "swr";
import { useState } from "react";

const mutation = `
mutation {
  contactRequest(input: {name: "", message: "", email:"" })
}
`

const fetcher = (query) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

function SuccessBox(props) {
  return (
    <Box as="section" pb="20">
      <Container centerContent>
        <Text>Deine Nachricht wurde erfolgreich versandt.</Text>
      </Container>
    </Box>
  )
}

function ContactForm(props) {

  const [submitted, setSubmitted] = useState(false)
  const { data, error } = useSWR(submitted ? mutation : null, fetcher)

  return (
    <Box as="section" pb="20">
      <Container centerContent>
        <Grid
          alignItems="center"
          templateColumns="repeat(2, 1fr)"
          columnGap={6}
          rowGap={6}
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl>
              <Input
                placeholder="Dein Name / Organisation"
                variant="filled"
                size="lg"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl>
              <Input
                placeholder="Deine E-Mail-Adresse"
                variant="filled"
                size="lg"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <Textarea
                variant="filled"
                w="full"
                placeholder="Deine Nachricht"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button colorScheme="green" size="lg" isFullWidth onClick={() => setSubmitted(true)}>
              Nachricht senden
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default function Contact() {
  return (
    <Layout title="Kontakt" fluid>
      <Title title="Wie können wir helfen?" heading="Kontakt" color="white">
        Hast Du Fragen bezüglich der Inselbühne? Dann kontaktiere uns doch
        einfach!
      </Title>
      <Box as="section" pb="20">
        <Container centerContent>
          <Box as="div" pb="5">
            <EmailIcon boxSize={12} color="green.500" />
          </Box>
          <Heading as="h6" variant="uppercase" fontSize="sm">
            E-Mail
          </Heading>
          <Text color="gray.600">
            <Link href="mailto:hallo@inselbuehne-potsdam.de">
              hallo@inselbuehne-potsdam.de
            </Link>
          </Text>
        </Container>
      </Box>
      <ContactForm />
    </Layout>
  );
}
