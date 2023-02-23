import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";
import { configureStore } from "@reduxjs/toolkit";
import { itemReducer } from "./itemReducer";
const rootReducer = combineReducers({
  user: userReducer,
  items: itemReducer,
});
export const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(thunk))
);
