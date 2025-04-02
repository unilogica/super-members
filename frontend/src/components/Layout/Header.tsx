
import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <Box as="header" bg="white" shadow="sm" py={4}>
      <Flex maxW="1200px" mx="auto" px={4} justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">EduPlatform</Text>
        {user && (
          <Flex align="center" gap={4}>
            <Text>{user.email}</Text>
            <Button onClick={logout} size="sm">Sair</Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
