import axios from "axios";
import { call, takeLatest, put, retry } from "redux-saga/effects";
import { setAllPosts } from "../redux/reducers/posts.reducer";
import { addNewCourse, setAllCourses } from "../redux/reducers/courses.reducer";

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

function GetAllCourses() {
  return axios.get("http://localhost:3500/courses");
}

function* fetchCoursesSaga() {
  try {
    const res = yield call(GetAllCourses); // places the async call
    yield put(setAllCourses(res.data)); // put is like dispatch
  } catch (error) {
    // put(setAllCoursesRejected(error))
  }
}

function* retrySaga() {
  try {
    const SECOND = 1000;
    const response = yield retry(3, 10 * SECOND, GetAllCourses);
    yield put(setAllCourses(response.data));
  } catch (error) {
    // yield put({ type: "REQUEST_FAIL", payload: { error } });
  }
}

function AddNewCourse(newcourse) {
  console.log(newcourse);
  return axios.post("http://localhost:3500/courses", newcourse);
}

function* AddNewCourse_Gen_Saga(action) {
  console.log(action);
  try {
    const res = yield call(AddNewCourse, action.payload); // places the async call
    yield put(addNewCourse()); // put is like dispatch
  } catch (error) {
    // put(setAllCoursesRejected(error))
  }
}

// Watcher Saga
export function* mySaga() {
  // yield takeLatest("POSTS_FETCH_REQUESTED", fetchPostsSaga);
  yield takeLatest("COURSES_FETCH_REQUESTED", fetchCoursesSaga);
  // yield takeLatest("COURSES_FETCH_RETRY", retrySaga);
  yield takeLatest("ADD_NEW_COURSE", AddNewCourse_Gen_Saga);
}
