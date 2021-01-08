import Head from 'next/head'
import { Button } from "@chakra-ui/react"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Willkommen - Inselbühne Potsdam</title>
      </Head>
      <Button colorScheme="blue">Button</Button>
    </div>
  )
}
