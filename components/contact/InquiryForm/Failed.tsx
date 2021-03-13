import { Box, Button, Text } from "@chakra-ui/react"
import { ErrorIcon } from "@components/icons"
import React, { DispatchWithoutAction, FC } from "react"

interface ContactFormFailed {
  onClick: DispatchWithoutAction
}

const ContactFormFailed: FC<ContactFormFailed> = ({ onClick }) => {
  return (
    <Box textAlign="center">
      <ErrorIcon boxSize={24} color="red.500" />
      <Text mb="5">Beim Senden Deiner Nachricht ist ein Fehler aufgetreten.</Text>
      <Button onClick={onClick}>Erneut versuchen</Button>
    </Box>
  )
}

export default ContactFormFailed
