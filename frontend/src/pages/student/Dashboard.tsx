
import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import { Header } from '../../components/Layout/Header';

const StudentDashboard = () => {
  return (
    <Box>
      <Header />
      <Box maxW="1200px" mx="auto" px={4} py={8}>
        <Heading mb={6}>Meus Cursos</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={6}>
          {/* Course cards will go here */}
        </Grid>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
