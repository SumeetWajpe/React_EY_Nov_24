import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import Counter from "../counter/counter";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";
import NewCourse from "../newcourse/newcourse";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";

const App = () => (
  <BrowserRouter>
    {/* <Link to="/">Courses</Link> | <Link to="/posts">Posts</Link> */}
    <Navbar />
    <Routes>
      <Route path="/" Component={ListOfCourses} />
      <Route path="/posts" Component={Posts} />
      <Route path="/postbyid" Component={GetPostById} />
      <Route path="/newcourse" Component={NewCourse} />
    </Routes>
  </BrowserRouter>
);

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <ListOfCourses />
//       </div>
//     );
//   }
// }

export default App;
