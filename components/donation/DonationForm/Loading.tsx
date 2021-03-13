import { FC } from "react"
import { Center, Spinner } from "@chakra-ui/react"

const Loading: FC = () => {
  return (
    <Center py={20}>
      <Spinner size="xl" />
    </Center>
  )
}

export default Loading
