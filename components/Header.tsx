import {
  Container,
  Flex,
  Link as ChakraLink,
  Button,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      as="header"
      position={props.fluid ? "absolute" : "relative"}
      w="100%"
      zIndex="1"
      background={{
        base: menuOpen ? "white" : "transparent",
        md: "transparent",
      }}
      boxShadow={{ base: menuOpen ? "2xl" : "none", md: "none" }}
    >
      <Container maxW="7xl" py="5">
        <Flex
          as="div"
          justify="space-between"
          align="center"
          display={{ base: "flex", md: "none" }}
        >
          <NextLink passHref href="/">
            <ChakraLink
              fontSize="2xl"
              py="5"
              fontFamily="heading"
              whiteSpace="nowrap"
            >
              Inselbühne Potsdam
            </ChakraLink>
          </NextLink>
          <Button onClick={() => setMenuOpen(!menuOpen)}>Menü</Button>
        </Flex>
        <Flex
          as="div"
          align="center"
          justify="center"
          w="100%"
          direction={{ base: "column", md: "row" }}
          display={{ base: menuOpen ? "flex" : "none", md: "flex" }}
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
