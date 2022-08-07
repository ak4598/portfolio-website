import React from "react";
import { useState } from "react";
import { Paper, Container } from "@mui/material";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import ProgLogos from "../../assets/ProgLogos";
import useStyles from "./styles";
import { v4 as uuidv4 } from "uuid";

const CarouselSlider = () => {
  const classes = useStyles();
  const progSlides = ProgLogos.map((Logo, index) => ({
    key: uuidv4(),
    content: (
      <Paper className={classes.paper}>
        <Logo className={classes.svg} />
      </Paper>
    ),
    onClick: () => setGoToSlide(index),
  }));

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [slides] = useState(progSlides);

  return (
    <Container className={classes.carousel}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </Container>
  );
};

export default CarouselSlider;
