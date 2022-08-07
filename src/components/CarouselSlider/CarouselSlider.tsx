import React from "react";
import { useState, useEffect } from "react";
import { Paper, Stack } from "@mui/material";
import Carousel from "react-spring-3d-carousel";
import ProgLogos from "../../assets/ProgLogos";
import useStyles from "./styles";

const CarouselSlider = () => {
  const classes = useStyles();

  return (
    <Stack direction="row">
      {ProgLogos.map((Logo) => (
        <Paper className={classes.paper}>
          <Logo className={classes.svg} />
        </Paper>
      ))}
    </Stack>
  );
};

export default CarouselSlider;
