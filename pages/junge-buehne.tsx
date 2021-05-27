import { Box, Container, Text } from "@chakra-ui/react";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";

export default function JungeBuehne() {
  return (
    <MotionPageTransition>
      <PageTitle
        title="Dürfen wir vorstellen: Die „Junge Bühne“"
        heading="Junge Bühne"
        bg="blue.100"
      >
        Auf dieser Seite werden wir demnächst Informationen und Formulare
        bereitstellen, um Euch die Anmeldung zu erleichtern.
      </PageTitle>
      <Box as="section" py="20" bg="blue.100"></Box>
    </MotionPageTransition>
  );
}

JungeBuehne.Layout = Default;
