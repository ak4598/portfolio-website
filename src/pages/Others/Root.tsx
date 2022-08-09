import React from "react";
import backgroundImage from "../../assets/background/iceland.jpg";
import { Container, Box } from "@mui/material";
import useStyles from "./styles";

const Root = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.mask}></div>
      <img className={classes.image} src={backgroundImage}></img>
    </div>
  );
};

export default Root;
