import { FC } from "react"
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import BackButton from "./BackButton"
import { Steps } from "./DonationForm"

export interface DetailsFormInput {
  name: string
  email: string
  message: string
  newsletter: boolean
  anonymous: boolean
  receipt: boolean
}

interface DetailsForm {
  onSubmit: DetailsFormSubmitHandler
  chosenAmount: number
}

type DetailsFormSubmitHandler = (data: DetailsFormInput) => void

export const DetailsForm: FC<DetailsForm> = ({ onSubmit, chosenAmount }) => {
  const { register, handleSubmit } = useForm<DetailsFormInput>()

  return (
    <Box>
      <Heading as="h4" mb="10">
        Details
      </Heading>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <FormControl mb="5" isRequired>
          <FormLabel>Dein Name / Organisation</FormLabel>
          <Input variant="filled" ref={register({ required: true })} size="lg" name="name" />
        </FormControl>
        <FormControl mb="5" isRequired>
          <FormLabel>Deine E-Mail</FormLabel>
          <Input
            variant="filled"
            ref={register({ required: true })}
            size="lg"
            name="email"
            type="email"
          />
        </FormControl>
        <FormControl mb="5">
          <FormLabel>Deine Grußnachricht</FormLabel>
          <Textarea variant="filled" ref={register} size="lg" name="message" />
        </FormControl>
        <FormControl mb="4">
          <Checkbox name="newsletter" ref={register} size="lg">
            Updates der Inselbühne erhalten
          </Checkbox>
        </FormControl>
        <FormControl mb="4">
          <Checkbox name="anonymous" ref={register} size="lg">
            Meine Spende anonym halten
          </Checkbox>
        </FormControl>
        {chosenAmount >= 200 && (
          <FormControl mb="6">
            <Checkbox name="receipt" ref={register} size="lg">
              Spendenquittung anfordern
            </Checkbox>
          </FormControl>
        )}
        <Box mt="10">
          <BackButton to={Steps.Amount} />
          <Button colorScheme="green" isFullWidth type="submit" size="lg">
            Weiter
          </Button>
        </Box>
      </form>
    </Box>
  )
}
