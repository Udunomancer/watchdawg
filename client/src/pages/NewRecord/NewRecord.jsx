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
import RecordFileForm from "../../components/RecordFileForm/RecordFileForm";
import RecordEventForm from "../../components/RecordEventForm/RecordEventForm";
import RecordReviewForm from "../../components/RecordReviewForm/RecordReviewForm";

const steps = ["Upload File", "File Details", "Add to Event", "Confirm Upload"];

function NewRecord() {
  // Use imported styles
  const classes = PageStyles();

  // State to store file and file details until upload
  const [file, setFile] = useState(undefined);
  const [fileTitle, setFileTitle] = useState("");
  const [fileDescription, setFileDescription] = useState("");
  const [fileDate, setFileDate] = useState("");
  const [fileLatitude, setFileLatitude] = useState("");
  const [fileLongitude, setFileLongitude] = useState("");
  const [fileAddressOne, setFileAddressOne] = useState("");
  const [fileAddressTwo, setFileAddressTwo] = useState("");
  const [fileCity, setFileCity] = useState("");
  const [fileState, setFileState] = useState("");
  const [fileZip, setFileZip] = useState("");
  const [fileCountry, setFileCountry] = useState("");

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
              {activeStep === 0 ? (
                <RecordFileForm />
              ) : activeStep === 1 ? (
                <RecordDetailsForm
                  fileTitle={fileTitle}
                  setFileTitle={setFileTitle}
                  fileDescription={fileDescription}
                  setFileDescription={setFileDescription}
                  fileDate={fileDate}
                  setFileDate={setFileDate}
                  fileLatitude={fileLatitude}
                  setFileLatitude={setFileLatitude}
                  fileLongitude={fileLongitude}
                  setFileLongitude={setFileLongitude}
                  fileAddressOne={fileAddressOne}
                  setFileAddressOne={setFileAddressOne}
                  fileAddressTwo={fileAddressTwo}
                  setFileAddressTwo={setFileAddressTwo}
                  fileCity={fileCity}
                  setFileCity={setFileCity}
                  fileState={fileState}
                  setFileState={setFileState}
                  fileZip={fileZip}
                  setFileZip={setFileZip}
                  fileCountry={fileCountry}
                  setFileCountry={setFileCountry}
                />
              ) : activeStep === 2 ? (
                <RecordEventForm />
              ) : activeStep === 3 ? (
                <RecordReviewForm />
              ) : null}
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
