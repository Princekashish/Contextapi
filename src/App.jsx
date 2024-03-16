import React, { useContext } from "react";
import Buttons from "./Components/Buttons";
import useCount from "./context/Countercontext";

function App() {
  const { count } = useCount();
  return (
    <div className="">
      <h1 className="text-center text-5xl">Count : {count}</h1>
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
    </div>
  );
}

export default App;
