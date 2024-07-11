import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  // console.log(exercise);
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} />
      <Stack direction="row">
        <Button
          className="tag-btn1"
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            textDecorationLine: "none",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          className="tag-btn2"
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
        <Button
          className="tag-btn3"
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#7AACD6",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.equipment}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
