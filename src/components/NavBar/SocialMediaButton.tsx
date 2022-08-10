import React from "react";
import { Link, Box } from "@mui/material";

import useStyles from "./styles";

const SocialMediaButton = (props: any) => {
  const classes = useStyles();
  return (
    <Box>
      <Link target="_blank" href={props.href} rel="noopener noreferrer">
        <props.Icon className={classes.icon} />
      </Link>
    </Box>
  );
};

export default SocialMediaButton;
