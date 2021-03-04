// --- import default React dependency ---
import React from "react";
// --- import NavLink from react-router-dom ---
import { NavLink } from "react-router-dom";
// --- import Material UI dependencies ---
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
// --- import Icons from Material-UI icons ---
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NewIcon from "@material-ui/icons/NewReleases";
import AppsIcon from "@material-ui/icons/Apps"
// import PersonIcon from "@material-ui/icons/Person";
import LockClosedIcon from "@material-ui/icons/Lock";
// import FileIcon from "@material-ui/icons/FileCopy";
// import NotificationsIcon from "@material-ui/icons/Notifications"

export const navListItems = (
  <div>
    <ListItem button component={NavLink} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={NavLink} to="/events">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItem>
    <ListItem button component={NavLink} to="/events/new">
      <ListItemIcon>
        <NewIcon />
      </ListItemIcon>
      <ListItemText primary="New Event" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="N/A" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="N/A" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="N/A" />
    </ListItem> */}
  </div>
);

export const userListItems = (
  <div>
    <ListSubheader inset>Account Management</ListSubheader>
    {/* <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem> */}
    <ListItem button component={NavLink} to="/login">
      <ListItemIcon>
        <LockClosedIcon />
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItem>
    {/* <ListItem button component={NavLink} to="/">
      <ListItemIcon>
        <LockClosedIcon />
      </ListItemIcon>
      <ListItemText primary="New User" />
    </ListItem> */}
    <ListItem button component={NavLink} to="/admin">
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="Administration" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <FileIcon />
      </ListItemIcon>
      <ListItemText primary="My Uploads" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem> */}
  </div>
);
