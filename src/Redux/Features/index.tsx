import { combineReducers } from "redux";
import BookSlice from "./BookSlice";
import CartSlice from "./CartSlice";
import CourseSlice from "./CourseSlice";
import EventSlice from "./EventSlice";
const rootReducer = combineReducers({
  books: BookSlice,
  cart: CartSlice,
  course: CourseSlice,
  event: EventSlice,
});
export default rootReducer;
