import React, { useState, useRef } from 'react';
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
import { CloseIcon } from '@chakra-ui/icons';

const App: React.FC = () => {
  const [tasks, setTasks] = useState([
    'Create Guest Experience mobile check-in',
    'Document current CI/CD process',
    'Perform Code Review for final Pillow-Talk release',
    'Implement new Color Palette from Design Team',
    'Fix image uploading process for guest check-in',
    'Provide on-boarding documentation',
  ]);
  const [doneCount, setDoneCount] = useState(0);
  const taskInputRef = useRef<HTMLInputElement>(null);

  const addTask = () => {
    const newTask = taskInputRef.current?.value;
    if (newTask) {
      setTasks([...tasks, newTask]);
      taskInputRef.current.value = '';
    }
  };

  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        if (task.startsWith('[DONE] ')) {
          setDoneCount(doneCount - 1);
          return task.replace('[DONE] ', '');
        } else {
          setDoneCount(doneCount + 1);
          return `[DONE] ${task}`;
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

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
                <Checkbox
                  colorScheme="teal"
                  isChecked={task.startsWith('[DONE] ')}
                  onChange={() => toggleTask(index)}
                />
                <Box as="span" fontWeight="semibold" textDecoration={task.startsWith('[DONE] ') ? 'line-through' : 'none'}>
                  {task.replace('[DONE] ', '')}
                </Box>
              </HStack>
              <IconButton
                aria-label="Delete task"
                colorScheme="red"
                variant="outline"
                icon={<CloseIcon />}
                onClick={() => deleteTask(index)}
              />
            </HStack>
          ))}
        </VStack>
        <Box mt={4} p={4} bg="gray.800" borderRadius="md">
          <Heading size="md" mb={2} textAlign="center">Done: {doneCount}</Heading>
          <HStack>
            <Input
              ref={taskInputRef}
              placeholder="Add todo"
              bg="gray.700"
              color="white"
            />
            <Button colorScheme="teal" onClick={addTask}>ADD TASK</Button>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;