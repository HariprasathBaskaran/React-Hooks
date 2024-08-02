import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [number, setNumber] = useState(initialCount);
  return (
    <div>
      <p>count:{number}</p>
      <button onClick={() => setNumber((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setNumber((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setNumber(initialCount)}>Reset</button>
      {/* <button onClick={() => setNumber(number + 5)}>IncrementFive</button> */}
    </div>
  );
}

export default HookCounterTwo;
