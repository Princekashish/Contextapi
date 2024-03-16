# React + Vite

# Actually, In this I have learnt about context api

1. Creatcontext
2. Provider
3. Consumer

In one small project I have learned the contextapi 


# 1. Context Object

**In that I have created the countercontxt.js -- file in context folder**

```js
import { createContext, useContext } from "react";

export const CounterContext = createContext({count: null});// its like a props ---- but it is object

export const CounterProvider = CounterContext.Provider;

export default function useCount() {
return useContext(CounterContext);
}

```
You can also create Context Object in many way I found that this is most customised way. Thats why I have used this method If you dont understand, then you can refer **#Chaiaurcode** (Contextapi series) it coud be more helpful to you

# 2. wrappe the Provider
**In this we have wrapping the main.jsx file with provider**

```js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterProvider } from "./context/Countercontext.js";

function Main() {
  const [count, setCount] = useState(5); //we make count -- useState -- with same name

  return (
    <React.StrictMode>
      <CounterProvider value={{ count, setCount }}>// here we have taking the value from counterContex.js 
        <App />
      </CounterProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

```
Which we have initialised in countercontext.js Basically, the main motive of this provider is to give the access of all the file - component that we have to manipulate using **useCount()**


# 3. We have called the useContext using useCount
**In this we have use useContext the App.jsx file with useCounter**

```js
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
```
Nothing much call the count which we have declared in main.jsx `const [count, setCount] = useState(5); ` 

# 4. We have called the useContext using useCount 
**In this we have use useContext the Button.jsx file with useCounter**

```js
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
        onClick={() => setCount(count - 1)}
        className="border py-2 px-4 border-black rounded-md "
      >
        Decrement
      </button>
    </div>
  );
}

export default Buttons;

```
