import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import exerciseData from "../utils/exerciseData.json";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const getFilterData = () => {
      let scrollSeactionData = [];
      if (bodyPart === "all") scrollSeactionData = exerciseData;
      else
        scrollSeactionData = exerciseData.filter(
          (exercise) => exercise.bodyPart.toLowerCase() === bodyPart
        );
      setExercises(scrollSeactionData);
    };

    getFilterData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            // color="secondary"
            variant="outlined"
            shape="rounded"
            size="large"
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
