import {
  Container,
  Flex,
  Link as ChakraLink,
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";

function MenuItem(props) {
  const { children, to = "/" } = props;
  return (
    <NextLink passHref href={to}>
      <ChakraLink mt="5">{children}</ChakraLink>
    </NextLink>
  );
}

export default function Footer() {
  return (
    <Box as="footer" background="dark" color="gray.400" py="16">
      <Container maxW="7xl" py="5">
        <Grid
          columnGap={6}
          rowGap={12}
          templateColumns="repeat(12, 1fr)"
          textAlign={{ base: "center", md: "left" }}
        >
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <NextLink passHref href="/">
              <Heading fontSize="4xl" color="white" mb="2">
                Inselbühne Potsdam
              </Heading>
            </NextLink>
            <Text>
              Ein Projekt der{" "}
              <ChakraLink
                href="https://www.potsdamer-buergerstiftung.com"
                isExternal
                color="green.500"
              >
                Potsdamer Bürgerstiftung
              </ChakraLink>
              .
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 2 }}>
            <Heading as="h6" fontSize="sm" variant="uppercase" color="white">
              Social Media
            </Heading>
            <Flex direction="column" as="nav">
              <MenuItem to="https://instagram.com/inselbuehne">
                Instagram
              </MenuItem>
              <MenuItem to="https://github.com/potsdamer-buergerstiftung/inselbuehne">
                GitHub
              </MenuItem>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 2 }}>
            <Heading as="h6" fontSize="sm" variant="uppercase" color="white">
              Über uns
            </Heading>
            <Flex direction="column" as="nav">
              <MenuItem to="/wir">Team</MenuItem>
              <MenuItem to="https://www.potsdamer-buergerstiftung.com">
                Bürgerstiftung
              </MenuItem>
              <MenuItem to="/mitmachen">Mitmachen</MenuItem>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 2 }}>
            <Heading as="h6" fontSize="sm" variant="uppercase" color="white">
              Mehr
            </Heading>
            <Flex direction="column" as="nav">
              <MenuItem to="/datenschutz">Datenschutz</MenuItem>
              <MenuItem to="/impressum">Impressum</MenuItem>
              <MenuItem to="/kontakt">Kontakt</MenuItem>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
