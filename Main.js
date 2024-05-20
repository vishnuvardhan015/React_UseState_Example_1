import React from "react";
import { useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount(count + 1);
  };

  const decrement = () => {
    return setCount(count - 1);
  };

  return (
    <section>
      <button onClick={decrement} className="button1">
        -
      </button>
      <span className="button2">{count}</span>
      <button onClick={increment} className="button3">
        +
      </button>
    </section>
  );
};

export default Main;
