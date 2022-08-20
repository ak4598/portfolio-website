import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import MenuButton from "./MenuButton";
import { pages } from "./pages";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appBar}
      color="transparent"
      elevation={0}
      position="sticky"
    >
      <Stack className={classes.stack} direction="row">
        <Toolbar className={classes.toolbar}>
          <Link href={"/"} underline="none">
            <Button>
              <Typography color="textPrimary" variant="h3">
                Logo
              </Typography>
            </Button>
          </Link>
        </Toolbar>
        <Toolbar className={classes.toolbarRight}>
          <Stack className={classes.stackRight} direction="row" spacing={4}>
            {pages.map((page) => (
              <MenuButton
                name={page.name}
                sections={page.sections}
                key={page.name}
              ></MenuButton>
            ))}
          </Stack>
        </Toolbar>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
