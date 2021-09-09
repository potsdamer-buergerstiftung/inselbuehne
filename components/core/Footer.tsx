import { FC } from "react";
import {
  Container,
  Link as ChakraLink,
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
  DarkMode,
  Stack,
  VStack,
  Flex,
  Wrap,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@components/core";

function MenuItem(props) {
  const { children, to = "/" } = props;
  return (
    <Link href={to}>
      <ChakraLink variant="light">{children}</ChakraLink>
    </Link>
  );
}

const Footer: FC = () => {
  var year = new Date().getFullYear();
  return (
    <DarkMode>
      <Box as="footer" bg="dark.900" pt="16">
        <Box pb="10">
          <Container maxW="container.xl" py="5">
            <Grid
              columnGap={8}
              rowGap={12}
              templateColumns="repeat(6, 1fr)"
              textAlign={{ base: "center", md: "left" }}
            >
              <GridItem colSpan={{ base: 6, md: 3 }}>
                <Flex justify={{ base: "center", md: "start" }}>
                  <Stack
                    align={{ base: "center", md: "start" }}
                    spacing="10"
                    direction={{ base: "column", md: "row" }}
                    justify="start"
                  >
                    <Logo
                      iconColor="white"
                      slugColor="green.500"
                      width={{ base: "10rem", md: "20rem" }}
                      pt="2"
                    />
                    <Text variant="light" maxW="xl">
                      Die Inselbühne Potsdam wird gefördert mit Mitteln der
                      Landeshauptstadt Potsdam und des Ministeriums für
                      Wissenschaft, Forschung und Kultur (MWFK) des Landes
                      Brandenburg.
                    </Text>
                  </Stack>
                </Flex>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Heading
                  as="h6"
                  fontSize="sm"
                  variant="uppercase"
                  mb={5}
                  color="white"
                >
                  Folgt uns
                </Heading>
                <VStack as="nav" spacing={5} align="left">
                  <ChakraLink
                    variant="light"
                    isExternal
                    href="https://instagram.com/inselbuehne"
                  >
                    Instagram
                  </ChakraLink>
                  <ChakraLink
                    variant="light"
                    isExternal
                    href="https://www.facebook.com/inselbuehne"
                  >
                    Facebook
                  </ChakraLink>
                  <ChakraLink
                    variant="light"
                    isExternal
                    href="https://github.com/potsdamer-buergerstiftung"
                  >
                    GitHub
                  </ChakraLink>
                </VStack>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Heading
                  as="h6"
                  fontSize="sm"
                  variant="uppercase"
                  mb={5}
                  color="white"
                >
                  Über uns
                </Heading>
                <VStack as="nav" spacing={5} align="left">
                  <MenuItem to="/ueber-uns">Team</MenuItem>
                  <ChakraLink
                    href="https://www.potsdamer-buergerstiftung.com"
                    isExternal
                    variant="light"
                  >
                    Bürgerstiftung
                  </ChakraLink>
                  <MenuItem to="/presse">Presse</MenuItem>
                </VStack>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Heading
                  as="h6"
                  fontSize="sm"
                  variant="uppercase"
                  mb={5}
                  color="white"
                >
                  Mehr
                </Heading>
                <VStack as="nav" spacing={5} align="left">
                  <MenuItem to="/datenschutz">Datenschutz</MenuItem>
                  <MenuItem to="/impressum">Impressum</MenuItem>
                  <MenuItem to="/kontakt">Kontakt</MenuItem>
                </VStack>
              </GridItem>
            </Grid>
          </Container>
        </Box>
        <Box as="section" py="12">
      <Container maxW="container.xl">
        <Wrap
          align="center"
          justify={{ base: "center", md: "start" }}
          spacing="10"
          direction="row"
        >
          <div>
            <Image src="/bkm_2017_websvg_de.svg" width="220" height="100" />
          </div>
          <Box>
            <Image src="/MWFK.jpg" width="100" height="100" />
          </Box>
          <Box bg="white" px="2">
            <Image
              src="/potsdam.svg"
              width="190"
              height="100"
            />
          </Box>
        </Wrap>
      </Container>
    </Box>
        <Box py={16}>
          <Container maxW="container.xl">
            <Text variant="light">
              &copy; {year} Potsdamer Bürgerstiftung & Mitwirkende
            </Text>
          </Container>
        </Box>
      </Box>
    </DarkMode>
  );
};

export default Footer;
