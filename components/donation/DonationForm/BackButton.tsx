import { Button } from "@chakra-ui/react"
import { FC, useContext } from "react"
import { Steps, ProgressContext } from "./DonationForm"

interface BackButton {
  to: Steps
}

const BackButton: FC<BackButton> = ({ to }) => {
  const { setProgress } = useContext<ProgressContext>(ProgressContext)

  return (
    <Button variant="link" isFullWidth mb="4" onClick={() => setProgress(to)}>
      Zurück
    </Button>
  )
}

export default BackButton