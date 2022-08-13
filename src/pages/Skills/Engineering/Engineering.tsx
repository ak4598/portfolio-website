import React, { useState } from "react";
import CarouselSlider from "../../../components/CarouselSlider/CarouselSlider";
import useStyles from "./styles";
import { v4 as uuidv4 } from "uuid";
import ProgLogos from "../../../assets/ProgLogos";
import { config } from "react-spring";

const Engineering = () => {
  const classes = useStyles();

  const progSlides = ProgLogos.map((Prog, index) => ({
    key: uuidv4(),
    content: (
      <div className={classes.paper}>
        <Prog.logo className={classes.svg} />
      </div>
    ),

    onClick: () => {
      setMaskColour(Prog.colour);
      setGoToSlide(index);
    },
  }));

  const [goToSlide, setGoToSlide] = useState(0);
  const [maskColour, setMaskColour] = useState(ProgLogos[0].colour);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [slides] = useState(progSlides);

  return (
    <div>
      <div className={classes.mask} style={{ background: maskColour }}></div>

      <CarouselSlider
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
};

export default Engineering;
