import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
// import { exerciseOptions, fetchData } from "../utils/fetchData.util";
import exercisesData from "../utils/exerciseData.json";
import bodyPartsJson from "../utils/bodyPartList.json";
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyPartsData, setBodyPartsData] = useState([]);

  const fetchBodyPartsData = async () => {
    // const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
    // const bodyPartsData = await fetchData(url, exerciseOptions);

    setBodyPartsData(["all", ...bodyPartsJson]);
  };
  const handleSearch = async () => {
    // const url =
    //   "https://exercisedb.p.rapidapi.com/exercises?limit=1200&offset=0";
    if (search) {
      // const exercisesData = await fetchData(url, exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  useEffect(() => {
    fetchBodyPartsData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "12px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Seacrh
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          setExercises={setExercises}
          data={bodyPartsData}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart={true}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
