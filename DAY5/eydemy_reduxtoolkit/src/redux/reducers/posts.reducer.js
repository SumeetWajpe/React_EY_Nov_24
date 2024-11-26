import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = { posts: [], loading: true, error: "" };

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts",
      );
      return { posts: response.data, loading: false, error: "" };
    } catch (error) {
      return rejectWithValue("Something went wrong !");
    }
  },
);

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
      store.posts = action.payload.posts;
      store.loading = action.payload.loading;
      return store;
    });
    builder.addCase(fetchPosts.rejected, (store, action) => {
      console.log("Rejected case !");
      console.log(action.payload);
      store.loading = false;
      store.error = action.payload;
      return store;
    });
  },
});

export const { addPost, setAllPosts } = postsSlice.actions;
export default postsSlice.reducer;
