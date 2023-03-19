import { Box, Button, chakra, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaPlay, FaUndo } from "react-icons/fa";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef(null);

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - timeElapsed;
      intervalRef.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTimeElapsed(0);
    setIsRunning(false);
  };

  return (
    <Box
      textAlign="center"
      paddingTop="40px"
      bg="blue.800"
      paddingBottom="40px"
      borderTopEndRadius="40px"
      borderRadius="50px"
    >
      <Heading fontSize="4xl" marginBottom="20px" color="ButtonFace">
        Stopwatch
      </Heading>
      <Text fontSize="5xl" color="ButtonFace">
        {(timeElapsed / 1000).toFixed(2)}
      </Text>
      <Flex justifyContent="center" marginTop="20px">
        <Button
          colorScheme="blue"
          leftIcon={<FaPlay />}
          marginRight="10px"
          onClick={handleStartStop}
        >
          {isRunning ? "pause" : "start"}
        </Button>
        <Button
          colorScheme="red"
          leftIcon={<FaUndo />}
          onClick={handleReset}
          disabled={!timeElapsed}
        >
          Reset
        </Button>
      </Flex>
    </Box>
  );
};

export default Stopwatch;
