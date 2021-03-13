import { useState, FC } from "react"
import {
  Box,
  Button,
  FormControl,
  NumberInputField,
  NumberInput,
  FormLabel,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"

interface AmountSelection {
  amounts: Array<number>
  onSubmit: AmountSelectionSubmitHandler
}

interface AmountFormInput {
  amount: string
}

type AmountSelectionSubmitHandler = (amount: number) => void

export const AmountSelection: FC<AmountSelection> = ({ amounts, onSubmit }) => {
  const formatAmount = (val: string) => "€" + val
  const parseAmount = (val: string) => val.replace(/^\€/, "") // eslint-disable-line

  const [amount, setAmount] = useState("40")
  const { register, handleSubmit } = useForm<AmountFormInput>()

  return (
    <Box>
      <Heading as="h4" mb="6">
        Spenden
      </Heading>
      <Text mb="10">
        Auch ein kleiner Geldbeutel kann zu tollen Kulturerlebnissen auf der Inselbühne beitragen.
      </Text>
      <Stack spacing={2} mb="10">
        {amounts.map((amount) => (
          <Button colorScheme="gray" size="lg" onClick={() => onSubmit(amount)} key={amount}>
            {amount}€
          </Button>
        ))}
      </Stack>
      <form onSubmit={handleSubmit((data) => onSubmit(parseInt(data.amount)))}>
        <FormControl mb="5">
          <FormLabel>Dein eigener Betrag</FormLabel>
          <NumberInput
            onChange={(valueString) => setAmount(parseAmount(valueString))}
            value={formatAmount(amount)}
            min={1}
            max={100000}
            variant="filled"
            size="lg"
            ref={register}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <Button colorScheme="green" isFullWidth size="lg" type="submit">
          Weiter
        </Button>
      </form>
    </Box>
  )
}