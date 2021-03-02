import React from "react";
import clsx from "clsx";
// --- import Material-UI dependencies ---
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
// --- import Material-UI Theme Styles ---
import useStyles from "../../utils/Styles/Styles";
import { NavLink } from "react-router-dom";

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
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          WatchDawg
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
    // <nav>
    //     <div className="nav-wrapper">
    //         <NavLink to="/" className="brand-logo">Watchdawg</NavLink>
    //         <ul id="nav-mobild" className="right hide-on-med-and-down">
    //             <li><NavLink to="/events">All Events</NavLink></li>
    //         </ul>
    //     </div>
    // </nav>
  );
}

export default NavBar;
