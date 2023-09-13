import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

function SimilarExercises({
  equipmentExercisesData,
  targetMuscleExercisesData,
}) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercise that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercisesData.length ? (
          <HorizontalScrollbar data={targetMuscleExercisesData} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercise that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercisesData.length ? (
          <HorizontalScrollbar data={equipmentExercisesData} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
