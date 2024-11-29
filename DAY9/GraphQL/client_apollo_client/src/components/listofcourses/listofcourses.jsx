import React, { useEffect, useState } from "react";
import Course from "../course/course";
import { useQuery } from "@apollo/client";
import { GETALLCOURSES } from "../../graphql/querries";

export default function ListOfCourses() {
  let { loading, error, data } = useQuery(GETALLCOURSES);

  if (loading) return <>Loading...</>;
  if (error) return <>Error : ${error.message}</>;

  return (
    <>
      <header>
        <h1>List Of Courses</h1>
      </header>

      <div className="row">
        {data.courses.map(course => (
          <Course coursedetails={course} key={course.id} />
        ))}
      </div>
    </>
  );
}
