// --- import default React dependency ---
import React from "react";
// --- import Material-UI dependencies ---
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

function EventDetailForm(props) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Event Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            value={props.title}
            onChange={(e) => {
              props.setTitle(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            multiline
            id="description"
            name="description"
            label="Description"
            value={props.description}
            onChange={(e) => {
              props.setDescription(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Location Details</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="latitude"
            name="latitude"
            label="Latitude"
            value={props.latitude}
            onChange={(e) => {
              props.setLatitude(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="longitude"
            name="longitude"
            label="Longitude"
            value={props.longitude}
            onChange={(e) => {
              props.setLongitude(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Address Line 1"
            value={props.addressOne}
            onChange={(e) => {
              props.setAddressOne(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address Line2"
            value={props.addressTwo}
            onChange={(e) => {
              props.setAddressTwo(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            value={props.city}
            onChange={(e) => {
              props.setCity(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            value={props.state}
            onChange={(e) => {
              props.setState(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            label="Zip / Postal Code"
            value={props.zip}
            onChange={(e) => {
              props.setZip(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="Country"
            value={props.country}
            onChange={(e) => {
              props.setCountry(e.target.value);
            }}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}

export default EventDetailForm;