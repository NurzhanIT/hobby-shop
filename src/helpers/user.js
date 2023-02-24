import axios from "axios";
import $api from "../api";
import { API_URL } from "../api";
import { userAuth } from "../store/userReducer";
import { setActive, setUserInfo } from "../store/userReducer";
export const authUser = async (email, password) => {
  await axios
    .post(`${API_URL}tokens/authentication`, { email, password })
    .then((response) =>
      localStorage.setItem("token", response.data.authentication_token.token)
    )
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data.error);
    });
};

export const getUser = () => {
  return (dispatch) => {
    $api
      .get("get-user")
      .then((response) => {
        dispatch(setUserInfo(response.data.user));
      })
      .catch((err) => {
        console.log("axios: ", err);
        console.log("error message: ", err.response);
      });
  };
};

export const activateUser = (token, old_password, new_password) => {
  return (dispatch) => {
    $api
      .put("users/activated", { token, old_password, new_password })
      .then((response) => dispatch(setActive(response.data.user.activated)))
      .catch((err) => {
        console.log("axios: ", err);
        console.log("error message: ", err.response.data.error);
      });
  };
};

export const registerUser = (name, email, password, role = "user") => {
  axios
    .post("http://localhost:8000/v1/users", { name, email, role, password })
    .then((res) => console.log(res.data.user))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data.error);
    });
};
export const checkUser = (dispatch) => {
  if (localStorage.getItem("token")) {
    dispatch(getUser());
    dispatch(userAuth());
  }
};
