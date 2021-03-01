import axios from "axios";
import jwt from "jsonwebtoken";

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    axios
      .post("/api/users/login", {
        email: loginPayload.email,
        password: loginPayload.password,
      })
      .then((response) => {
        jwt.verify(
          response.data.token,
          process.env.REACT_APP_JWT_SIGNATURE,
          (err, decoded) => {
            if (err) {
              dispatch({ type: "LOGIN_ERROR", error: err });
              return;
            } else {
              dispatch({
                type: "LOGIN_SUCCESS",
                payload: { auth_token: response.data.token },
              });
              return response;
            }
          }
        );
      });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: "Error" });
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
