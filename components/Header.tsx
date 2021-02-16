import {
  Container,
  Flex,
  Link as ChakraLink,
  Button,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState, FC } from "react";
import { useRouter } from "next/router";

interface MenuItem {
  to: string;
}

const MenuItem: FC<MenuItem> = ({ children, to = "/" }) => {
  const router = useRouter();
  const textDecoration = router.pathname == to ? "underline" : "none";

  return (
    <NextLink passHref href={to}>
      <ChakraLink
        py="5"
        px={{ base: 0, md: 5 }}
        fontSize="lg"
        textDecoration={textDecoration}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

const Header: FC<{ fluid: boolean }> = ({ children, fluid }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      as="header"
      position={fluid ? "absolute" : "relative"}
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
              fontSize={{ base: "xl", sm: "2xl" }}
              py="5"
              fontFamily="heading"
              whiteSpace="nowrap"
            >
              Inselbühne Potsdam
            </ChakraLink>
          </NextLink>
          <Button onClick={() => setMenuOpen(!menuOpen)} colorScheme="green">
            Menü
          </Button>
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
            <MenuItem to="/fortschritt">Fortschritt</MenuItem>
            <MenuItem to="/ueber-uns">Über uns</MenuItem>
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
            <MenuItem to="/unterstuetzen">Unterstützen</MenuItem>
            <MenuItem to="/buehne-frei">Bühne frei</MenuItem>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
