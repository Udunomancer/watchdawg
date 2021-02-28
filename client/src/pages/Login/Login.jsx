import React, { useState } from "react";
// --- import User Auth Context ---
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/users/login", { email, password })
      .then((response) => {
        console.log(response.data);
        jwt.verify(
          response.data.token,
          process.env.REACT_APP_JWT_SIGNATURE,
          (err, decoded) => {
            if (err) {
              console.log(err);
            } else {
              setToken(response.data.token);
              history.push("/");
            }
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Welcome! Please login to continue</h1>
        </div>
      </div>
      <div className="row">
          <form className="col s12" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col s3"></div>
              <div className="input-field col s6">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="col s3"></div>
              <div className="input-field col s6">
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value.toLowerCase());
                  }}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row center-align">
              <button className="waves-effect waves-light btn">Sign in!</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default Login;
