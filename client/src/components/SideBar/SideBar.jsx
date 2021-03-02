import React from "react";
// --- import Material UI dependencies ---
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
// --- import custom components ---
import { navListItems, userListItems } from "../MenuLists/MenuLists";
// --- import custom Styles ---
import useStyles from "../../utils/Styles/Styles";

function SideBar({ open, closeSideBar, classes }) {

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={closeSideBar}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{navListItems}</List>
      <Divider />
      <List>{userListItems}</List>
    </Drawer>
  );
}

export default SideBar;
