import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterProvider } from "./context/Countercontext.js";

function Main() {
  const [count, setCount] = useState(5); // Fixed the typo in setCount

  return (
    <React.StrictMode>
      <CounterProvider value={{ count, setCount }}>  
        <App />
      </CounterProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
