import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo1 from "../assets/images/lift.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#6BB0FE">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo1} alt="gym" style={{ width: "150px", height: "150px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    ></Typography>
  </Box>
);

export default Footer;
