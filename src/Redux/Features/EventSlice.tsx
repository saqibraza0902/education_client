import { createSlice } from "@reduxjs/toolkit";

const EventSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
  },
  reducers: {
    AddEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});
export const { AddEvents } = EventSlice.actions;
export default EventSlice.reducer;
