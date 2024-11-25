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
    removeFromCart: (store, action) => {
      let id = action.payload;
      return store.filter(c => c.id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
