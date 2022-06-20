import React, { useState } from 'react';
import {Box} from "@mui/material";

import Excercises from '../components/Exercises'
import SearchExcercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'


const Home = () => {
  const [bodyPart, setBodyPart] = useState("all")
  const[ exercises, setExercises ] = useState([]);
  
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises setExercises={setExercises}
      bodyPart={bodyPart} setbodyPart={setBodyPart}
      />

      <Excercises setExercises={setExercises}
      bodyPart={bodyPart} setbodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home