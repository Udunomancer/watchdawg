// --- import default React dependency ---
import React from "react";
// --- import Material-UI dependencies ---
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function RecordDetailsForm() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        File Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField required id="title" name="title" label="Title" fullWidth />
        </Grid>
        <Grid item xs={12} >
            <TextField required multiline id="description" name="description" label="Description" fullWidth />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6">
                Location Details
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField id="latitude" name="latitude" label="Latitude" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField id="longitude" name="longitude" label="Longitude" fullWidth />
        </Grid>
        <Grid item xs={12}>
            <TextField id="address1" name="address1" label="Address Line 1" fullWidth />
        </Grid>
        <Grid item xs={12}>
            <TextField id="address2" name="address2" label="Address Line2" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField id="city" name="city" label="City" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField id="zip" name="zip" label="Zip / Postal Code" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField id="country" name="country" label="Country" fullWidth />
        </Grid>
      </Grid>
    </>
  );
}

export default RecordDetailsForm;