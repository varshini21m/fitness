import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets//assets/icons/logo2.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "100px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="20px"
      textAlign="center"
      pb="60px"
    >
      Empower Your Body, Empower Your Life
    </Typography>
  </Box>
);

export default Footer;
