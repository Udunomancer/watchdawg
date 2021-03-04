// --- import default React dependencies ---
import React, { useEffect, useState } from "react";
// --- import Material-UI dependencies ---
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
// --- import custom Material-UI styles ---
import useStyles from "../../utils/Styles/Styles";
// --- import custom component
import Title from "../../components/Title/Title";
import axios from "axios";
import clsx from "clsx";
import { Link } from "react-router-dom";

function AllEvents() {
  // use import styles
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={12}>
            <Paper className={classes.paper}>
              <Title>All Events</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Location</TableCell>
                    <TableCell align="center">Time</TableCell>
                    <TableCell align="center">See More</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((event) =>(
                    <TableRow key={event._id}>
                      <TableCell align="center">{event.title}</TableCell>
                      <TableCell align="center">{event.latitude}, {event.longitude}</TableCell>
                      <TableCell align="center">Time</TableCell>
                      <TableCell align="center"><Button component={Link} to={`/events/${event._id}`}>View Event</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
    // <div className="container">
    //   <div className="row">
    //     <div className="col s12">
    //       <Link to="/events/new" className="waves-effect waves-light btn">
    //         Add New Event
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="row">
    //     {events.map((event) => (
    //       <div className="col s4" key={event._id}>
    //         <div className="row">
    //           <div className="col s12 m7">
    //             <div className="card">
    //               <div className="card-image">
    //                 <img
    //                   alt="Sample"
    //                   src="https://via.placeholder.com/200x100"
    //                 />
    //                 <span className="card-title">{event.title}</span>
    //               </div>
    //               <div className="card-content">
    //                 <p>Description: {event.description}</p>
    //                 <p>
    //                   Location: {event.latitude}, {event.longitude}
    //                 </p>
    //               </div>
    //               <div className="card-action">
    //                 <Link to={`/events/${event._id}`}>View Event</Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default AllEvents;
