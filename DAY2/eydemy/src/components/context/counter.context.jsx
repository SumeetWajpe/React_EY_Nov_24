import React, { useState } from "react";

let CounterContext = React.createContext({ count: 0 });

export default function GrandParent() {
  const [data] = useState(10);
  return (
    <CounterContext.Provider value={{ count: data }}>
      <Parent />
    </CounterContext.Provider>
  );
}

function Parent() {
  return (
    <div>
      <Child />
    </div>
  );
}

function Child() {
  return (
    <CounterContext.Consumer>
      {value => (
        <div>
          <h3>Count : {value.count}</h3>
        </div>
      )}
    </CounterContext.Consumer>
  );
}
