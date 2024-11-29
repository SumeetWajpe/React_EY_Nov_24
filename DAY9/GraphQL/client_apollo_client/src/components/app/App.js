import ListOfCourses from "../listofcourses/listofcourses";
import CourseDetails from "../coursedetails/coursedetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={ListOfCourses} />
        <Route path="/coursedetails/:id" Component={CourseDetails} />
        {/* <Route path="/newcourse" Component={NewCourse} /> */}

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
}

export default App;
