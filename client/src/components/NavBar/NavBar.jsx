// --- import default React dependency ---
import React from "react";
// --- import NavLink from react-router-dom ---
import { NavLink } from "react-router-dom";
// --- clsx dependency for appending multiple classes ---
import clsx from "clsx";
// --- import Material-UI dependencies ---
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import PersonIcon from "@material-ui/icons/Person";


function NavBar({ open, openSideBar, classes }) {

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={openSideBar}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component={NavLink}
          to="/"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          WatchDawg
        </Typography>
        <IconButton color="inherit" component={NavLink} to="/login">
          <Badge color="secondary">
            <PersonIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
