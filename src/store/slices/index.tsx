import { combineReducers } from "redux";
import cart from "./cart/cart";
import auth from "./auth/auth";
const rootReducer = combineReducers({
  cart: cart,
  auth: auth,
});

export default rootReducer;
