import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
import { Page } from "./pages";
import camelize from "../../utils/camelize";
import useStyles from "./styles";

const MenuButton = (props: any) => {
  const classes = useStyles();
  const [anchorElm, setAnchorElm] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  };

  return (
    <Box>
      <Button key={props.name} onClick={handleClick}>
        <Typography color="textPrimary" variant="caption">
          {props.name}
        </Typography>
      </Button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        {props.sections.map((section: string) => (
          <MenuItem
            key={section}
            onClick={handleClose}
            component={Link}
            to={"/" + camelize(props.name) + "/" + camelize(section)}
          >
            <Typography color="textPrimary" variant="body2">
              {section}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuButton;
