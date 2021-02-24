import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AllEvents from "./pages/AllEvents/AllEvents";
import EditEvents from "./pages/EditEvent/EditEvent";
import Home from "./pages/Home/Home";
import NewEvent from "./pages/NewEvent/NewEvent";
import SingleEvent from "./pages/SingleEvent/SingleEvent";


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/events" component={AllEvents}/>
          <Route exact path="/events/new" component={NewEvent}/>
          <Route exact path="/events/:id/edit" component={EditEvents}/>
          <Route exact path="/events/:id" component={SingleEvent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;