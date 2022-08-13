import React from "react";

import { Container } from "@mui/material";
import Carousel from "react-spring-3d-carousel";

import useStyles from "./styles";

const CarouselSlider = (props: any) => {
  const classes = useStyles();

  return (
    <Container className={classes.carousel}>
      <Carousel
        slides={props.slides}
        goToSlide={props.goToSlide}
        offsetRadius={props.offsetRadius}
        showNavigation={props.showArrows}
        animationConfig={props.config}
      />
    </Container>
  );
};

export default CarouselSlider;
