import React from "react";
// --- import Material-UI components ---
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// --- import customer Material UI styles ---
import useStyles from "../../utils/Styles/Styles";

function Home() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Typography component="h1" variant="h2" justify="center" align="center">
              Welcome to WatchDawg!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default Home;
