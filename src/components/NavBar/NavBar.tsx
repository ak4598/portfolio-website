import React from "react";
import { AppBar, Toolbar, Button, Typography, Stack } from "@mui/material";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import pages from "./pages";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const socialMediaIcons = [Instagram, GitHub, LinkedIn];

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Stack className={classes.stack} direction="row" spacing={2}>
            {socialMediaIcons.map((SocialMediaIcon) => (
              <Button
                startIcon={<SocialMediaIcon className={classes.icon} />}
                variant="contained"
              ></Button>
            ))}
            {pages.map((page) => (
              <Button variant="contained" key={page.name}>
                <Typography className={classes.typography} variant="button">
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
