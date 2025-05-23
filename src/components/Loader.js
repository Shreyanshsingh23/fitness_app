import React from 'react'
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" height="100vh">
        <InfinitySpin width='200' color="gray " />
    </Stack>
  )
}

export default Loader