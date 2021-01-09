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

export default function Header(props) {
  return (
    <Box
      as="header"
      background={props.fluid ? "transparent" : "gray.50"}
      position={props.fluid ? "fixed" : "relative"}
      w="100%"
      zIndex="1"
    >
      <Container maxW="7xl" py="5">
        <Flex as="div" align="center" justify="center" w="100%">
          <Flex as="nav" w="100%" justify="end">
            <MenuItem to="/">Unser Vorhaben</MenuItem>
            <MenuItem to="/fortschritt">Fortschritt</MenuItem>
          </Flex>
          <NextLink passHref href="/">
            <ChakraLink
              fontSize="3xl"
              px="7"
              py="5"
              fontFamily="heading"
              display="ruby"
            >
              Inselbühne Potsdam
            </ChakraLink>
          </NextLink>
          <Flex as="nav" w="100%" justify="start">
            <MenuItem to="/beitragen">Beitragen</MenuItem>
            <MenuItem to="/wir">Über uns</MenuItem>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
