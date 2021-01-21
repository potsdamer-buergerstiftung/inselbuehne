import { useForm } from "react-hook-form";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import {
  Box,
  Container,
  Text,
  Heading,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Checkbox,
  Stat,
  StatNumber,
  StatLabel,
  NumberInputField,
  NumberInput,
  Stack,
} from "@chakra-ui/react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import DoneIcon from "../components/icons/done";

enum FormSteps {
  Amount,
  Details,
  Payment,
  Failed,
  Completed,
}

interface FormDetailsInput {
  name: string;
  email: string;
  message: string;
  newsletter: boolean;
  anonymous: boolean;
  receipt: boolean;
}

interface FormState {
  amount: number;
  details: FormDetailsInput;
  step: FormSteps;
}

const predefinedAmounts = [25, 50, 100, 200];

interface FormContext {
  state: FormState;
  setState: Dispatch<SetStateAction<FormState>>;
}

const formStateDefaults = {
  amount: null,
  details: {
    name: "",
    email: "",
    message: "",
    newsletter: false,
    anonymous: false,
    receipt: false,
  },
  step: FormSteps.Amount,
};

function FormAmount() {
  const { state, setState } = useContext<FormContext>(FormContext);

  const formatAmount = (val: string) => "€" + val;
  const parseAmount = (val: string) => val.replace(/^\€/, "");

  const [amount, setAmount] = useState("40");

  const onSubmit = () => {
    const numberValue = parseInt(amount);
    setState({ ...state, amount: numberValue, step: FormSteps.Details });
  };

  const onPredefinedAmountClick = (amount: number) => {
    setState({ ...state, amount, step: FormSteps.Details });
  };

  return (
    <Box>
      <Heading as="h4" mb="6">
        Spenden
      </Heading>
      <Text mb="10">
        Auch ein kleiner Geldbeutel kann zu tollen Kulturerlebnissen auf der
        Inselbühne beitragen.
      </Text>
      <Stack spacing={2} mb="10">
        {predefinedAmounts.map((amount) => (
          <Button
            colorScheme="gray"
            size="lg"
            onClick={() => onPredefinedAmountClick(amount)}
            key={amount}
          >
            {amount}€
          </Button>
        ))}
      </Stack>
      <form onSubmit={onSubmit}>
        <FormControl mb="5">
          <FormLabel>Dein eigener Betrag</FormLabel>
          <NumberInput
            onChange={(valueString) => setAmount(parseAmount(valueString))}
            value={formatAmount(amount)}
            min={1}
            max={100000}
            variant="filled"
            size="lg"
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <Button colorScheme="green" isFullWidth type="submit" size="lg">
          Weiter
        </Button>
      </form>
    </Box>
  );
}

function FormDetails() {
  const { state, setState } = useContext<FormContext>(FormContext);
  const { register, handleSubmit } = useForm<FormDetailsInput>();

  const onSubmit = (data: FormDetailsInput) => {
    setState({ ...state, details: data, step: FormSteps.Payment });
  };

  return (
    <Box>
      <Heading as="h4" mb="10">
        Details
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb="5" isRequired>
          <FormLabel>Dein Name / Organisation</FormLabel>
          <Input
            variant="filled"
            ref={register({ required: true })}
            size="lg"
            name="name"
            defaultValue={state.details.name}
          />
        </FormControl>
        <FormControl mb="5" isRequired>
          <FormLabel>Deine E-Mail</FormLabel>
          <Input
            variant="filled"
            ref={register({ required: true })}
            size="lg"
            name="email"
            type="email"
            defaultValue={state.details.email}
          />
        </FormControl>
        <FormControl mb="5">
          <FormLabel>Deine Grußnachricht</FormLabel>
          <Textarea
            variant="filled"
            ref={register}
            size="lg"
            name="message"
            defaultValue={state.details.message}
          />
        </FormControl>
        <FormControl mb="4">
          <Checkbox
            name="newsletter"
            ref={register}
            defaultChecked={state.details.newsletter}
            size="lg"
          >
            Updates der Inselbühne erhalten
          </Checkbox>
        </FormControl>
        <FormControl mb="4">
          <Checkbox
            name="anonymous"
            ref={register}
            defaultChecked={state.details.anonymous}
            size="lg"
          >
            Meine Spende anonym halten
          </Checkbox>
        </FormControl>
        {state.amount >= 200 && (
          <FormControl mb="6">
            <Checkbox
              name="receipt"
              ref={register}
              defaultChecked={state.details.receipt}
              size="lg"
            >
              Spendenquittung anfordern
            </Checkbox>
          </FormControl>
        )}
        <Box mt="10">
          <FormBackButton step={FormSteps.Amount} />
          <Button colorScheme="green" isFullWidth type="submit" size="lg">
            Weiter
          </Button>
        </Box>
      </form>
    </Box>
  );
}

function FormPayment() {
  const { state, setState } = useContext<FormContext>(FormContext);
  const purchase_units = [
    {
      amount: {
        value: state.amount,
      },
      description: "Spende Inselbühne",
    },
  ];

  return (
    <Box>
      <Heading as="h4" mb="10">
        Zahlung
      </Heading>
      <Stat mb="6">
        <StatLabel>Deine Spende</StatLabel>
        <StatNumber>{state.amount}€</StatNumber>
      </Stat>
      <Box>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units,
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            setState({ ...state, step: FormSteps.Completed });
          }}
        />
      </Box>
      <Box mt="10">
        <FormBackButton step={FormSteps.Details} />
      </Box>
    </Box>
  );
}

function FormCompleted() {
  return (
    <Box textAlign="center">
      <Heading as="h4" mb="10">
        Vielen Dank
      </Heading>
      <DoneIcon boxSize={24} color="green.500" />
      <Text>
        Deine Spende ist bei uns eingegangen. Mit ihr wird Großartiges
        passieren. Wir haben dir als Bestätigung eine E-Mail geschickt.
      </Text>
    </Box>
  );
}

function FormBackButton({ step }: { step: FormSteps }) {
  const { state, setState } = useContext<FormContext>(FormContext);

  return (
    <Button
      variant="link"
      isFullWidth
      mb="4"
      onClick={() => setState({ ...state, step })}
    >
      Zurück
    </Button>
  );
}

const FormContext = createContext<FormContext>(null);

function FormSection() {
  const [state, setState] = useState<FormState>(formStateDefaults);

  const FormPages = () => {
    switch (state.step) {
      case FormSteps.Details:
        return <FormDetails />;
      case FormSteps.Payment:
        return <FormPayment />;
      case FormSteps.Completed:
        return <FormCompleted />;
      default:
        return <FormAmount />;
    }
  };

  return (
    <FormContext.Provider value={{ state, setState }}>
      <FormPages />
    </FormContext.Provider>
  );
}

export default function Contribute() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "EUR",
        locale: "de_DE",
      }}
    >
      <Layout title="Unterstützen" fluid>
        <Title
          title="Unterstützen"
          heading="Das Projekt fördern"
          color="gray.100"
        >
          Hilf uns, die Inselbühne wieder veranstaltungsfähig zu machen.
        </Title>
        <Box as="section" py="20">
          <Container centerContent>
            <Text mb="10" textAlign="center">
              Wir benötigen Deine Hilfe, um die Inselbühne zu realisieren. Die
              positive Resonanz der öffentlichen Hand freut uns, das wird uns
              sicher helfen. Als Bürgerstiftung setzen wir aber darauf, dass
              auch die breite Stadtgemeinschaft so eine Idee unterstützt.
            </Text>
            <Text mb="10" textAlign="center">
              Für den provisorischen Spielbetrieb im 2021 benötigen wir rund
              €50.000. Weitere €80.000 werden wir brauchen, um die derzeit
              ungenutze Freilichtbühne so zu ertüchtigen, dass sie wieder eine
              Betriebsgenehmigung erhält.
            </Text>
            <Text mb="20" textAlign="center">
              Hier setzen wir auf DICH: Hilf uns mit Deiner Spende! Ermögliche
              eine pandemie-konforme Bühne für Livemusik, Theaterstücke,
              Tanzshows, Chorkonzerte. Jeder Euro zählt und kommt zu 100 % dem
              Projekt Inselbühne zugute!
            </Text>
            <Box
              as="div"
              boxShadow="base"
              px="5"
              py="10"
              rounded="lg"
              width={{ base: "auto", md: "md" }}
            >
              <FormSection />
            </Box>
          </Container>
        </Box>
      </Layout>
    </PayPalScriptProvider>
  );
}
