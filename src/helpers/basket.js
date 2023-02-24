import $api from "../api";
import { setBasket } from "../store/userReducer";
export const createBasket = (items) => {
  $api
    .post("basket", { items })
    .then((response) => console.log(response.data.basket))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
export const getBasket = () => {
  return (dispatch) => {
    $api
      .get(`basket/`)
      .then((response) => {
        dispatch(setBasket(response.data.basket));
      })
      .catch((err) => {
        console.log("axios: ", err);
        console.log("error message: ", err.response.data);
      });
  };
};
export const updateBasket = (items) => {
  $api
    .patch(`basket/`, { items })
    .then((response) => console.log(response.data.basket))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
