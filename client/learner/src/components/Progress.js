import React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts'; // Ensure this is correct

const Progress = () => {
  // Dummy data for the pie charts
  const quizProgressData = [
    { id: 0, value: 30, label: 'Completed' },
    { id: 1, value: 70, label: 'Pending' },
  ];

  const overallProgressData = [
    { id: 0, value: 50, label: 'Completed' },
    { id: 1, value: 50, label: 'Pending' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Progress
      </Typography>

      {/* Quiz Progress Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Quiz Progress
        </Typography>
        <PieChart
          series={[{ data: quizProgressData }]}
          width={400}
          height={200}
        />
      </Box>

      {/* Overall Progress Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Overall Progress
        </Typography>
        <PieChart
          series={[{ data: overallProgressData }]}
          width={400}
          height={200}
        />
      </Box>
    </Box>
  );
};

export default Progress;
