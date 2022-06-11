import { useState } from "react";
import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Restaurant</h1>
      <RestaurantDetails /> 
    </div>
  );
}

export default App;
