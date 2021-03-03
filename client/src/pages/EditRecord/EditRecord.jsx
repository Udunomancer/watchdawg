// --- import default React dependencies ---
import React, { useState } from "react";
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

const steps = ["Step 1", "Step 2", "Step 3"]

function EditRecord() {
    // Use imported styles
    const classes = PageStyles();

    // State to store file and file details

    // Set up state to track current file edit steps
    const [activeStep, setActiveStep] = useState(0);

    // Handlers for moving to Next or Previous steps
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>

            </Paper>
        </main>
    )
}

export default EditRecord;