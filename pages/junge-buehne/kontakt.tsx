import { NextSeo } from "next-seo";
import { PageTitle } from "@components/core";
import { JungeBuehne } from "@components/layouts";
import {
  Box,
  Container,
  Text,
  Heading,
  Link,
  useColorModeValue,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { EmailIcon, InstagramIcon, PhoneIcon } from "@components/icons";
import { MotionPageTransition } from "@components/motion";
import { InquiryForm } from "@components/contact";
import axios from "axios";

const ContactPage = () => {
  const bg = useColorModeValue("blue.100", "blue.900");
  const color = useColorModeValue("gray.600", "white");

  const onSubmit = async (data) => axios.post("/api/contact_inquiry", data);

  return (
    <MotionPageTransition>
      <NextSeo title="Kontakt" />
      <PageTitle title="Wie können wir Dir helfen?" heading="Kontakt" bg={bg}>
        Hast Du Fragen bezüglich der Jungen Bühne? Dann kontaktiere uns doch
        einfach!
      </PageTitle>
      <Box as="section" pb="20" bg={bg}>
        <Container maxW="container.md">
          <SimpleGrid spacing={10} columns={{ base: 1, md: 1 }}>
            <Box textAlign="center">
              <Box as="div" pb="5">
                <EmailIcon boxSize={12} color="green.500" />
              </Box>
              <Heading as="h6" variant="uppercase" fontSize="sm">
                E-Mail
              </Heading>
              <Text color={color}>
                <Link href="mailto:fs@inselbuehne-potsdam.de">
                  fs@inselbuehne-potsdam.de
                </Link>
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </MotionPageTransition>
  );
};

ContactPage.Layout = JungeBuehne;

export default ContactPage;
