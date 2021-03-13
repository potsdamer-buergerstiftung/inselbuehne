import { FC } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { ErrorIcon } from "@components/icons"

const Error: FC = () => {
  return (
    <Box textAlign="center">
      <Heading as="h4" mb="10">
        Fehler
      </Heading>
      <ErrorIcon boxSize={24} color="red.500" />
      <Text>
        Es tut uns leid, aber aktuell können wir keine Spenden verarbeiten. Unsere Techniker beheben
        das Problem so schnell wie möglich.
      </Text>
    </Box>
  )
}

export default Error
