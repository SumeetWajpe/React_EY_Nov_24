export const COURSES_FETCH_REQUESTED = "COURSES_FETCH_REQUESTED";
export function FetchAllCourses_Saga() {
  return { type: COURSES_FETCH_REQUESTED };
}
