import React from "react";
import backgroundImage from "../../assets/background/iceland.jpg";
import { Typography, Box, Grid } from "@mui/material";
import useStyles from "./styles";

const Root = () => {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.image} src={backgroundImage}></img>
      <div className={classes.mask}></div>
      <div className={classes.titleOverlay}>
        <Box className={classes.introBox}>
          <Typography variant="h1" color="textPrimary">
            Andy Kwan
          </Typography>
          <Typography
            sx={{ fontWeight: "200" }}
            variant="h4"
            color="textPrimary"
          >
            Cookery · Photography · Programming
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Root;
