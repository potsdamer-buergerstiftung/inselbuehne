import { useState, FC, Dispatch, SetStateAction } from "react";
import {
  Container,
  Flex,
  Link,
  Button,
  Box,
  useColorMode,
  IconButton,
  Text,
  Stack,
} from "@chakra-ui/react";
import { ArrowBackIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import RouterLink from "next/link";
import { MotionBox } from "@components/motion";
import { AnimateSharedLayout } from "framer-motion";
import { JBLogo } from "@components/junge-buehne";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";

const menuItems = [
  {
    label: "Veranstaltungen",
    to: "/veranstaltungen",
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "Partner",
    to: "/junge-buehne/partner",
  },
  {
    label: "Kontakt",
    to: "/junge-buehne/kontakt",
  },
];

interface MenuItem {
  to?: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuItem: FC<MenuItem> = ({ children, to = "/", setMenuOpen }) => {
  const router = useRouter();
  const selected = router.pathname == to;
  const bg = mode("black", "white");

  return (
    <RouterLink href={to} passHref>
      <Link
        py="5"
        px={{ base: 0, lg: 4, xl: 5 }}
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
      </Link>
    </RouterLink>
  );
};

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const color = mode("black", "white");
  const bg = mode("white", "purple.900");

  return (
    <Box
      as="header"
      position="absolute"
      w="100%"
      zIndex="1"
      background={{
        base: menuOpen ? bg : "transparent",
        lg: "transparent",
      }}
      boxShadow={{ base: menuOpen ? "2xl" : "none", md: "none" }}
    >
      <Box as="section" position="relative" w="full">
        <Stack
          direction={{ base: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          py="2"
          fontSize="sm"
          px={{ base: "3", md: "6", lg: "8" }}
          color={mode("dark", "white")}
          bg={mode("rgba(0,0,0,.1)", "rgba(255,255,255,.05)")}
        >
          <Text marginEnd="2">
            <RouterLink href="/" passHref>
              <Link fontWeight="bold">
                <ArrowBackIcon /> Zurück zur Inselbühne Potsdam
              </Link>
            </RouterLink>
          </Text>
        </Stack>
      </Box>
      <Container maxW="7xl" py="4">
        <Flex
          as="div"
          justify="space-between"
          align="center"
          display={{ base: "flex", lg: "none" }}
        >
          <RouterLink href="/junge-buehne">
            <Link
              fontSize={{ base: "xl", sm: "2xl" }}
              py="2"
              fontFamily="heading"
              whiteSpace="nowrap"
            >
              <JBLogo height="16" />
            </Link>
          </RouterLink>
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
                .filter((_, i) => i <= 1)
                .map((item, i) => (
                  <MenuItem to={item.to} setMenuOpen={setMenuOpen} key={i}>
                    {item.label}
                  </MenuItem>
                ))}
            </Flex>
          </AnimateSharedLayout>
          <RouterLink href="/junge-buehne">
            <Link
              fontSize={{ lg: "2xl", xl: "3xl" }}
              fontFamily="heading"
              display={{ base: "none", lg: "block" }}
              whiteSpace="nowrap"
              py="3"
              px={{ base: "8", xl: "10" }}
              _hover={{ textDecoration: "none" }}
            >
              <JBLogo height="5rem" />
            </Link>
          </RouterLink>

          <AnimateSharedLayout>
            <Flex
              as="nav"
              w="100%"
              justify="flex-start"
              direction={{ base: "column", lg: "row" }}
            >
              {menuItems
                .filter((_, i) => i >= 2)
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
