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
} from "@chakra-ui/react";
import { SetStateAction, useState, Dispatch } from "react";
import { useForm } from "react-hook-form";
import { PayPalButtons } from "@paypal/react-paypal-js";

enum DonationProgress {
  Amount,
  Details,
  Payment,
}

interface PageProps {
  formData: DonationData;
  setFormData: Dispatch<SetStateAction<DonationData>>;
  setPage: Dispatch<SetStateAction<DonationProgress>>;
}

interface DonationData {
  amount: number;
  details: DonationDetailsData;
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
  amount: 20,
  details: {
    name: null,
    email: null,
    organisation: null,
    message: null,
    newsletter: false,
    anonymous: false,
    receipt: false,
  }
};

function DonationModal() {
  const [page, setPage] = useState<DonationProgress>(DonationProgress.Amount);
  const [formData, setFormData] = useState(defaultDonationData);

  const props = { formData, setPage, setFormData };

  switch (page) {
    case DonationProgress.Details:
      return <DetailsPage {...props} />;
    case DonationProgress.Payment:
      return <PaymentPage {...props} />;
    default:
      return <AmountPage {...props} />;
  }
}

function AmountPage(props: PageProps) {
  const onSubmit = (amount: number) => {
    props.setFormData({ ...props.formData, amount });
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
      <Button
        colorScheme="gray"
        isFullWidth
        mb="2"
        onClick={() => onSubmit(25)}
      >
        25€
      </Button>
      <Button
        colorScheme="gray"
        isFullWidth
        mb="2"
        onClick={() => onSubmit(50)}
      >
        50€
      </Button>
      <Button
        colorScheme="gray"
        isFullWidth
        mb="2"
        onClick={() => onSubmit(100)}
      >
        100€
      </Button>
      <Button
        colorScheme="gray"
        isFullWidth
        mb="2"
        onClick={() => onSubmit(200)}
      >
        200€
      </Button>
      <Input placeholder="Dein eigener Betrag..." variant="filled" mb="10" />
      <Button
        onClick={() => {
          props.setPage(DonationProgress.Details);
        }}
        colorScheme="green"
      >
        Weiter
      </Button>
    </>
  );
}

function DetailsPage(props: PageProps) {
  console.log(props.formData)
  const { register, watch, handleSubmit, errors } = useForm<DonationDetailsData>();
  const onSubmit = (data) => {
    console.log(data)
  }
  console.log(watch("name"))

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
          defaultValue={props.formData.details.name}
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
          defaultValue={props.formData.details.email}
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
      <FormControl mb="6" defaultValue="false" name="receipt" ref={register}>
        <Checkbox>Spendenquittung anfordern</Checkbox>
      </FormControl>
      <Button
        onClick={() => {
          handleSubmit(onSubmit);
          console.log("Test")
          /*  props.setPage(DonationProgress.Payment); */
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
        <StatNumber>{props.formData.amount}€</StatNumber>
      </Stat>
      <Box mb="6">
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: props.formData.amount,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture()
            console.log(order)
            console.log(props.formData)
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

export default function Contribute() {
  return (
    <Layout title="Beitragen" fluid>
      <Title
        title="Beitragen"
        heading="Das Projekt unterstützen"
        color="gray.100"
      >
        Um die Bühne wieder veranstaltungsfähig zu machen, benötigen wir Eure
        Hilfe.
      </Title>
      <Box as="section" py="20">
        <Container centerContent>
          <Box as="div" boxShadow="base" p="5" rounded="lg" maxW="sm">
            <DonationModal />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
