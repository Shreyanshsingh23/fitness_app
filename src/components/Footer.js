import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack 
        gap="40px" 
        alignItems="center" 
        px="40px" 
        pt="24px"
        pb="40px"
      >
        <img src={Logo} alt="logo" style={{width: '200px', height: '41px'}} />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ❤️ by <span style={{color: '#FF2625', fontSize: '22px'}}>Shreyansh</span>
        </Typography>
        <Typography variant="h7" pb="40px" mt="20px">
          © 2025 Shreyansh. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer