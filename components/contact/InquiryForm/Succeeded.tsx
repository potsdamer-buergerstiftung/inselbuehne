import { Box, Text } from "@chakra-ui/react"
import { FC } from "react"
import { DoneIcon } from "@components/icons"

const ContactFormSucceeded: FC = () => {
  return (
    <Box textAlign="center">
      <DoneIcon boxSize={24} color="green.500" />
      <Text>
        Deine Nachricht wurde erfolgreich versandt. Wir versuchen, Dir so schnell wie möglich zu
        antworten.
      </Text>
    </Box>
  )
}

export default ContactFormSucceeded
