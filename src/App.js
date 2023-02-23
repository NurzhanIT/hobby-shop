import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import $api from "./api";
import axios from "axios";
import { activateUser, authUser, registerUser } from "./helpers/user";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./helpers/user";
import { createItem, getItem, getItemsList, deleteItem } from "./helpers/item";
import { createBasket, getBasket, updateBasket } from "./helpers/basket";
function App() {
  const [items, setItems] = useState([]);
  const user = useSelector((user) => user.user);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    // authUser("tabascosn@gmail.com", "nurzhan1505");
    // dispatch(getUser());
    // dispatch(
    //   activateUser("WVB4KBSYP2F4MTSV67PMS672UI", "nurzhan1505", "nurzhan1505")
    // );
    // dispatch(registerUser("nurzhan", "ironmannur03@gmail.com", "nurzhan1505"));
    // createItem("нитка", "для шиться", 500, ["шитье"]);
    // getBasket(3);
    updateBasket(3, [1, 9, 7]);
  }, []);

  return <div className="App"></div>;
}

export default App;
