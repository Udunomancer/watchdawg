import { JsonWebTokenError } from "jsonwebtoken";
import React from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const AuthToken = React.createContext({
  token: "",
  setNewUser: function(email, password) {
      axios.post("/api/usts/login", {email, password})
      .then((response) => {
          jwt.verify(
              response.data.token,
              process.env.REACT_APP_JWT_SIGNATURE,
              (err, decoded) => {
                if(err) {
                    console.log(err);
                } else {
                    setToken
                }
              }
          )
      })
  },
  verifyCurrentUser: function (token) {
    jwt.verify(token, process.env.REACT_APP_JWT_SIGNATURE, (err, decoded) => {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
  },
});

export default AuthToken;
