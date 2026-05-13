import {
  Center,
  ChakraProvider,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";

import { CardLogin } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Flex
        as="header"
        bg="#440068"
        color="#ffffff"
        padding="15px"
        justify="space-between"
        align="center"
      >
        <Center width="100%">
          <Heading size="md" fontSize="2xl">
            DIO BANK
          </Heading>
        </Center>
      </Flex>

      <Box minHeight="100vh" backgroundColor="#1f1629ff" padding="180px">
        <Box
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="25px"
          padding="15px"
          maxWidth="800px"
          margin="0 auto"
        >
          <Center marginBottom="10px">
            <Heading size="md" >
              Faça o login
            </Heading>
          </Center>
          <CardLogin />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
