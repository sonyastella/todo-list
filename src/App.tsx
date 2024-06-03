import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Checkbox,
  IconButton,
  VStack,
  HStack,
  Input,
  Button,
  theme,
} from '@chakra-ui/react';

const App: React.FC = () => {
  const tasks = [
    'Create Guest Experience mobile check-in',
    'Document current CI/CD process',
    'Perform Code Review for final Pillow-Talk release',
    'Implement new Color Palette from Design Team',
    'Fix image uploading process for guest check-in',
    'Provide on-boarding documentation',
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box maxW="container.md" p={4} bg="gray.900" color="white" borderRadius="md" mx="auto" mt={10}>
        <Heading mb={4} textAlign="center">Chores ToDo List</Heading>
        <VStack spacing={3}>
          {tasks.map((task, index) => (
            <HStack
              key={index}
              p={2}
              bg="gray.800"
              w="100%"
              borderRadius="md"
              justifyContent="space-between"
            >
              <HStack>
                <Checkbox colorScheme="teal" />
                <Box as="span" fontWeight="semibold">
                  {task}
                </Box>
              </HStack>
              <IconButton
                aria-label="Delete task"
                colorScheme="red"
                variant="outline"
              />
            </HStack>
          ))}
        </VStack>
        <Box mt={4} p={4} bg="gray.800" borderRadius="md">
          <Heading size="md" mb={2} textAlign="center">Done : 0</Heading>
          <HStack>
            <Input
              placeholder="Add todo"
              bg="gray.700"
              color="white"
            />
            <Button colorScheme="teal">ADD TASK</Button>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;

