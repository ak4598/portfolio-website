import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import MenuButton from "./MenuButton";
import { pages, mySocialMedia } from "./pages";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Stack className={classes.stack} direction="row" spacing={2}>
            <Link target="_blank" href={mySocialMedia.Instagram}>
              <Button
                startIcon={<Instagram className={classes.icon} />}
              ></Button>
            </Link>
            <Link target="_blank" href={mySocialMedia.LinkedIn}>
              <Button
                startIcon={<LinkedIn className={classes.icon} />}
              ></Button>
            </Link>
            <Link target="_blank" href={mySocialMedia.GitHub}>
              <Button startIcon={<GitHub className={classes.icon} />}></Button>
            </Link>
            {pages.map((page) => (
              <MenuButton
                name={page.name}
                sections={page.sections}
                variant="contained"
                key={page.name}
              >
                <Typography className={classes.typography} variant="button">
                  {page.name}
                </Typography>
              </MenuButton>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
