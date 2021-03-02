// --- import React baseline dependencies ---
import React from "react";
// --- import required Material UI components ---
import Typography from "@material-ui/core/Typography";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {`Copyright © Kyle Chriscoe ${new Date().getFullYear()}.`}
        </Typography>
    );
}

export default Copyright;