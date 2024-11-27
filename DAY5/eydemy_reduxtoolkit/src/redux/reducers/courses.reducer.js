import { createSlice } from "@reduxjs/toolkit";

// initialState should be an object -> {courses:[],loading:true,error:""}

let initialState = [];

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    incrementLikes: (store, action) => {
      // console.log("Increment Likes !!");
      // console.log(action);
      // return store; // updated store

      let cid = action.payload;
      let index = store.findIndex(c => c.id == cid);

      // return [
      //   ...store.slice(0, index),
      //   { ...store[index], likes: store[index].likes + 1 },
      //   ...store.slice(index + 1),
      // ];

      store[index].likes++; // The Immer library that returns a newer object (store)
      return store;
    },
    deleteCourse: (store, action) => {
      // logic to delete (filter/splice)
      let cid = action.payload;
      let index = store.findIndex(c => c.id == cid);
      store.splice(index, 1);
      return store;
    },
    setAllCourses: (store, action) => {
      store = action.payload;
      return store;
    },
  },
});

export const { incrementLikes, deleteCourse, setAllCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
