import clsx from "clsx";
// --- import baseline React dependencies ---
import React, { useState } from "react";
// --- import React Router dependencies ---
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// --- import Baseline from Material-ui ---
import CssBaseline from "@material-ui/core/CssBaseline";
// --- import Auth Provider ---
import { AuthProvider } from "./utils/UserAuth/index";
// --- import universal NavBar ---
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
// --- import pages for Router ---
import Admin from "./pages/Admin/Admin";
import AllEvents from "./pages/AllEvents/AllEvents";
import AllRecords from "./pages/AllRecords/AllRecords";
import EditEvent from "./pages/EditEvent/EditEvent";
import EditRecord from "./pages/EditRecord/EditRecord";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NewEvent from "./pages/NewEvent/NewEvent";
import NewRecord from "./pages/NewRecord/NewRecord";
import SingleEvent from "./pages/SingleEvent/SingleEvent";
import SingleRecord from "./pages/SingleRecord/SingleRecord";
// ---import custom Material UI styles ---
import useStyles from "./utils/Styles/Styles";

function App() {
  const classes = useStyles();
  const [sideBarOpen, setSideBarOpen] = React.useState(false);
  const handleSideBarOpen = () => {
    setSideBarOpen(true);
  };
  const handleSideBarClose = () => {
    setSideBarOpen(false);
  }

  return (
    <>
      <CssBaseline />
      <div className={`App ${classes.root}`} >
        <Router>
          <AuthProvider>
            <NavBar open={sideBarOpen} openSideBar={handleSideBarOpen} classes={classes}/>
            <SideBar open={sideBarOpen} closeSideBar={handleSideBarClose} classes={classes}/>
            <Switch>
              {/* General Page Routes */}
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/login" render={(classes) => (
                <Login classes={classes} />
              )} />
              {/* Event Page Routes */}
              <Route exact path="/events" component={AllEvents} />
              <Route exact path="/events/new" component={NewEvent} />
              <Route exact path="/events/:id/edit" component={EditEvent} />
              <Route exact path="/events/:id" component={SingleEvent} />
              {/* Record Page Routes */}
              <Route exact path="/records" component={AllRecords} />
              <Route exact path="/records/new" component={NewRecord} />
              <Route exact path="/records/:id/edit" component={EditRecord} />
              <Route exact path="/records/:id" component={SingleRecord} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
