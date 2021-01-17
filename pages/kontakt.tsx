import Layout from "../components/Layout";
import Title from "../components/Title";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import EmailIcon from "../components/icons/email";
import DoneIcon from "../components/icons/done";
import ErrorIcon from "../components/icons/error";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";

enum FormState {
  Initial,
  Submitted,
  Successful,
  Failed,
}

interface FormProps {
  state: FormState;
  setState: Dispatch<SetStateAction<FormState>>;
}

function FormLoading() {
  return (
    <Center>
      <Spinner size="xl" />
    </Center>
  );
}

function FormSuccessful() {
  return (
    <Box textAlign="center">
      <DoneIcon boxSize={24} color="green.500" />
      <Text>
        Deine Nachricht wurde erfolgreich versandt. Wir versuchen, Dir so
        schnell wie möglich zu antworten.
      </Text>
    </Box>
  );
}

function FormFailed(props: FormProps) {
  return (
    <Box textAlign="center">
      <ErrorIcon boxSize={24} color="red.500" />
      <Text>Beim Senden Deiner Nachricht ist ein Fehler aufgetreten.</Text>
      <Button onClick={() => props.setState(FormState.Initial)}>
        Erneut versuchen
      </Button>
    </Box>
  );
}

function FormInitial(props: FormProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    props.setState(FormState.Submitted);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "/api/contact",
      requestOptions
    ).then((response) => response.json());
    props.setState(FormState.Successful);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              name="name"
              ref={register}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <Input
              placeholder="Deine E-Mail-Adresse"
              variant="filled"
              size="lg"
              name="email"
              ref={register}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Textarea
              variant="filled"
              w="full"
              placeholder="Deine Nachricht"
              name="message"
              ref={register}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme="green" size="lg" isFullWidth type="submit">
            Nachricht senden
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
}

function FormSection() {
  const [state, setState] = useState(FormState.Initial);
  const props = { state, setState };

  switch (state) {
    case FormState.Submitted:
      return <FormLoading />;
    case FormState.Successful:
      return <FormSuccessful />;
    case FormState.Failed:
      return <FormFailed {...props} />;
    default:
      return <FormInitial {...props} />;
  }
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
      <Box as="section" pb="20">
        <Container centerContent>
          <FormSection />
        </Container>
      </Box>
    </Layout>
  );
}
