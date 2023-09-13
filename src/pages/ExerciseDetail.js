import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercisesData, setTargetMuscleExercisesData] = useState(
    []
  );
  const [equipmentExercisesData, setEquipmentExercisesData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDburl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDburl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideo(exerciseVideosData.contents);
      const targetMuscleExercisesData = await fetchData(
        `${exerciseDburl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercisesData(targetMuscleExercisesData);
      const equimentExercisesData = await fetchData(
        `${exerciseDburl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercisesData(equimentExercisesData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideo}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercisesData={targetMuscleExercisesData}
        equipmentExercisesData={equipmentExercisesData}
      />
    </Box>
  );
}

export default ExerciseDetail;
