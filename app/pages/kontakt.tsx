import ContactForm from "app/inquiry/components/ContactForm/ContactForm"
import contactInquiry from "app/inquiry/mutations/contactInquiry"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, useMutation } from "blitz"
import Title from "app/core/components/Title"
import { Box, Container, Text, Heading, Link, useColorModeValue } from "@chakra-ui/react"
import EmailIcon from "app/core/components/icons/email"

const ContactPage: BlitzPage = () => {
  const bg = useColorModeValue("white", "purple.800")
  const color = useColorModeValue("gray.600", "white")

  const [inquiryMutation, { isSuccess }] = useMutation(contactInquiry)

  return (
    <>
      <Title title="Wie können wir helfen?" heading="Kontakt" bg={bg}>
        Hast Du Fragen bezüglich der Inselbühne? Dann kontaktiere uns doch einfach!
      </Title>
      <Box as="section" pb="20" bg={bg}>
        <Container centerContent>
          <Box as="div" pb="5">
            <EmailIcon boxSize={12} color="green.500" />
          </Box>
          <Heading as="h6" variant="uppercase" fontSize="sm">
            E-Mail
          </Heading>
          <Text color={color}>
            <Link href="mailto:hallo@inselbuehne-potsdam.de">hallo@inselbuehne-potsdam.de</Link>
          </Text>
        </Container>
      </Box>
      <Box as="section" pb="20" bg={bg}>
        <Container>
          <ContactForm onSubmit={async (data) => await inquiryMutation(data)} />
        </Container>
      </Box>
    </>
  )
}

ContactPage.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default ContactPage
