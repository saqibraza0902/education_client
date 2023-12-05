import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  dob: string;
}
interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  user: IUser | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{ token: string; user: IUser }>
    ) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logoutAction: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginUser, logoutAction } = authSlice.actions;

export default authSlice.reducer;
