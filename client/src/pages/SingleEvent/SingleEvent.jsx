import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

function SingleEvent() {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const history = useHistory();

  function handleDeleteClick() {
    axios
      .delete(`/api/events/${id}`)
      .then((response) => {
        console.log(response.data);
        history.push("/events");
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          <button
            className="waves-effect waves-light btn"
            onClick={handleDeleteClick}
          >
            DELETE
          </button>
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
