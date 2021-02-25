// --- import React Router dependencies ---
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// --- import universal NavBar ---
import NavBar from "./components/NavBar/NavBar";
// --- import pages for Router ---
import AllEvents from "./pages/AllEvents/AllEvents";
import AllRecords from "./pages/AllRecords/AllRecords";
import EditEvents from "./pages/EditEvent/EditEvent";
import Home from "./pages/Home/Home";
import NewEvent from "./pages/NewEvent/NewEvent";
import SingleEvent from "./pages/SingleEvent/SingleEvent";


function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {/* General Page Routes */}
          <Route exact path="/" component={Home}/>
          {/* Event Page Routes */}
          <Route exact path="/events" component={AllEvents}/>
          <Route exact path="/events/new" component={NewEvent}/>
          <Route exact path="/events/:id/edit" component={EditEvents}/>
          <Route exact path="/events/:id" component={SingleEvent}/>
          {/* Record Page Routes */}
          <Route exact path="/records" component={AllRecords}/>
          {/* <Route exact path="/records/:id" component={SingleRecord}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;