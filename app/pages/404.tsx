import { BlitzPage } from "blitz"
import { useColorModeValue } from "@chakra-ui/react"
import Title from "app/core/components/Title"
import Layout from "app/core/layouts/Layout"

const PageNotFound: BlitzPage = () => {
  const bg = useColorModeValue("red.100", "purple.800")

  return (
    <>
      <Title title="Seite nicht gefunden" bg={bg} heading="404">
        Es tut uns leid, aber Deine gesuchte Seite konnte nicht gefunden werden.
      </Title>
    </>
  )
}

PageNotFound.getLayout = (page) => <Layout title="Seite nicht gefunden">{page}</Layout>

export default PageNotFound
