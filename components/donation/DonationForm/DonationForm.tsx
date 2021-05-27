import { DetailsFormInput, DetailsForm } from "./DetailsForm";
import { AmountSelection } from "./AmountSelection";
import { useState, FC, Dispatch, SetStateAction } from "react";
import { createContext } from "react";
import { Payment } from "./Payment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Completion from "./Completion";
import Error from "./Error";
import Loading from "./Loading";
import { fetcher } from "@utils";
import useSWR from "swr";

export enum Steps {
  Amount,
  Details,
  Payment,
  Failed,
  Completed,
}

interface DonationForm {}

export interface ProgressContext {
  progress: Steps;
  setProgress: Dispatch<SetStateAction<Steps>>;
}

export const ProgressContext = createContext<ProgressContext>({
  progress: Steps.Amount,
  setProgress: () => {},
});

const defaultDetailsFormInput: DetailsFormInput = {
  name: "",
  email: "",
  message: "",
  anonymous: false,
  newsletter: false,
  receipt: false,
};

const DonationFormPayPalProvier: FC = ({ children }) => {
  const clientId = process.env.PAYPAL_CLIENT_ID || "";

  return (
    <PayPalScriptProvider
      options={{
        "client-id": clientId,
        currency: "EUR",
        locale: "de_DE",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
};

const DonationForm: FC<DonationForm> = () => {
  const [amount, setAmount] = useState<number>(0);
  const [details, setDetails] = useState<DetailsFormInput>(
    defaultDetailsFormInput
  );
  const [progress, setProgress] = useState<Steps>(Steps.Amount);

  const AMOUNTS = [10, 20, 50, 100];

  function onDetailsFormSubmit(data: DetailsFormInput) {
    setDetails(data);
    setProgress(Steps.Payment);
  }

  function onAmountSelect(amount: number) {
    setAmount(amount);
    setProgress(Steps.Details);
  }

  const FormPages = () => {
    switch (progress) {
      case Steps.Details:
        return (
          <DetailsForm
            onSubmit={onDetailsFormSubmit}
            chosenAmount={amount}
            data={details}
          />
        );
      case Steps.Payment:
        return (
          <Payment
            amount={amount}
            onApprove={async () => {
              setProgress(Steps.Completed);
            }}
            onError={async () => {
              setProgress(Steps.Failed);
            }}
          ></Payment>
        );
      case Steps.Completed:
        return <Completion />;
      default:
        return <AmountSelection amounts={AMOUNTS} onSubmit={onAmountSelect} />;
    }
  };

  return (
    <DonationFormPayPalProvier>
      <ProgressContext.Provider value={{ setProgress, progress }}>
        <FormPages />
      </ProgressContext.Provider>
    </DonationFormPayPalProvier>
  );
};

export default DonationForm;
