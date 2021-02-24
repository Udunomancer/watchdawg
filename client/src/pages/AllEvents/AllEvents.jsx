import React, { useEffect, useState } from "react";
import axios from "axios";

function AllEvents() {
  const [events, setEvents] = useState([
    {
      title: "",
      description: "",
      latitude: 0,
      longitude: 0,
      files: [],
    },
  ]);

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
        {events.map((event) => (
          <div className="col s4">
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
                    <a href="/">This is a link</a>
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
