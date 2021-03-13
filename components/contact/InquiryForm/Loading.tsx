import { FC } from "react";
import { Center, Spinner } from "@chakra-ui/react";

const ContactFormLoading: FC = () => {
  return (
    <Center>
      <Spinner size="xl" />
    </Center>
  );
};

export default ContactFormLoading;
