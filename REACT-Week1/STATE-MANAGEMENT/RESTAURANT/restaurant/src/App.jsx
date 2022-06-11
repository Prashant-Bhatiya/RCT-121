import { useState } from "react";
import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";
import RestaurantForm from "./components/RestaurantForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Restaurant</h1>
      <RestaurantForm /> 
      <br />
      <br />
      <RestaurantDetails />
    </div>
  );
}

export default App;
