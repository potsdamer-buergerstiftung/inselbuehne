import { FC } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { DoneIcon } from "@components/icons"

const Completion: FC = () => {
  return (
    <Box textAlign="center">
      <Heading as="h4" mb="10">
        Vielen Dank
      </Heading>
      <DoneIcon boxSize={24} color="green.500" />
      <Text>
        Deine Spende ist bei uns eingegangen. Mit ihr wird Großartiges passieren. Wir haben dir als
        Bestätigung eine E-Mail geschickt.
      </Text>
    </Box>
  )
}

export default Completion