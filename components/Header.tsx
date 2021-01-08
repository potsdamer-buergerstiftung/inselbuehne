import { Container, Flex, Link as ChakraLink, Box } from "@chakra-ui/react";
import NextLink from "next/link";

function MenuItem(props) {
  const { children, to = "/" } = props;
  return (
    <NextLink passHref href={to}>
      <ChakraLink p="5" fontSize="lg">
        {children}
      </ChakraLink>
    </NextLink>
  );
}

export default function Header() {
  return (
    <Box as="header" background="gray.50">
      <Container maxW="7xl" py="5">
        <Flex as="nav" align="center" justify="center" wrap="wrap" w="100%">
          <MenuItem to="/">Unser Vorhaben</MenuItem>
          <MenuItem to="/fortschritt">Fortschritt</MenuItem>
          <NextLink passHref href="/">
            <ChakraLink fontSize="3xl" px="7" py="5" fontFamily="heading">
              Inselbühne Potsdam
            </ChakraLink>
          </NextLink>
          <MenuItem to="/beitragen">Beitragen</MenuItem>
          <MenuItem to="/wir">Über uns</MenuItem>
        </Flex>
      </Container>
    </Box>
  );
}
