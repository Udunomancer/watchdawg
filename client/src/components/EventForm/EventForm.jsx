import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventForm({ btnTxt, handleFormSubmit }) {
  const { id } = useParams();
  const [event, setEvent] = useState({
    title: "",
    description: "",
    latitude: "",
    longitude: "",
  });

  function handleInputChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    setEvent({ ...event, [id]: value });
  }

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/events/${id}`)
        .then((response) => {
          console.log(response.data);
          setEvent({
              title: response.data.title,
              description: response.data.description,
              latitude: response.data.latitude,
              longitude: response.data.longitude
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <form className="col s12" onSubmit={(e) => handleFormSubmit(e, event)}>
      <div className="row">
        <div className="input-field col s6">
          <input
            id="title"
            type="text"
            value={event.title}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="title">Event Title</label>
        </div>
        <div className="col s6">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="latitude"
                type="number"
                value={event.latitude}
                onChange={handleInputChange}
              ></input>
              <label htmlFor="lat">Latitude</label>
            </div>
            <div className="input-field col s6">
              <input
                id="longitude"
                type="number"
                value={event.longitude}
                onChange={handleInputChange}
              ></input>
              <label htmlFor="long">Longitude</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea
            id="description"
            value={event.description}
            onChange={handleInputChange}
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <button className="waves-effect waves-light btn">{btnTxt}</button>
        </div>
      </div>
    </form>
  );
}

export default EventForm;
