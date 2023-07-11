import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
  },
  reducers: {
    courses: (state, action) => {
      state.courses = action.payload;
    },
  },
});
export const { courses } = CourseSlice.actions;
export default CourseSlice.reducer;
