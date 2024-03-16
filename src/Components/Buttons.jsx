import React, { useContext } from "react";

import useCount from "../context/Countercontext";

function Buttons() {
  const { count, setCount } = useCount();

  return (
    <div className="space-x-6 space-y-5">
      <button
        onClick={() => setCount(count + 1)}
        className="border py-2 px-4 border-black rounded-md "
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 4)}
        className="border py-2 px-4 border-black rounded-md "
      >
        Decrement
      </button>
    </div>
  );
}

export default Buttons;
