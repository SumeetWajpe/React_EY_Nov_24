import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (store, action) => {
      let courseToBeAdded = action.payload;
      store.push(courseToBeAdded);
      return store;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
