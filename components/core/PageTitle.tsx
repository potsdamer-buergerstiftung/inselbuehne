import {
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { MotionHeading, MotionBox } from "@components/motion";

export interface Title {
  title: string;
  heading?: string;
  children?: any;
  bg?: string;
}

const PageTitle: FC<Title> = ({ bg, heading, title, children }) => {
  const defaultBg = useColorModeValue("green.100", "purple.800");
  const background = bg || defaultBg;

  return (
    <Box as="section" pt="60" pb="20" textAlign="center" bg={background}>
      <Container maxW="6xl">
        {heading && (
          <Heading
            as="h6"
            variant="uppercase"
            fontSize="sm"
            mb="5"
            color="green.500"
          >
            {heading}
          </Heading>
        )}
        <MotionHeading
          as="h1"
          fontSize="6xl"
          mb="5"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {title}
        </MotionHeading>
        {children && (
          <MotionBox initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.5, delay: 1 }}>
            <Text mt="3" fontSize="xl">
              {children}
            </Text>
          </MotionBox>
        )}
      </Container>
    </Box>
  );
};

export default PageTitle;
