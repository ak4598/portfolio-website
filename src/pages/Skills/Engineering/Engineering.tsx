import React, { useState } from "react";
import CarouselSlider from "../../../components/CarouselSlider/CarouselSlider";
import useStyles from "./styles";
import { v4 as uuidv4 } from "uuid";

import Contents, { TechLogos } from "./Contents";
import { config } from "react-spring";

const Engineering = () => {
  const classes = useStyles();

  const progSlides = TechLogos.map((Tech, index) => ({
    key: uuidv4(),
    content: (
      <div className={classes.paper}>
        <Tech.logo className={classes.svg} />
      </div>
    ),

    onClick: () => {
      setMaskColour(Tech.colour);
      setGoToSlide(index);
      setContent(Contents[index]);
    },
  }));

  const [goToSlide, setGoToSlide] = useState(0);
  const [maskColour, setMaskColour] = useState(TechLogos[0].colour);
  const [Content, setContent] = useState(Contents[0]);

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [slides] = useState(progSlides);

  return (
    <div>
      {/* <div className={classes.mask} style={{ background: maskColour }}></div> */}
      <div className={classes.mask} style={{ background: maskColour }}></div>
      <CarouselSlider
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
      <div className={classes.overlay}>{Content}</div>
    </div>
  );
};

export default Engineering;
