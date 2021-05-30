import { useState, FC, Dispatch, SetStateAction } from "react";
import {
  Container,
  Flex,
  Link as ChakraLink,
  Button,
  Box,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { MotionBox } from "@components/motion";
import { AnimateSharedLayout } from "framer-motion";
import { Logo } from ".";

const menuItems = [
  {
    label: "Veranstaltungen",
    to: "/veranstaltungen",
  },
  {
    label: "Junge Bühne",
    to: "/junge-buehne",
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "Über uns",
    to: "/ueber-uns",
  },
  {
    label: "Unterstützen",
    to: "/unterstuetzen",
  },
  {
    label: "Kontakt",
    to: "/kontakt",
  },
];

interface MenuItem {
  to?: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuItem: FC<MenuItem> = ({ children, to = "/", setMenuOpen }) => {
  const router = useRouter();
  const selected = router.pathname == to;
  const bg = useColorModeValue("black", "white");

  return (
    <Link href={to} passHref>
      <ChakraLink
        py="5"
        px={{ base: 0, md: 4 }}
        fontSize="lg"
        onClick={() => setMenuOpen(false)}
        position="relative"
        _hover={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        {children}
        {selected && (
          <MotionBox
            layoutId="underline"
            height="1px"
            bg={bg}
            right="4"
            left="4"
            position="absolute"
            bottom="4"
            display={{ base: "none", lg: "block" }}
          />
        )}
      </ChakraLink>
    </Link>
  );
};

const Header: FC = () => {
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
      <Container maxW="7xl" py="4">
        <Flex
          as="div"
          justify="space-between"
          align="center"
          display={{ base: "flex", lg: "none" }}
        >
          <Link href="/">
            <ChakraLink
              fontSize={{ base: "xl", sm: "2xl" }}
              py="2"
              fontFamily="heading"
              whiteSpace="nowrap"
            >
              <Logo height="16" />
            </ChakraLink>
          </Link>
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
          <AnimateSharedLayout>
            <Flex
              as="nav"
              w="100%"
              justify="flex-end"
              direction={{ base: "column", lg: "row" }}
            >
              {menuItems
                .filter((_, i) => i <= 2)
                .map((item, i) => (
                  <MenuItem to={item.to} setMenuOpen={setMenuOpen} key={i}>
                    {item.label}
                  </MenuItem>
                ))}
            </Flex>
          </AnimateSharedLayout>
          <Link href="/">
            <ChakraLink
              fontSize={{ lg: "2xl", xl: "3xl" }}
              fontFamily="heading"
              display={{ base: "none", lg: "block" }}
              whiteSpace="nowrap"
              py="3"
              px="8"
              _hover={{ textDecoration: "none" }}
            >
              <Logo height="5rem" />
            </ChakraLink>
          </Link>

          <AnimateSharedLayout>
            <Flex
              as="nav"
              w="100%"
              justify="flex-start"
              direction={{ base: "column", lg: "row" }}
            >
              {menuItems
                .filter((_, i) => i >= 3)
                .map((item, i) => (
                  <MenuItem to={item.to} setMenuOpen={setMenuOpen} key={i}>
                    {item.label}
                  </MenuItem>
                ))}
              <IconButton
                py="5"
                px={{ base: 0, lg: 2 }}
                fontSize="lg"
                onClick={toggleColorMode}
                variant="link"
                color={color}
                aria-label="Color mode toggle"
              >
                {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </Flex>
          </AnimateSharedLayout>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
