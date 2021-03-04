// --- import default React dependency ---
import React from "react";
// --- import Material-UI dependencies ---
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function EventDisplayForm(props) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {props.title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography >{props.description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography><strong>Latitude/Longitude: </strong></Typography>
          <Typography >{props.latitude}, {props.longitude}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography ><strong>Address: </strong></Typography>
          <Typography >{props.addressOne} {props.addressTwo}</Typography>
          <Typography >{props.city}, {props.state} {props.zip}, {props.country}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default EventDisplayForm;
