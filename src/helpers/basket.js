import $api from "../api";

export const createBasket = (items) => {
  $api
    .post("basket", { items })
    .then((response) => console.log(response.data.basket))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
export const getBasket = (user_id) => {
  $api
    .get(`basket/${user_id}`)
    .then((response) => console.log(response.data.basket))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
export const updateBasket = (user_id, items) => {
  $api
    .patch(`basket/${user_id}`, { items })
    .then((response) => console.log(response.data.basket))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
