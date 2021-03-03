// --- import dependencies from React ---
import React, { useState, useEffect, useContext } from "react";
// --- import Material-UI components ---
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// --- import custom Material-UI styles ---
import PageStyles from "../../utils/Styles/PageStyles";
// --- import custom components ---
import Copyright from "../../components/Copyright/Copyright";

// --- import User Auth Context ---
import {
  loginUser,
  useAuthContext,
  useAuthDispatch,
} from "../../utils/UserAuth/index";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

function Login({ setToken }) {
  const classes = PageStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthContext();

  const history = useHistory();

  function handleFormSubmit(e) {
    e.preventDefault();

    loginUser(dispatch, { email, password }).then((response) => {
      console.log(response);
    });
    //   if(!response.data.token) { return };
    //   history.push("/");
    // } catch(error) {
    //   console.log(error);
    // }

    // try {
    //   let response = await loginUser(dispatch, { email, password });
    //   console.log("RESPONSE: " + response);
    //   if(!response.data.token) return;
    //   history.push("/");
    // } catch (error) {
    //   console.log(error);
    // }

    // axios
    //   .post("/api/users/login", { email, password })
    //   .then((response) => {
    //     console.log(response.data);
    //     jwt.verify(
    //       response.data.token,
    //       process.env.REACT_APP_JWT_SIGNATURE,
    //       (err, decoded) => {
    //         if (err) {
    //           console.log(err);
    //         } else {
    //           setToken(response.data.token);
    //           history.push("/");
    //         }
    //       }
    //     );
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            container
            item
            xs={12}
            sm={8}
            md={5}
            justify="center"
            alignItems="center"
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <form className={classes.form} onSubmit={handleFormSubmit} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value.toLowerCase());
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </main>
    // <div className="container">
    //   <div className="row">
    //     <div className="col s12">
    //       <h1 className="center-align">Welcome! Please login to continue</h1>
    //       {/* {
    //         errorMessage ? <p>{errorMessage}</p> : null
    //       } */}
    //     </div>
    //   </div>
    //   <div className="row">
    //       <form className="col s12" onSubmit={handleFormSubmit}>
    //         <div className="row">
    //           <div className="col s3"></div>
    //           <div className="input-field col s6">
    //             <input
    //               id="email"
    //               type="email"
    //               name="email"
    //               value={email}
    //               onChange={(e) => {
    //                 setEmail(e.target.value);
    //               }}
    //             />
    //             <label htmlFor="email">Email</label>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col s3"></div>
    //           <div className="input-field col s6">
    //             <input
    //               id="password"
    //               type="password"
    //               name="password"
    //               value={password}
    //               onChange={(e) => {
    //                 setPassword(e.target.value.toLowerCase());
    //               }}
    //             />
    //             <label htmlFor="password">Password</label>
    //           </div>
    //         </div>
    //         <div className="row center-align">
    //           <button className="waves-effect waves-light btn">Sign in!</button>
    //         </div>
    //       </form>
    //   </div>
    //   <Copyright />
    // </div>
  );
}

export default Login;
