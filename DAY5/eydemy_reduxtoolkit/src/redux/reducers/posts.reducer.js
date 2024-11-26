import { createSlice } from "@reduxjs/toolkit";

let initialState = { posts: [], loading: true, error: "" };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (store, action) => {
      console.log(store.length);
      return store; // updated store
    },
    setAllPosts: (store, action) => {
      store.posts = action.payload;
      store.loading = false;
      return store;
    },
  },
});

export const { addPost, setAllPosts } = postsSlice.actions;
export default postsSlice.reducer;
