import $api from "../api";

import { setActive, setUserInfo } from "../store/userReducer";
export const authUser = async (email, password) => {
  await $api
    .post("tokens/authentication", { email, password })
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
        console.log("error message: ", err.response.data.error);
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
  return (dispatch) => {
    $api
      .post("users", { name, email, role, password })
      .then((res) => console.log(res.data.user))
      .catch((err) => {
        console.log("axios: ", err);
        console.log("error message: ", err.response.data.error);
      });
  };
};
