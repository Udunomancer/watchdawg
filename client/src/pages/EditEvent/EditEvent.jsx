import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import EventForm from "../../components/EventForm/EventForm";

function EditEvent() {
  const history = useHistory();
  const { id } = useParams();

  function handleFormSubmit(e, event) {
    e.preventDefault();

    axios
      .put(`/api/events/${id}`, {
        title: event.title,
        description: event.description,
        latitude: event.latitude,
        longitude: event.longitude,
      })
      .then((response) => {
        console.log(response.data);
        history.push(`/events/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <EventForm btnTxt="Update Event" handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default EditEvent;
