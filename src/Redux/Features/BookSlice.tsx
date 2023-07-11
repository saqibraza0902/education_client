import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    feedBooks: [],
  },
  reducers: {
    feedBooks: (state, action) => {
      state.feedBooks = action.payload;
    },
    books: (state, action) => {
      state.books = action.payload;
    },
  },
});
export const { books, feedBooks } = BookSlice.actions;
export default BookSlice.reducer;
