import { useState } from "react";
import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";
import RestaurantForm from "./components/RestaurantForm";

function App() {

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
