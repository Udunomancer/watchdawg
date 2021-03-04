// --- import default React dependency ---
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import EventDisplayForm from "../../components/EventDisplayForm/EventDisplayForm";

const steps = ["Event Details", "Files"];

function NewRecord() {
  // Use imported styles
  const classes = PageStyles();

  // State to store file and file details until upload
  // const [file, setFile] = useState(new FormData());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const { id } = useParams();
  // const history = useHistory();

  // useState to store a URL to a preview image
  // const [imageURL, setImageURL] = useState();

  // Set up state to track current file upload steps
  const [activeStep, setActiveStep] = useState(0);

  // Handlers for moving to Next or Previous steps
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleFileUpload = (event) => {
  //   let tempFile = new FormData();

  //   if (imageURL) {
  //     URL.revokeObjectURL(imageURL);
  //   }
  //   tempFile.append("image", event.target.files[0]);
  //   setFile(tempFile);
  //   setImageURL(URL.createObjectURL(event.target.files[0]));
  // };
  // axios.post("route", object including formData, )

  useEffect(() => {
    axios
      .get(`/api/events/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDate(response.data.date);
        setLatitude(response.data.latitude);
        setLongitude(response.data.longitude);
        setAddressOne(response.data.addressOne);
        setAddressTwo(response.data.addressTwo);
        setCity(response.data.city);
        setState(response.data.state);
        setZip(response.data.zip);
        setCountry(response.data.country);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
                The new event can be found in the event collection.
              </Typography>
            </>
          ) : (
            <>
              {activeStep === 0 ? (
                <EventDisplayForm
                  title={title}
                  description={description}
                  date={date}
                  latitude={latitude}
                  longitude={longitude}
                  addressOne={addressOne}
                  addressTwo={addressTwo}
                  city={city}
                  state={state}
                  zip={zip}
                  country={country}
                />
              ) : activeStep === 1 ? null : null}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                {activeStep !== 1 && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    View Images
                  </Button>
                )}
              </div>
            </>
          )}
        </>
      </Paper>
    </main>
  );
}

export default NewRecord;
