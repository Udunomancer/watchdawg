// --- import default React dependency ---
import React from "react";
// --- import Material-UI dependencies ---
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { PromiseProvider } from "mongoose";

function RecordDetailsForm(props) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        File Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            value={props.fileTitle}
            onChange={(e) => {
              props.setFileTitle(e.target.value);
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
            value={props.fileDescription}
            onChange={(e) => {
              props.setFileDescription(e.target.value);
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
            value={props.fileLatitude}
            onChange={(e) => {
              props.setFileLatitude(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="longitude"
            name="longitude"
            label="Longitude"
            value={props.fileLongitude}
            onChange={(e) => {
              props.setFileLongitude(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Address Line 1"
            value={props.fileAddressOne}
            onChange={(e) => {
              props.setFileAddressOne(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address Line2"
            value={props.fileAddressTwo}
            onChange={(e) => {
              props.setFileAddressTwo(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            value={props.fileCity}
            onChange={(e) => {
              props.setFileCity(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            value={props.fileState}
            onChange={(e) => {
              props.setFileState(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            label="Zip / Postal Code"
            value={props.fileZip}
            onChange={(e) => {
              props.setFileZip(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="Country"
            value={props.fileCountry}
            onChange={(e) => {
              props.setFileCountry(e.target.value);
            }}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}

export default RecordDetailsForm;
