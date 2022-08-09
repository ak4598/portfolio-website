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
    <AppBar className={classes.appBar} color="transparent" elevation={0}>
      <Stack className={classes.stack} direction="row">
        <Toolbar className={classes.toolbar}>
          <Link href={"/"}>
            <Button>
              <Typography color="textPrimary">Logo</Typography>
            </Button>
          </Link>
        </Toolbar>
        <Toolbar className={classes.toolbarRight}>
          <Stack className={classes.stackRight} direction="row" spacing={2}>
            <Link
              target="_blank"
              href={mySocialMedia.Instagram}
              rel="noopener noreferrer"
            >
              <Button
                startIcon={<Instagram className={classes.icon} />}
              ></Button>
            </Link>
            <Link
              target="_blank"
              href={mySocialMedia.LinkedIn}
              rel="noopener noreferrer"
            >
              <Button
                startIcon={<LinkedIn className={classes.icon} />}
              ></Button>
            </Link>
            <Link
              target="_blank"
              href={mySocialMedia.GitHub}
              rel="noopener noreferrer"
            >
              <Button startIcon={<GitHub className={classes.icon} />}></Button>
            </Link>
            {pages.map((page) => (
              <MenuButton
                name={page.name}
                sections={page.sections}
                variant="contained"
                key={page.name}
              >
                <Typography color="textPrimary" variant="button">
                  {page.name}
                </Typography>
              </MenuButton>
            ))}
          </Stack>
        </Toolbar>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
