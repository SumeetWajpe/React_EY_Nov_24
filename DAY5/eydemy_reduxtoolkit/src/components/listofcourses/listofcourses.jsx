import React from "react";
import Course from "../course/course";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  COURSES_FETCH_REQUESTED,
  FetchAllCourses_Saga,
} from "../../saga/sagaactions";

export default function ListOfCourses() {
  const courses = useSelector(store => store.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(FetchAllCourses_Saga());
    dispatch({ type: COURSES_FETCH_REQUESTED });
  }, []);

  return (
    <>
      <div className="row">
        {courses.map(course => (
          <Course coursedetails={course} key={course.id} />
        ))}
      </div>
    </>
  );
}
