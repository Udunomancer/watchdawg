import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllEvents() {
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
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Link to="/events/new" className="waves-effect waves-light btn">Add New Event</Link>
        </div>
      </div>
      <div className="row">
        {events.map((event) => (
          <div className="col s4" key={event._id}>
            <div className="row">
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <img
                      alt="Sample"
                      src="https://via.placeholder.com/200x100"
                    />
                    <span className="card-title">{event.title}</span>
                  </div>
                  <div className="card-content">
                    <p>Description: {event.description}</p>
                    <p>
                      Location: {event.latitude}, {event.longitude}
                    </p>
                  </div>
                  <div className="card-action">
                    <Link to={`/events/${event._id}`}>View Event</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllEvents;
