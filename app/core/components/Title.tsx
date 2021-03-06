import { Container, Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { FC } from "react"

export interface Title {
  title: string
  heading?: string
  children?: any
  bg?: string
}

const Title: FC<Title> = ({ bg, heading, title, children }) => {
  const defaultBg = useColorModeValue("green.100", "purple.800")
  const background = bg || defaultBg

  return (
    <Box as="section" pt="60" pb="20" textAlign="center" bg={background}>
      <Container maxW="6xl">
        {heading && (
          <Heading as="h6" variant="uppercase" fontSize="sm" mb="5" color="green.500">
            {heading}
          </Heading>
        )}
        <Heading as="h1" fontSize="6xl">
          {title}
        </Heading>
        {children && (
          <Text mt="3" fontSize="xl">
            {children}
          </Text>
        )}
      </Container>
    </Box>
  )
}

export default Title
