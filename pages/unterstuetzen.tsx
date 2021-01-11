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
  Badge,
} from "@chakra-ui/react";
import { SetStateAction, useState, Dispatch } from "react";
import { useForm } from "react-hook-form";
import { PayPalButtons } from "@paypal/react-paypal-js";

enum DonationProgress {
  Amount,
  Details,
  Payment,
  Confirmation,
  Error,
}

interface PageProps {
  donationData: DonationData;
  setDonationData: Dispatch<SetStateAction<DonationData>>;
  setPage: Dispatch<SetStateAction<DonationProgress>>;
}

const preDefinedAmounts = [25, 50, 100, 200];

interface DonationData {
  amount: number;
  details: DonationDetailsData;
  order: any;
}

interface DonationDetailsData {
  name: string;
  email: string;
  organisation: string;
  message: string;
  newsletter: boolean;
  anonymous: boolean;
  receipt: boolean;
}

const defaultDonationData: DonationData = {
  amount: null,
  details: {
    name: null,
    email: null,
    organisation: null,
    message: null,
    newsletter: false,
    anonymous: false,
    receipt: false,
  },
  order: null,
};

function DonationModal() {
  const [page, setPage] = useState<DonationProgress>(DonationProgress.Amount);
  const [donationData, setDonationData] = useState(defaultDonationData);

  const props = { donationData, setPage, setDonationData };

  switch (page) {
    case DonationProgress.Details:
      return <DetailsPage {...props} />;
    case DonationProgress.Payment:
      return <PaymentPage {...props} />;
    case DonationProgress.Confirmation:
      return <ConfirmationPage {...props} />;
    default:
      return <AmountPage {...props} />;
  }
}

function AmountPage(props: PageProps) {
  const [amount, setAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  const onCustomAmountChange = (event) => {
    const value = event.target.value;
    const parsedAmount = parseInt(value);
    if (Number.isInteger(parsedAmount)) {
      setCustomAmount(parsedAmount.toString());
      setAmount(parsedAmount);
    } else {
      setCustomAmount("");
      setAmount(null);
    }
  };

  const setNextPage = (amount: number) => {
    props.setDonationData({ ...props.donationData, amount });
    props.setPage(DonationProgress.Details);
  };

  return (
    <>
      <Heading as="h4" mb="6">
        Spenden
      </Heading>
      <Text mb="10">
        Auch ein kleiner Geldbeutel sorgt später für viele tolle und kostenlose
        Konzerte.
      </Text>
      {preDefinedAmounts.map((amount) => {
        return (
          <Button
            colorScheme="gray"
            isFullWidth
            mb="2"
            onClick={() => setNextPage(amount)}
            key={amount.toString()}
          >
            {amount}€
          </Button>
        );
      })}
      <Input
        placeholder="Dein eigener Betrag..."
        value={customAmount}
        onChange={onCustomAmountChange}
        variant="filled"
        mb="10"
      />
      <Button
        disabled={amount ? false : true}
        onClick={() => setNextPage(amount)}
        colorScheme="green"
      >
        Weiter
      </Button>
    </>
  );
}

function DetailsPage(props: PageProps) {
  const { register, handleSubmit, errors } = useForm<DonationDetailsData>();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Heading as="h4" mb="6">
        Details
      </Heading>
      <FormControl isRequired mb="4">
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name"
          variant="filled"
          name="name"
          ref={register({ required: true })}
          defaultValue={props.donationData.details.name}
        />
        {errors.name && "Dein Name ist erforderlich"}
      </FormControl>
      <FormControl isRequired mb="4">
        <FormLabel>E-Mail-Adresse</FormLabel>
        <Input
          placeholder="name@email.com"
          variant="filled"
          name="email"
          ref={register({ required: true })}
          defaultValue={props.donationData.details.email}
        />
        {errors.email && "Deine E-Mail ist erforderlich"}
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Organisation</FormLabel>
        <Input
          placeholder="Organisation"
          variant="filled"
          name="organisation"
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Mitteilung</FormLabel>
        <Textarea
          placeholder="Deine Grußnachricht..."
          variant="filled"
          name="message"
        />
      </FormControl>
      <FormControl mb="4" defaultValue="false" name="newsletter" ref={register}>
        <Checkbox>Updates der Inselbühne erhalten</Checkbox>
      </FormControl>
      <FormControl mb="4">
        <Checkbox defaultValue="false" name="anonymous" ref={register}>
          Meine Spende anonym halten
        </Checkbox>
      </FormControl>
      {props.donationData.amount >= 200 && (
        <FormControl mb="6" defaultValue="false" name="receipt" ref={register}>
          <Checkbox>Spendenquittung anfordern</Checkbox>
        </FormControl>
      )}
      <Button
        onClick={() => {
          handleSubmit(onSubmit);
          props.setPage(DonationProgress.Payment);
        }}
        type="submit"
        colorScheme="green"
      >
        Weiter
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          props.setPage(DonationProgress.Amount);
        }}
      >
        Zurück
      </Button>
    </>
  );
}

function PaymentPage(props: PageProps) {
  return (
    <>
      <Heading as="h4" mb="6">
        Zahlung
      </Heading>
      <Stat mb="6">
        <StatLabel>Deine Spende</StatLabel>
        <StatNumber>{props.donationData.amount}€</StatNumber>
      </Stat>
      <Box mb="6">
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: props.donationData.amount,
                  },
                  description: "Spende Inselbühne",
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            props.setDonationData({ ...props.donationData, order });
            props.setPage(DonationProgress.Confirmation);
          }}
        />
      </Box>
      <Button
        variant="ghost"
        onClick={() => {
          props.setPage(DonationProgress.Details);
        }}
      >
        Zurück
      </Button>
    </>
  );
}

function ConfirmationPage(orderData) {
  return (
    <>
      <Heading as="h4" mb="6">
        Dankeschön
      </Heading>
      <Badge variant="subtle" colorScheme="green" mb="2">
        Spende erfolgreich
      </Badge>
      <Stat mb="6">
        <StatLabel>
          Vielen Dank für Deine Spende. Du hast unseren Weg damit ein kleines
          bisschen verkürzt. Wir haben Dir als Bestätigung eine E-Mail
          geschickt.
        </StatLabel>
      </Stat>
    </>
  );
}

export default function Contribute() {
  return (
    <Layout title="Unterstützen" fluid>
      <Title
        title="Unterstützen"
        heading="Zum Projekt beitragen"
        color="gray.100"
      >
        Um die Bühne wieder veranstaltungsfähig zu machen, benötigen wir Eure
        Hilfe.
      </Title>
      <Box as="section" py="20">
        <Container centerContent>
          <Box
            as="div"
            boxShadow="base"
            p="5"
            rounded="lg"
            width={{ base: "auto", md: "xs" }}
          >
            <DonationModal />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
