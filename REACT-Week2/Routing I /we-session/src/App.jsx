import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Allroute from "./Routing/Allroute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>My APP</h1>
      <Allroute />
    </div>
  );
}

export default App;
