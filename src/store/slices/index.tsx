import { combineReducers } from "redux";
import cart from "./cart";
import auth from "./auth";
const rootReducer = combineReducers({
  cart: cart,
  auth: auth,
});

export default rootReducer;
