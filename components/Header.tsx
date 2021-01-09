import { Container, Flex, Link as ChakraLink, Box } from "@chakra-ui/react";
import NextLink from "next/link";

function MenuItem(props) {
  const { children, to = "/" } = props;
  return (
    <NextLink passHref href={to}>
      <ChakraLink py="5" px={{ base: 0, md: 5 }} fontSize="lg">
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
        <NextLink passHref href="/">
          <ChakraLink
            fontSize="2xl"
            py="5"
            fontFamily="heading"
            display={{ base: "block", md: "none" }}
            whiteSpace="nowrap"
          >
            Inselbühne Potsdam
          </ChakraLink>
        </NextLink>
        <Flex
          as="div"
          align="center"
          justify="center"
          w="100%"
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            as="nav"
            w="100%"
            justify="flex-end"
            direction={{ base: "column", md: "row" }}
          >
            <MenuItem to="/">Unser Vorhaben</MenuItem>
            <MenuItem to="/fortschritt">Fortschritt</MenuItem>
          </Flex>
          <NextLink passHref href="/">
            <ChakraLink
              fontSize="3xl"
              px="7"
              py="5"
              fontFamily="heading"
              display={{ base: "none", md: "block" }}
              whiteSpace="nowrap"
            >
              Inselbühne Potsdam
            </ChakraLink>
          </NextLink>
          <Flex
            as="nav"
            w="100%"
            justify="flex-start"
            direction={{ base: "column", md: "row" }}
          >
            <MenuItem to="/beitragen">Beitragen</MenuItem>
            <MenuItem to="/wir">Über uns</MenuItem>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
