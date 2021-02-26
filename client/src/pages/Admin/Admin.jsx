import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleDeleteClick(e) {
      axios
      .delete(`/api/events/${e.target.value}`)
      .then((response) => {
          console.log(response.data);
      })
      .catch((err) => {
          console.log(err);
      })
  }

  useEffect(() => {
    axios
      .get("/api/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Link to="/events/new" className="waves-effect waves-light btn">
            Add New Event
          </Link>
        </div>
      </div>
      <div className="row">
          <ul className="col s12 collection">
              <li className="row collection-item">
                  <span className="col s3"><strong>Title</strong></span>
                  <span className="col s3"><strong>Location</strong></span>
                  <span className="col s3"><strong>Time</strong></span>
                  <span className="col s3"><strong>Take Action</strong></span>
              </li>
              {events.map((event) => (
                  <li key={event._id} className="row collection-item">
                      <span className="col s3">{event.title}</span>
                      <span className="col s3">{`${event.latitude}, ${event.longitude}`}</span>
                      <span className="col s3">{event.time}</span>
                      <span className="col s3">
                          <button className="waves-effect waves-light btn" value={event._id} onClick={handleDeleteClick}>
                              DELETE
                          </button>
                      </span>
                  </li>
              ))}
          </ul>
      </div>
    </div>
  );
}

export default Admin;
