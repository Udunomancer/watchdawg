import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function SingleEvent() {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>{event.title}</h1>
          <Link
            className="waves-effect waves-light btn"
            to={`/events/${id}/edit`}
          >
            Edit Event
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p>Description: {event.description}</p>
          <p>
            Location: {event.latitude}, {event.longitude}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">MEDIA WILL GO HERE</div>
      </div>
    </div>
  );
}

export default SingleEvent;
