import React from "react";
import Course from "../course/course";
import { useSelector } from "react-redux";

export default function ListOfCourses() {
  const courses = useSelector(store => store.courses);

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
