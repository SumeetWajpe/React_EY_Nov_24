import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import Counter from "../counter/counter";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";

const App = () => (
  <>
    <GetPostById />
    {/* <Posts /> */}
    {/* <Counter /> */}
    {/* <ListOfCourses /> */}
  </>
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
