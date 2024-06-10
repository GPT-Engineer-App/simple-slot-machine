import React, { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box } from "@chakra-ui/react";
import { FaApple, FaLemon, FaBeer } from "react-icons/fa";

const symbols = [
  { icon: <FaApple />, name: "Apple" },
  { icon: <FaLemon />, name: "Lemon" },
  { icon: <FaBeer />, name: "Beer" },
];

const getRandomSymbol = () => {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
};

const Index = () => {
  const [slot1, setSlot1] = useState(getRandomSymbol());
  const [slot2, setSlot2] = useState(getRandomSymbol());
  const [slot3, setSlot3] = useState(getRandomSymbol());
  const [message, setMessage] = useState("");

  const spin = () => {
    const newSlot1 = getRandomSymbol();
    const newSlot2 = getRandomSymbol();
    const newSlot3 = getRandomSymbol();

    setSlot1(newSlot1);
    setSlot2(newSlot2);
    setSlot3(newSlot3);

    if (newSlot1.name === newSlot2.name && newSlot2.name === newSlot3.name) {
      setMessage("You Win!");
    } else {
      setMessage("Try Again!");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Slot Machine</Text>
        <HStack spacing={4}>
          <Box fontSize="4xl">{slot1.icon}</Box>
          <Box fontSize="4xl">{slot2.icon}</Box>
          <Box fontSize="4xl">{slot3.icon}</Box>
        </HStack>
        <Button onClick={spin} colorScheme="teal" size="lg">
          Spin
        </Button>
        <Text fontSize="xl">{message}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
