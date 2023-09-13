import React from "react";
import { Typography, Box, Button } from "@mui/material";
import HeroBannerImage from "../assets/assets/images/banner.png";
import backImage from "../assets/assets/images/bg.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "150px", xs: "70px" },
        ml: { sm: "30px" },
      }}
      position="relative"
      p="20px"
    >
      <img
        src={backImage}
        alt="banner"
        style={{ opacity: "0.2" }}
        className="bg-image"
      />
      <Typography
        color="#FF2625"
        fontWeight="600"
        fontSize="40px"
        textTransform="uppercase"
      >
        Fitness Gym
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Empower Your Body, <br /> Empower Your Life
      </Typography>
      <Typography fontSize="28px" lineHeight="35px" mb={4} fontWeight={500}>
        Check out the most effective exercise
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercise"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercise
      </Button>
      <Typography
        fontWeight={300}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
          ml: { sm: "60px" },
        }}
        fontSize="200px"
      >
        {" "}
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
