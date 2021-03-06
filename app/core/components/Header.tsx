import {
  Container,
  Flex,
  Link as ChakraLink,
  Button,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Link, useRouter } from "blitz"
import { useState, FC, Dispatch, SetStateAction } from "react"

const menuItems = [
  {
    label: "Fortschritt",
    to: "/fortschritt",
  },
  {
    label: "Über uns",
    to: "/ueber-uns",
  },
  {
    label: "Bühne frei",
    to: "/buehne-frei",
  },
  {
    label: "Unterstützen",
    to: "/unterstuetzen",
  },
  {
    label: "Kontakt",
    to: "/kontakt",
  },
  {
    label: "Presse",
    to: "/presse",
  },
]

interface MenuItem {
  to?: string
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

const MenuItem: FC<MenuItem> = ({ children, to = "/", setMenuOpen }) => {
  const router = useRouter()
  const textDecoration = router.pathname == to ? "underline" : "none"

  return (
    <Link href={to}>
      <ChakraLink
        py="5"
        px={{ base: 0, md: 4 }}
        fontSize="lg"
        textDecoration={textDecoration}
        onClick={() => setMenuOpen(false)}
      >
        {children}
      </ChakraLink>
    </Link>
  )
}

interface Header {}

const Header: FC<Header> = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  const color = useColorModeValue("black", "white")
  const bg = useColorModeValue("white", "purple.900")

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
          <Link href="/">
            <ChakraLink
              fontSize={{ base: "xl", sm: "2xl" }}
              py="5"
              fontFamily="heading"
              whiteSpace="nowrap"
            >
              Inselbühne Potsdam
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
          <Flex as="nav" w="100%" justify="flex-end" direction={{ base: "column", lg: "row" }}>
            {menuItems
              .filter((_, i) => i <= 2)
              .map((item, i) => (
                <MenuItem to={item.to} setMenuOpen={setMenuOpen} key={i}>
                  {item.label}
                </MenuItem>
              ))}
          </Flex>
          <Link href="/">
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
          </Link>
          <Flex as="nav" w="100%" justify="flex-start" direction={{ base: "column", lg: "row" }}>
            {menuItems
              .filter((_, i) => i >= 3)
              .map((item, i) => (
                <MenuItem to={item.to} setMenuOpen={setMenuOpen} key={i}>
                  {item.label}
                </MenuItem>
              ))}
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
  )
}

export default Header
