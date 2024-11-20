import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Count : {counter}</h2>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        ++
      </button>
    </div>
  );
}
