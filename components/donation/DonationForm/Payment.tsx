import { DispatchWithoutAction, FC } from "react";
import {
  Box,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import BackButton from "./BackButton";
import { Steps } from "./DonationForm";

interface Payment {
  amount: number;
  onApprove?: () =>void;
  onError?: DispatchWithoutAction;
  onCancel?: DispatchWithoutAction;
}

export const Payment: FC<Payment> = (props) => {
  const { amount, onApprove, onError, onCancel } = props;
  const [{ isPending }] = usePayPalScriptReducer();

  const purchase_units = [
    {
      amount: {
        value: amount.toString(),
      },
      description: "Inselbühne Spende",
    },
  ];

  return (
    <Box>
      <Heading as="h4" mb="10">
        Zahlung
      </Heading>
      <Stat mb="6">
        <StatLabel>Deine Spende</StatLabel>
        <StatNumber>{amount}€</StatNumber>
      </Stat>
      <Box>
        {isPending && (
          <Center>
            <Spinner size="xl" />
          </Center>
        )}
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units,
            });
          }}
          onApprove={async (_, actions) => {
            return actions.order.capture().then((details) => {
              if (onApprove) onApprove()
            })
          }}
        />
      </Box>
      <Box mt="10">
        <BackButton to={Steps.Details} />
      </Box>
    </Box>
  );
};
