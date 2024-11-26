import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import { setAllPosts } from "../redux/reducers/posts.reducer";

function GetAllPosts() {
  return axios.get("http://jsonplaceholder.typicode.com/posts");
}

// worker saga
function* fetchPostsSaga() {
  try {
    const res = yield call(GetAllPosts); // places the async call
    yield put(setAllPosts(res.data)); // put is like dispatch
  } catch (error) {}
}

// Watcher Saga
export function* mySaga() {
  yield takeLatest("POSTS_FETCH_REQUESTED", fetchPostsSaga);
}
