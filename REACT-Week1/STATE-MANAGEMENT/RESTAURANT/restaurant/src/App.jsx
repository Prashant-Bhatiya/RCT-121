import { useState } from "react";
import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";
import RestaurantForm from "./components/RestaurantForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RestaurantForm />
      <br />
      <br />
      <RestaurantDetails />
    </div>
  );
}

export default App;
