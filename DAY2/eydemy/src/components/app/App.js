import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import Counter from "../counter/counter";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";
import NewCourse from "../newcourse/newcourse";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import PostDetails from "../postdetails/postdetails";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" Component={ListOfCourses} />
      <Route path="/posts" Component={Posts} />
      <Route path="/postdetails" Component={PostDetails} />

      <Route path="/postbyid" Component={GetPostById} />
      <Route path="/newcourse" Component={NewCourse} />
      <Route
        path="*"
        Component={() => (
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*QOZm9X5er1Y0r5-t"
            width="100%"
            height="100%"
          />
        )}
      />
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
