import { Box, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
  return (
    <Box bgcolor={'primary.main'} textAlign="center">
      <Typography variant="body1" p={2}>
        Copyright © 2022 designed by N. Nasrullah
      </Typography>
    </Box>
  );
};
