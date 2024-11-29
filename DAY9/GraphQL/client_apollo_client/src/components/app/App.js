import { useQuery } from "@apollo/client";
import { GETALLCOURSES } from "../../graphql/querries";

function App() {
  let { loading, error, data } = useQuery(GETALLCOURSES);

  if (loading) return <>Loading...</>;
  if (error) return <>Error : ${error.message}</>;
  return (
    <ul>
      {data.courses.map(c => (
        <li key={c.id}>{c.title}</li>
      ))}
    </ul>
  );
}

export default App;
