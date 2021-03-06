import {
  Container,
  Link as ChakraLink,
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
  DarkMode,
  VStack,
} from "@chakra-ui/react"
import { Link } from "blitz"

function MenuItem(props) {
  const { children, to = "/" } = props
  return (
    <Link href={to}>
      <ChakraLink variant="light">{children}</ChakraLink>
    </Link>
  )
}

export default function Footer() {
  var year = new Date().getFullYear()
  return (
    <DarkMode>
      <Box as="footer" bg="dark.900" pt="16">
        <Box pb="10">
          <Container maxW="6xl" py="5">
            <Grid
              columnGap={8}
              rowGap={12}
              templateColumns="repeat(6, 1fr)"
              textAlign={{ base: "center", md: "left" }}
            >
              <GridItem colSpan={{ base: 6, md: 3 }}>
                <Link href="/">
                  <Heading fontSize="4xl" mb="2" color="white">
                    Inselbühne Potsdam
                  </Heading>
                </Link>
                <Text variant="light">
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
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Heading as="h6" fontSize="sm" variant="uppercase" mb={5} color="white">
                  Social Media
                </Heading>
                <VStack as="nav" spacing={5} align="left">
                  <ChakraLink variant="light" isExternal href="https://instagram.com/inselbuehne">
                  Instagram
                  </ChakraLink>
                  <ChakraLink variant="light" isExternal href="https://github.com/potsdamer-buergerstiftung">
                    GitHub
                  </ChakraLink>
                </VStack>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Heading as="h6" fontSize="sm" variant="uppercase" mb={5} color="white">
                  Über uns
                </Heading>
                <VStack as="nav" spacing={5} align="left">
                  <MenuItem to="/ueber-uns">Team</MenuItem>
                  <MenuItem to="https://www.potsdamer-buergerstiftung.com">Bürgerstiftung</MenuItem>
                  <MenuItem to="/presse">Presse</MenuItem>
                </VStack>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Heading as="h6" fontSize="sm" variant="uppercase" mb={5} color="white">
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
        <Box py={16}>
          <Container maxW="6xl">
            <Text variant="light">&copy; {year} Potsdamer Bürgerstiftung & Mitwirkende</Text>
          </Container>
        </Box>
      </Box>
    </DarkMode>
  )
}
