import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../Features/BookSlice";
import CartSlice from "../Features/CartSlice";
import CourseSlice from "../Features/CourseSlice";
import EventSlice from "../Features/EventSlice";

const store = configureStore({
  reducer: {
    book: BookSlice,
    cart: CartSlice,
    course: CourseSlice,
    event: EventSlice,
  },
});

export default store;
