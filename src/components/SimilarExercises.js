import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}} p="20px">
      <Typography fontWeight={"400"} variant="h3" mb="33px">
        Similar <span style={{color:'#FF2625', textTransform:"capitalize"}}>Target Muscle</span> Exercises
      </Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography fontWeight={"400"}  variant="h3" mb="33px">
      Similar <span style={{color:'#FF2625', textTransform:"capitalize"}}>Equipment</span> Exercises
      </Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises