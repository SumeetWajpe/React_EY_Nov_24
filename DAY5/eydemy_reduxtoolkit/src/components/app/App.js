import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListOfCourses from "../listofcourses/listofcourses";
import NewCourse from "../newcourse/newcourse";
import Dashboard from "../dashboard/dashboard";
import CourseDetails from "../coursedetails/coursedetails";
import CartItems from "../cart/cartitems/cartitems";
import Posts from "../posts/posts";
import PostDetails from "../postdetails/postdetails";
import Login from "../login/login";
import RequireAuth from "../hoc/requireauth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="" Component={ListOfCourses} />
          <Route path="coursedetails/:id" Component={CourseDetails} />
          <Route path="cart" Component={CartItems} />
          <Route path="posts" Component={Posts} />
          <Route path="postdetails/:id" Component={PostDetails} />

          <Route path="newcourse" Component={NewCourse} />
        </Route>

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

      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        transition="Bounce"
      />
      <ToastContainer /> */}
    </BrowserRouter>
  );
}

export default App;
