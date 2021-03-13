import { Dispatch, FC } from "react";
import { useForm } from "react-hook-form";
import {
  Grid,
  GridItem,
  FormControl,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

interface ContactFormInitial {
  onSubmit: Dispatch<ContactFormInput>;
  data?: ContactFormInput;
}

const ContactFormInitial: FC<ContactFormInitial> = ({ onSubmit, data }) => {
  const { register, handleSubmit } = useForm<ContactFormInput>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        alignItems="center"
        templateColumns="repeat(2, 1fr)"
        columnGap={6}
        rowGap={6}
      >
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <Input
              placeholder="Dein Name / Organisation"
              variant="filled"
              size="lg"
              name="name"
              ref={register}
              defaultValue={data?.name}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <FormControl>
            <Input
              placeholder="Deine E-Mail-Adresse"
              variant="filled"
              size="lg"
              name="email"
              ref={register}
              defaultValue={data?.email}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Textarea
              variant="filled"
              w="full"
              placeholder="Deine Nachricht"
              name="message"
              ref={register}
              defaultValue={data?.message}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme="green" size="lg" isFullWidth type="submit">
            Nachricht senden
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
};

export default ContactFormInitial;
