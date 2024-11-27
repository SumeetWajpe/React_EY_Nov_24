export const COURSES_FETCH_REQUESTED = "COURSES_FETCH_REQUESTED";
export const COURSES_FETCH_RETRY = "COURSES_FETCH_RETRY";
export function FetchAllCourses_Saga() {
  return { type: COURSES_FETCH_REQUESTED };
}

export function FetchAllCourses_Retry_Saga() {
  return { type: COURSES_FETCH_RETRY };
}
