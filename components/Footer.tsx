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
    <Box as="footer" background="dark" color="gray.400" py="12">
      <Container maxW="7xl" py="5">
        <Grid gap={4} templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={6}>
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
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Heading as="h6" fontSize="sm" variant="uppercase" color="white">
              Social Media
            </Heading>
            <Flex direction="row" as="nav">
              <MenuItem to="/">Instagram</MenuItem>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Heading as="h6" fontSize="sm" variant="uppercase" color="white">
              Über uns
            </Heading>
            <Flex direction="column" as="nav">
              <MenuItem to="/">Team</MenuItem>
              <MenuItem to="/">Bürgerstiftung</MenuItem>
              <MenuItem to="/">Mitmachen</MenuItem>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
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
