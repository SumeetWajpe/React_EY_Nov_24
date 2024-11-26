import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = [];

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("http://jsonplaceholder.typicode.com/posts");
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (store, action) => {
      console.log(store.length);
      return store; // updated store
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (store, action) => {
      store = action.payload;
      return store;
    });
  },
});

export const { addPost, setAllPosts } = postsSlice.actions;
export default postsSlice.reducer;
