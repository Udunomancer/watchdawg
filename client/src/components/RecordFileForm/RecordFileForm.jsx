// --- import default React dependency ---
import React from "react";
// --- import Material-UI dependencies ---
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
// --- import Material-UI Icon dependencies ---
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

function RecordFileForm(props) {
  // Use imported styles
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid
          container
          alignItems="center"
          justify="center"
          item
          xs={12}
          sm={6}
        >
          <Button variant="contained" color="primary" component="label">
            Upload File
            <input type="file" hidden onChange={props.handleFileUpload} />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          {props.file.has("image") && (
            <Card>
              <CardHeader
                title={<Typography variant="h6">File Preview</Typography>}
                subheader={
                  <Typography variant="subtitle2">
                    Confirm the correct file appears below
                  </Typography>
                }
                action={
                  <IconButton>
                    <CancelIcon />
                  </IconButton>
                }
              />
              <CardMedia
                className={classes.media}
                image={props.imageURL ? props.imageURL : "https://via.placeholder.com/350x350"}
                title="Preview Image"
              />
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default RecordFileForm;
