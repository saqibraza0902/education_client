import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookTypes {
  desc: string;
  image: string;
  price: number;
  rating: number;
  title: string;
  writer: string;
  _id: string;
}

interface BookState {
  books: BookTypes[];
  feedBooks: BookTypes[];
}

const initialState: BookState = {
  books: [],
  feedBooks: [],
};

const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setFeedBooks: (state, action: PayloadAction<BookTypes[]>) => {
      state.feedBooks = action.payload;
    },
    setBooks: (state, action: PayloadAction<BookTypes[]>) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks, setFeedBooks } = BookSlice.actions;
export default BookSlice.reducer;
