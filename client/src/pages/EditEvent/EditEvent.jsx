// --- import default React dependencies ---
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
// --- import Material-UI dependencies ---
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// --- import custom Material-UI styles ---
import PageStyles from "../../utils/Styles/PageStyles";
// --- import custom components ---
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
