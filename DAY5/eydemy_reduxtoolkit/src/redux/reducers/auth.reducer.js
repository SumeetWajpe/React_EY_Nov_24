import { createSlice } from "@reduxjs/toolkit";

let initialState = { isUserAuthenticated: false, username: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAuthenticated: (store, action) => {
      store.isUserAuthenticated = action.payload.isUserAuthenticated;
      store.username = action.payload.username;
      // token = action.payload.token
      return store;
    },
  },
});

export const { setUserAuthenticated } = authSlice.actions;
export default authSlice.reducer;
