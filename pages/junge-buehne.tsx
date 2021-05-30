import { Box, Container, Text } from "@chakra-ui/react";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";

export default function JungeBuehne() {
  return (
    <MotionPageTransition>
      <PageTitle
        title="Dürfen wir vorstellen: Die „Junge Bühne“"
        heading="Junge Bühne"
        bg={mode("blue.100", "blue.900")}
      >
        Auf dieser Seite werden wir demnächst Informationen und Formulare
        bereitstellen, um Euch die Anmeldung zu erleichtern.
      </PageTitle>
      <Box as="section" py="20" bg={mode("blue.100", "blue.900")}></Box>
    </MotionPageTransition>
  );
}

JungeBuehne.Layout = Default;
