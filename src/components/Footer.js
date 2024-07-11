import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-Gym.jpeg";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems="center" px="40px" pt="14px">
        <img src={Logo} alt="Logo" width="100px" height="100px" />
        <Typography variant="h6" pb="20px" pt="5px">
          Made by - Chirag Arya @2024 Copyright :{" "}
          <span color="#ff2526">MuscleMatch</span>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
