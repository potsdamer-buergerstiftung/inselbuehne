import { DetailsFormInput, DetailsForm } from "./DetailsForm"
import { AmountSelection } from "./AmountSelection"
import { useState, FC, Dispatch, SetStateAction, Suspense } from "react"
import { createContext } from "react"
import { Payment } from "./Payment"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import Completion from "./Completion"
import { useQuery } from "blitz"
import getPayPalClientId from "app/donation/queries/getPayPalClientId"
import Error from "./Error"
import Loading from "./Loading"

export enum Steps {
  Amount,
  Details,
  Payment,
  Failed,
  Completed,
}

interface DonationForm {
  amounts: Array<number>
}

export interface ProgressContext {
  progress: Steps
  setProgress: Dispatch<SetStateAction<Steps>>
}

export const ProgressContext = createContext<ProgressContext>({
  progress: Steps.Amount,
  setProgress: () => {},
})

const defaultDetailsFormInput: DetailsFormInput = {
  name: "",
  email: "",
  message: "",
  anonymous: false,
  newsletter: false,
  receipt: false,
}

const DonationFormPayPalProvier: FC = ({ children }) => {
  const [clientId] = useQuery(getPayPalClientId, undefined)

  if (clientId) {
    return (
      <PayPalScriptProvider
        options={{
          "client-id": clientId || "",
          currency: "EUR",
          locale: "de_DE",
        }}
      >
        {children}
      </PayPalScriptProvider>
    )
  }
  return <Error />
}

const DonationForm: FC<DonationForm> = ({ amounts }) => {
  const [amount, setAmount] = useState<number>(0)
  const [details, setDetails] = useState<DetailsFormInput>(defaultDetailsFormInput)
  const [progress, setProgress] = useState<Steps>(Steps.Amount)

  const PAYMENT_DESCRIPTION = "Inselbühne Potsdam Spende"

  function onDetailsFormSubmit(data: DetailsFormInput) {
    setDetails(data)
    setProgress(Steps.Payment)
  }

  function onAmountSelect(amount: number) {
    setAmount(amount)
    setProgress(Steps.Details)
  }

  const FormPages = () => {
    switch (progress) {
      case Steps.Details:
        return <DetailsForm onSubmit={onDetailsFormSubmit} chosenAmount={amount} data={details} />
      case Steps.Payment:
        return (
          <Payment
            amount={amount}
            description={PAYMENT_DESCRIPTION}
            onApprove={async () => {
              setProgress(Steps.Completed)
            }}
          ></Payment>
        )
      case Steps.Completed:
        return <Completion />
      default:
        return <AmountSelection amounts={amounts} onSubmit={onAmountSelect} />
    }
  }

  return (
    <Suspense fallback={<Loading />}>
      <DonationFormPayPalProvier>
        <ProgressContext.Provider value={{ setProgress, progress }}>
          <FormPages />
        </ProgressContext.Provider>
      </DonationFormPayPalProvier>
    </Suspense>
  )
}

export default DonationForm
