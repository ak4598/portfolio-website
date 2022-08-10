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
import SocialMediaButton from "./SocialMediaButton";
import { pages, mySocialMedia } from "./pages";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="transparent" elevation={0}>
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
            {/* <SocialMediaButton
              href={mySocialMedia.Instagram}
              Icon={Instagram}
            />
            <SocialMediaButton href={mySocialMedia.LinkedIn} Icon={LinkedIn} />
            <SocialMediaButton href={mySocialMedia.GitHub} Icon={GitHub} /> */}
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
