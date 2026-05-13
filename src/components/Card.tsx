import { useState } from "react";
import { Input, Button, Center } from "@chakra-ui/react";
import { loginService } from "../services/login";

export const CardLogin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarLogin = () => {
    loginService({ 
    username, 
    email, 
    password });
  };

  return (
    <>
      <Input
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        marginBottom="10px"
        textAlign="center"
      />

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        marginBottom="10px"
        textAlign="center"
      />

      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        marginBottom="10px"
        textAlign="center"
      />

      <Center>
        <Button onClick={validarLogin} colorScheme="teal" width="100%">
          Login
        </Button>
      </Center>
    </>
  );
}