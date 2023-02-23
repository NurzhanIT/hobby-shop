import $api from "../api";
export const createItem = (name, description, price, category) => {
  $api
    .post("item", { name, description, price, category })
    .then((response) => console.log(response.statusText))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
export const getItem = (item_id) => {
  $api
    .get(`items/${item_id}`)
    .then((response) => console.log(response.data.item))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
export const getItemsList = () => {
  $api
    .get("items")
    .then((response) => console.log(response.data.items))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
export const updateItem = (item_id, name, description, price, category) => {
  $api
    .patch(`items/${item_id}`, { name, description, price, category })
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
export const deleteItem = (item_id) => {
  $api
    .delete(`items/${item_id}`)
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.log("axios: ", err);
      console.log("error message: ", err.response.data);
    });
};
