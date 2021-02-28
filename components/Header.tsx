import {
  Container,
  Flex,
  Link as ChakraLink,
  Button,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
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
        px={{ base: 0, md: 4 }}
        fontSize="lg"
        textDecoration={textDecoration}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

interface Header {}

const Header: FC<Header> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "purple.900");

  return (
    <Box
      as="header"
      position="absolute"
      w="100%"
      zIndex="1"
      background={{
        base: menuOpen ? bg : "transparent",
        md: "transparent",
      }}
      boxShadow={{ base: menuOpen ? "2xl" : "none", md: "none" }}
    >
      <Container maxW="7xl" py="5">
        <Flex
          as="div"
          justify="space-between"
          align="center"
          display={{ base: "flex", lg: "none" }}
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
          direction={{ base: "column", lg: "row" }}
          display={{ base: menuOpen ? "flex" : "none", lg: "flex" }}
        >
          <Flex
            as="nav"
            w="100%"
            justify="flex-end"
            direction={{ base: "column", lg: "row" }}
          >
            <MenuItem to="/fortschritt">Fortschritt</MenuItem>
            <MenuItem to="/ueber-uns">Über uns</MenuItem>
            <MenuItem to="/buehne-frei">Bühne frei</MenuItem>
          </Flex>
          <NextLink passHref href="/">
            <ChakraLink
              fontSize={{ lg: "2xl", xl: "3xl" }}
              px="6"
              py="5"
              fontFamily="heading"
              display={{ base: "none", lg: "block" }}
              whiteSpace="nowrap"
            >
              Inselbühne Potsdam
            </ChakraLink>
          </NextLink>
          <Flex
            as="nav"
            w="100%"
            justify="flex-start"
            direction={{ base: "column", lg: "row" }}
          >
            <MenuItem to="/unterstuetzen">Unterstützen</MenuItem>
            <MenuItem to="/kontakt">Kontakt</MenuItem>
            <MenuItem to="/presse">Presse</MenuItem>
            <Button
              py="5"
              px={{ base: 0, lg: 2 }}
              fontSize="lg"
              onClick={toggleColorMode}
              variant="link"
              rounded="none"
              color={color}
            >
              {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
