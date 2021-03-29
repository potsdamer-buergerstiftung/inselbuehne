import { NextSeo } from "next-seo";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import {
  Box,
  Container,
  Text,
  Heading,
  Link,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { EmailIcon, InstagramIcon } from "@components/icons";
import { MotionPageTransition } from "@components/motion";
import { InquiryForm } from "@components/contact";
import axios from "axios";

const ContactPage = () => {
  const bg = useColorModeValue("white", "purple.800");
  const color = useColorModeValue("gray.600", "white");

  const onSubmit = async (data) => axios.post("/api/contact_inquiry", data);

  return (
    <MotionPageTransition>
      <NextSeo title="Kontakt" />
      <PageTitle title="Wie können wir Dir helfen?" heading="Kontakt" bg={bg}>
        Hast Du Fragen bezüglich der Inselbühne? Dann kontaktiere uns doch
        einfach!
      </PageTitle>
      <Box as="section" pb="20" bg={bg}>
        <Container>
          <SimpleGrid spacing={10} columns={2}>
            <Box textAlign="center">
              <Box as="div" pb="5">
                <EmailIcon boxSize={12} color="green.500" />
              </Box>
              <Heading as="h6" variant="uppercase" fontSize="sm">
                E-Mail
              </Heading>
              <Text color={color}>
                <Link href="mailto:hallo@inselbuehne-potsdam.de">
                  hallo@inselbuehne-potsdam.de
                </Link>
              </Text>
            </Box>
            <Box textAlign="center">
              <Box as="div" pb="5">
                <InstagramIcon boxSize={12} color="green.500" />
              </Box>
              <Heading as="h6" variant="uppercase" fontSize="sm">
                Instagram
              </Heading>
              <Text color={color}>
                <Link href="https://www.instagram.com/inselbuehne" isExternal>
                  @inselbuehne
                </Link>
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Box as="section" pb="20" bg={bg}>
        <Container>
          <InquiryForm onSubmit={onSubmit} />
        </Container>
      </Box>
    </MotionPageTransition>
  );
};

ContactPage.Layout = Default;

export default ContactPage;
