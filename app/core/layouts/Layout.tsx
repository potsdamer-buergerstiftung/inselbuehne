import { ReactNode, FC } from "react"
import { Head, Link } from "blitz"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  Button,
  Wrap,
  WrapItem,
  DarkMode,
} from "@chakra-ui/react"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const WEBSITE_NAME = "Inselbühne Potsdam"

const DonateHintSection: FC = () => {
  return (
    <DarkMode>
      <Box as="section" bg="purple.900">
        <Container maxW="6xl">
          <Box h="10" w="100%" />
          <Wrap justify="space-between" spacing={8} align="center">
            <WrapItem>
              <Box>
                <Heading as="h2" mb="2" color="white">
                  Lasst uns{" "}
                  <Box color="green.500" as="span">
                    gemeinsam
                  </Box>{" "}
                  die Bühne beleben.
                </Heading>
                <Text variant="light">
                  Auch ein kleiner Geldbeutel kann zu tollen Kulturerlebnissen auf der Inselbühne
                  beitragen.
                </Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <DarkMode>
                <Link href="/unterstuetzen">
                  <Button colorScheme="green" size="lg">
                    Jetzt spenden
                  </Button>
                </Link>
              </DarkMode>
            </WrapItem>
          </Wrap>
          <Box h="10" w="100%" />
          <Divider colorScheme="dark" />
        </Container>
      </Box>
    </DarkMode>
  )
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} - ${WEBSITE_NAME}` || WEBSITE_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
      <DonateHintSection />
      <Footer />
    </>
  )
}

export default Layout
