import DisplayCount from "./useMemo";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  return (
    <div style={{ margin: "10px" }}>
      <p>Count : {counter}</p>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        Counter++
      </button>
      <hr />
      <p>{text}</p>
      Enter text here :{" "}
      <input type="text" onChange={e => setText(e.target.value)} />
      <hr />
      <DisplayCount count={counter} />
    </div>
  );
}

export default App;
