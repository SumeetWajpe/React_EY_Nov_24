import React, { useState } from "react";

export default function NewCourse(props) {
  const [newcourse, setNewCourse] = useState({});
  return (
    <div>
      <form onSubmit={() => props.AddANewCourse(newcourse)}>
        <label htmlFor="txtCourseId">Id : </label>{" "}
        <input
          type="text"
          id="txtCourseId"
          required
          onInput={e => setNewCourse({ ...newcourse, id: e.target.value })}
        />{" "}
        <br />
        <label htmlFor="txtCourseTitle">Title : </label>{" "}
        <input
          type="text"
          id="txtCourseTitle"
          onInput={e => setNewCourse({ ...newcourse, title: e.target.value })}
        />{" "}
        <br />
        <button className="btn btn-success">Add Course</button>
      </form>
    </div>
  );
}
