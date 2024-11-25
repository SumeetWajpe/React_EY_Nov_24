import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    id: "1",
    title:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. ",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (store, action) => {
      console.log(store.length);

      return store; // updated store
    },
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
