import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import EventForm from "../../components/EventForm/EventForm";

function NewEvent() {

  const history = useHistory();
  
  function handleFormSubmit(e, event) {
    e.preventDefault();
    
    axios
      .post("/api/events", {
        title: event.title,
        description: event.description,
        latitude: event.latitude,
        longitude: event.longitude
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
        <EventForm btnTxt="Add Event" handleFormSubmit={handleFormSubmit}/>
      </div>
    </div>
  );
}

export default NewEvent;
