import { useSelector } from "react-redux";

function App() {
  const courses = useSelector(store => store.courses);
  console.log(courses);
  return (
    <>
      <h1>App !</h1>
    </>
  );
}

export default App;
