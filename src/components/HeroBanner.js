import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/HeroBanner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#016DFE" fontWeight="600" fontSize="26px">
      Gym Bros
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Conquer
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={4}>
      Check out the most effective exercises personalized to you
    </Typography>
    <Button
      variant="contained"
      color="error"
      href="#exercises"
      sx={{ backgroundColor: "#016DFE", paddong: "10px" }}
    >
      Explore Exercises
    </Button>
    <Typography
      fontWeight={600}
      color="#016DFE"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
