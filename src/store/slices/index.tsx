import { combineReducers } from "redux";
import cart from "./Cart";
const rootReducer = combineReducers({
  cart: cart,
});

export default rootReducer;
