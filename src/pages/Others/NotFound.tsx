import React from "react";
import useStyles from "./styles";
import { Typography, Box } from "@mui/material";

const NotFound = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.mask404}></div>
      <div className={classes.titleOverlay}>
        <Box className={classes.introBox}>
          <Typography variant="h1" color="textPrimary">
            404 Not Found
          </Typography>
          <Typography
            sx={{ fontWeight: "200" }}
            variant="h4"
            color="textPrimary"
          >
            👆🏻Please browse through the navigation bar above👆🏻
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default NotFound;
