// --- import default React dependency ---
import React, { useState, useEffect } from "react";

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
import RecordDetailsForm from "../../components/RecordDetailsForm/RecordDetailsForm";

const steps = ["Upload File", "File Details", "Add to Event", "Confirm Upload"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return;
    case 1:
      return <RecordDetailsForm />;
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
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your upload.
              </Typography>
              <Typography variant="subtitle1">
                Your upload can now be found in your images, or in the event
                collection.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Upload" : "Next"}
                </Button>
              </div>
            </>
          )}
        </>
      </Paper>
    </main>
  );
}

export default NewRecord;
