import { Container, Box, Heading, Text } from "@chakra-ui/react";

export interface TitleOptions {
  /**
   * The background color of the title
   */
  color?: string
  /**
   * The text to show as title
   */
  title: string
  /**
   * The heading to show above the title
   */
  heading?: string
  /**
   * The elements to show below the title
   */
  children?: any
}

export default function Title(props: TitleOptions) {
  return (
    <Box
      as="section"
      pt="60"
      pb="20"
      textAlign="center"
      background={props.color ? props.color : "green.50"}
    >
      <Container>
        {props.heading && (
          <Heading as="h6" variant="uppercase" fontSize="sm" mb="5">
            {props.heading}
          </Heading>
        )}
        <Heading as="h1" fontSize="6xl">
          {props.title}
        </Heading>
        {props.children && (
          <Text mt="3" fontSize="xl">
            {props.children}
          </Text>
        )}
      </Container>
    </Box>
  );
}
