// --- import default React dependency ---
import React, { useState, useEffect } from "react";

import axios from "axios";
// --- import Material-UI dependencies ---
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
// --- import custom Material-UI styles ---
import PageStyles from "../../utils/Styles/PageStyles";
// --- import custom components ---
import RecordForm from "../../components/RecordForm/RecordForm";

const steps = ["Upload File", "File Details", "Add to Event"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return;
    case 1:
      return;
    case 2:
      return;
    default:
      throw new Error("Unknown step");
  }
}

function NewRecord() {

  // Use imported styles
  const classes = PageStyles();
  
  // Set up state to track current file upload steps
  const [activeStep, setActiveStep] = useState(0);
  
  // Handlers for moving to Next or Previous steps
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
      <main className={classes.layout}>
          <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                  Upload Image/Video
              </Typography>
          </Paper>
      </main>
  );
}

export default NewRecord;
