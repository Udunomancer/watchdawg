// --- import default React dependencies ---
import React, { useEffect, useState } from "react";
// --- import React Router Dom dependencies ---
import { Link, useHistory, useParams } from "react-router-dom";
// --- import Material-UI dependencies ---
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
// --- import Material-UI Icon dependencies ---
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";
// --- import custom Material-UI dependencies ---
import PageStyles from "../../utils/Styles/PageStyles";
// --- import axios for calls to DB ---
import axios from "axios";

const steps = ["General", "Location", "Event"];

function SingleRecord() {
  // Use imported styles
  const classes = PageStyles();

  // State to store selected file and file details
  const [record, setRecord] = useState({});

  // State to track stepper
  const [activeStep, setActiveStep] = useState(0);

  // Variables for parameter and history
  const { id } = useParams();
  const history = useHistory();

  // Handlers for moving to Next or Previous steps
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  // Function to delete record on delete click
  function handleDeleteClick() {
    axios
      .delete(`/api/records/${id}`)
      .then((response) => {
        console.log(response.data);
        history.push("/records");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios
      .get(`/api/records/${id}`)
      .then((response) => {
        setRecord(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography components="h2" variant="h4" align="center">
            {record.fileTitle}
          </Typography>
          <Grid container justify="center">
            <Grid item xs={12} sm={9}>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                {activeStep !== 2 && (
                  <Button onClick={handleNext} className={classes.button}>
                    Next
                  </Button>
                )}
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardHeader
                  action={
                    <>
                      <IconButton component={Link} to={`/records/${id}/edit`}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={handleDeleteClick}>
                        <CancelIcon />
                      </IconButton>
                    </>
                  }
                />
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/350/350"
                  title={record.fileTitle}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              {activeStep === 0 && (
                <>
                  <Typography>
                    <strong>Title: </strong>
                    {record.fileTitle}
                  </Typography>
                  <Typography>
                    <strong>Description: </strong>
                    {record.fileDescription}
                  </Typography>
                  <Typography>
                    <strong>Date: </strong>
                    {record.fileDate}
                  </Typography>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <Typography>
                    <strong>Latitude, Longitude: </strong>
                    {`${record.fileLatitude}, ${record.fileLongitude}`}
                  </Typography>
                  <Typography>
                    <strong>Address: </strong>
                  </Typography>
                  <Typography>
                    {`${record.fileAddressOne} ${record.fileAddressTwo}`}
                  </Typography>
                  <Typography>
                    {`${record.fileCity}, ${record.fileState} ${record.fileZip}`}
                  </Typography>
                  <Typography>{record.fileCountry}</Typography>
                </>
              )}
            </Grid>
          </Grid>
        </Paper>
      </main>
    </>
  );
}

export default SingleRecord;
